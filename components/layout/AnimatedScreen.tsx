import type { ReactNode } from 'react';

import { FadeSlide } from '@/components/animations/FadeSlide';

type Props = {
  children: ReactNode;
};

export function AnimatedScreen({
  children,
}: Props) {
  return (
    <FadeSlide>
      {children}
    </FadeSlide>
  );
}