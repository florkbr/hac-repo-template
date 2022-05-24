#!/bin/bash
set -euo pipefail

tmp_package=$(mktemp)
tmp_plugin=$(mktemp)
jq ".name = \"${NAME}\" | .version = \"0.0.1\" | .description = \"${NAME}\" | .private = false" package.json > "$tmp_package" && mv "$tmp_package" package.json
jq ".name = \"${NAME}\"" plugin.json > "$tmp_plugin" && mv "$tmp_plugin" plugin.json
