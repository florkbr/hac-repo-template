#!/bin/bash
set -euo pipefail

yarn install
yarn prod
yarn coverage
yarn lint
