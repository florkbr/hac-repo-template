#!/bin/bash

git clone git@github.com:openshift/dynamic-plugin-sdk.git
cp -rf dynamic-plugin-sdk/packages/sample-plugin/* .
rm -rf dynamic-plugin-sdk
