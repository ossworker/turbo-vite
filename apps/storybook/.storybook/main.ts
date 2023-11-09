import { join, dirname } from "path";
import type { StorybookConfig } from '@storybook/vue3-vite'

import { alias } from '../../../alias'

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
// function getAbsolutePath(value) {
//   return dirname(require.resolve(join(value, "package.json")));
// }

/** @type { import('@storybook/vue3-vite').StorybookConfig } */
const config: StorybookConfig = {
  stories: [
    '../stories/**/*.stories.@(js|jsx|ts|tsx|mdx)', 
    '../../../packages/ui/src/components/**/*.stories.@(js|jsx|ts|tsx|mdx)'
  ],
  addons: [
    {name:'@storybook/addon-essentials',options:{docs:false}},
    {name:'@storybook/addon-links'},
    {name:'@storybook/addon-interactions'},
    {name:'@storybook/addon-docs'},
  ],
  framework: {
    name: '@storybook/vue3-vite',
    options: {},
  },
  viteFinal(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      ...alias
    }

    config.plugins = config.plugins ?? []

    return config
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
