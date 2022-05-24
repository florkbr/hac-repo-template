import path from 'path';
import extensions from '../plugin-extensions';
import { sharedModules } from '../plugin-shared';
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const config = require('@redhat-cloud-services/frontend-components-config');
const pckg = import('@openshift/dynamic-plugin-sdk-webpack');

const remotePluginOptions = {
  extensions,
  sharedModules,
};

const allPlugins: any[] = [];

const commonPlugins = async () => {
  const { DynamicRemotePlugin } = await pckg;
  allPlugins.push(new DynamicRemotePlugin(remotePluginOptions));
  return allPlugins;
};

const { config: webpackConfig, plugins } = config({
  rootFolder: path.resolve(__dirname, '../'),
  sassPrefix: '.hacCore, .hacBs',
  deployment: process.env.BETA ? 'beta/api/plugins' : 'api/plugins',
});

module.exports = (env: { analyze: string; }) => {
  return commonPlugins().then((resolvedPlugins: any) => {
    plugins.push(...resolvedPlugins);

    if (env && env.analyze === 'true') {
      plugins.push(new BundleAnalyzerPlugin());
    }
    return {
      ...webpackConfig,
      plugins,
    };
  });
};