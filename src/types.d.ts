/// <reference types="@docusaurus/module-type-aliases" />

declare module '@theme/ThemedImage' {
  import type { ComponentProps } from 'react';

  export interface Props extends Omit<ComponentProps<'img'>, 'src'> {
    readonly sources: {
      readonly light: string;
      readonly dark: string;
    };
  }

  const ThemedImage: (props: Props) => JSX.Element;
  export default ThemedImage;
}

declare module '*.svg';
