import { ComputedRef, MaybeRef } from 'vue'
export type LayoutKey = string
declare module "../../../../node_modules/.pnpm/registry.npmmirror.com+nuxt@3.8.1_eslint@7.32.0_rollup@2.79.1_typescript@5.2.2_vite@4.5.0/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: MaybeRef<LayoutKey | false> | ComputedRef<LayoutKey | false>
  }
}