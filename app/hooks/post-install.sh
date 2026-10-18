#!/bin/bash

# EAS Build post-install hook
# Patches ExpoModulesCorePlugin.gradle for Gradle 9 compatibility

PLUGIN_PATH="node_modules/expo-modules-core/android/ExpoModulesCorePlugin.gradle"

echo "🔧 Aplicando patch a ExpoModulesCorePlugin.gradle..."

if [ -f "$PLUGIN_PATH" ]; then
  cat > "$PLUGIN_PATH" << 'EOF'
import org.gradle.api.Plugin
import org.gradle.api.Project

class KotlinExpoModulesCorePlugin implements Plugin<Project> {
  void apply(Project project) {
    project.rootProject.ext.expoProvidesDefaultConfig = {
      true
    }

    project.ext.safeExtGet = { prop, fallback ->
      project.rootProject.ext.has(prop) ? project.rootProject.ext.get(prop) : fallback
    }

    project.buildscript {
      project.ext.kotlinVersion = {
        project.rootProject.ext.has("kotlinVersion")
            ? project.rootProject.ext.get("kotlinVersion")
            : "2.0.21"
      }

      project.ext.kspVersion = {
        def kspVersionsMap = [
          "1.6.10": "1.6.10-1.0.4",
          "1.6.21": "1.6.21-1.0.6",
          "1.7.22": "1.7.22-1.0.8",
          "1.8.0": "1.8.0-1.0.9",
          "1.8.10": "1.8.10-1.0.9",
          "1.8.20": "1.8.20-1.0.11",
          "1.8.22": "1.8.22-1.0.11",
          "1.9.23": "1.9.23-1.0.20",
          "1.9.24": "1.9.24-1.0.20",
          "2.0.21": "2.0.21-1.0.28"
        ]

        project.rootProject.ext.has("kspVersion")
          ? project.rootProject.ext.get("kspVersion")
          : kspVersionsMap.containsKey(project.ext.kotlinVersion())
          ? kspVersionsMap.get(project.ext.kotlinVersion())
          : "2.0.21-1.0.28"
      }
    }
  }
}

ext.applyKotlinExpoModulesCorePlugin = {
  try {
    apply plugin: 'kotlin-android'
  } catch (e) {}

  apply plugin: KotlinExpoModulesCorePlugin
}

ext.applyKspJvmToolchain = {
  project.ksp {
    kotlin.jvmToolchain(17)
  }
}

ext.useDefaultAndroidSdkVersions = {
  project.android {
    compileSdkVersion project.ext.safeExtGet("compileSdkVersion", 36)

    defaultConfig {
      minSdkVersion project.ext.safeExtGet("minSdkVersion", 24)
      targetSdkVersion project.ext.safeExtGet("targetSdkVersion", 36)
    }

    lintOptions {
      abortOnError false
    }
  }
}

ext.useExpoPublishing = {
  // PATCH: Gradle 9 compatibility
  // components.release was removed in Gradle 9.
  // This function is only used to publish the library to Maven,
  // not to compile apps. Safe to skip.
  return
}

ext.useCoreDependencies = {
  dependencies {
    if (!project.project.name.startsWith("expo-modules-core")) {
      implementation project.project(':expo-modules-core')
    }
    implementation "org.jetbrains.kotlin:kotlin-stdlib-jdk7:${project.ext.kotlinVersion()}"
  }
}

ext.boolish = { value ->
  return value.toString().toBoolean()
}
EOF

  echo "✅ Patch aplicado a ExpoModulesCorePlugin.gradle"
else
  echo "❌ No se encontró $PLUGIN_PATH"
  exit 1
fi