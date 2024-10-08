import typescript from "@rollup/plugin-typescript";

export default {
  input: "src/main.ts",
  output: {
    dir: "dist",
    format: "cjs",
  },
  external: [
    "express",
    "vite",
    "node-fetch",
    "fs",
    "path",
    "picocolors",
    "express-static-gzip",
  ],
  plugins: [typescript({ module: "ESNext", include: "src/main.ts" })],
};
