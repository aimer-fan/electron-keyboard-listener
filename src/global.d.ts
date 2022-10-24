/* eslint-disable @typescript-eslint/no-explicit-any */
declare interface Window {
  ElectronAPI: any;
}

declare module '*.vue' {
  import type { DefineComponent } from 'vue';

  // eslint-disable-next-line @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
