/// <reference types="vite/client" />
/// <reference types="vite-plugin-pages/client" />
declare module 'vue3-marquee';

import type { GlobalComponents } from 'vue'
declare global {
  type ComponentInstance = {
    [Property in keyof GlobalComponents]: InstanceType<GlobalComponents[Property]>
  }
}

import 'vue-router'
declare module 'vue-router' {
  interface RouteMeta {
    //
  }
}
