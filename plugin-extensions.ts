import type { EncodedExtension, ModelFeatureFlag, TelemetryListener, HrefNavItem } from '@openshift/dynamic-plugin-sdk';

const e1: EncodedExtension<ModelFeatureFlag> = {
  type: 'core.flag/model',
  properties: {
    flag: 'EXAMPLE',
    model: {
      group: 'example.org',
      version: 'v1',
      kind: 'ExampleModel',
    },
  },
};

const e2: EncodedExtension<TelemetryListener> = {
  type: 'core.telemetry/listener',
  properties: {
    listener: { $codeRef: 'telemetryListener' },
  },
};

const e3: HrefNavItem = {
  type: 'core.navigation/href',
  properties: {
    id: 'hac-bs',
    href: '/hac-bs',
    name: 'Build Service Home',
  },
};

// TODO CodeRef type not properly exposed from SDK
const e4 = {
  type: 'core.page/route',
  properties: {
    path: '/hac-bs',
    component: {
      $codeRef: 'init',
    },
  },
};

export default [e1, e2, e3, e4];
