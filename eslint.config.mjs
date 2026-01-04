import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // Legacy site contains bundled code that shouldn't be linted
    "legacy_site/**",
  ]),
  {
    rules: {
      // Disable overly strict rule that flags legitimate patterns like:
      // - Reading localStorage on mount
      // - Closing mobile menus on route change
      // - Syncing state with external systems (which is what effects are for!)
      "react-hooks/set-state-in-effect": "off",
    },
  },
]);

export default eslintConfig;
