import { resolve } from 'node:path'

const r = (p: string) => resolve(__dirname, p)

export const alias: Record<string, string> = {
  '@ui': r('./packages/ui/src/'),
  'pinia': r('./packages/pinia-store/node_modules/pinia/dist/pinia.mjs'),
}
