//  @ts-check

import { tanstackConfig } from "@tanstack/eslint-config"
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

export default [
  {
    ignores: [
      ".output/**",
      "node_modules/**",
      "public/**",
      ".content-collections/**",
    ],
  },
  ...tanstackConfig,
  // Disable rules that don't apply or have missing plugins
  {
    rules: {
      "react-hooks/exhaustive-deps": "off",
    },
  },
  // Relax rules for shadcn-generated UI components
  {
    files: ["src/components/ui/**"],
    rules: {
      "@typescript-eslint/no-unnecessary-condition": "off",
      "no-shadow": "off",
    },
  },
  // Relax rules for test-suite probes: these tests intentionally guard
  // against browser APIs whose types claim to be non-nullable but which
  // may be absent, mutated, or overridden at runtime (that's the whole
  // point of the detection tests). The `expected` / `observe` callbacks;
