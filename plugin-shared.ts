import type { WebpackSharedObject } from '@openshift/dynamic-plugin-sdk-webpack';

/**
 * Shared modules consumed and/or provided by this plugin.
 *
 * A host application typically provides some modules to its plugins. If an application
 * provided module is configured as an eager singleton, we suggest using `import: false`
 * to avoid bundling a fallback version of the module when building your plugin.
 *
 * Plugins may provide additional shared modules that can be consumed by other plugins.
 *
 * @see https://webpack.js.org/plugins/module-federation-plugin/#sharing-hints
 */
export const sharedModules: WebpackSharedObject = {
  '@openshift/dynamic-plugin-sdk': { singleton: true, import: false },
  '@patternfly/react-core': {},
  '@patternfly/react-table': {},
  react: { singleton: true, import: false },
  'react-dom': { singleton: true, import: false },
};
