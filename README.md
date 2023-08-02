# style :: scss : module.scss

yarn add -D sass

yarn add -D typescript-plugin-css-modules <!-- auto complete -->

- // tsconfig.json
  {
  "compilerOptions": {
  "plugins": [{ "name": "typescript-plugin-css-modules" }]
  }
  }

- // .vscode/settings.json
  {
  "typescript.tsdk": "node_modules/typescript/lib",
  "typescript.enablePromptUseWorkspaceTsdk": true
  }
