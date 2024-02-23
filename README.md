# vanilla-starter-template

starter template for vanilla typescript project using vite lint prettier

## Initialize node project

```sh
npm init --y
```

Configure package.json as needed.

## typescript

```sh
npm install -D typscript
npx tsc --init
```

Configure `tsconfig.json` as needed.

```diff
{
  "compilerOptions": {
-    "target": "es2016",
+    "target": "es2019",
    "module": "commonjs",
+    "sourceMap": true,
+    "outDir": "./dist",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true
-  }
+  },
+  "include": ["src/**/*"]
}
```

## tsx

```sh
npm install -D tsx
```

Configure `package.json`.

```diff
{
  "main": "dist/index.js",
  "scripts": {
    "dev": "tsx src/index.ts",
    "watch": "tsx watch src/index.ts",
  },
```

Create `src/index.ts`.

```typescript
console.log('hello world')
```

Run without build.

```sh
npm run dev
```

Watch without build.

```sh
npm run watch
```

## vitest

```sh
npm install -D vitest @vitest/coverage-c8
```

Configure `package.json`.

```diff
{
  "scripts": {
+    "test": "vitest",
+    "coverage": "vitest run --coverage"
  },
```

Create `src/calc.ts`.

```typescript
const add = (a: number, b: number): number => a + b
const subtract = (a: number, b: number): number => a - b
export { add, subtract }
```

Create `src/calc.test.ts`.

```typescript
import { expect, test } from 'vitest'
import { add, subtract } from './calc'

test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3)
})

test('subtract 3 - 2 to equal 1', () => {
  expect(subtract(3, 2)).toBe(1)
})
```

## lint

```sh
PS D:\GitHub\vanilla-starter-template> npm init @eslint/config
√ How would you like to use ESLint? · problems    
√ What type of modules does your project use? · esm
√ Which framework does your project use? · none
√ Does your project use TypeScript? · No / Yes
√ Where does your code run? · browser, node
√ What format do you want your config file to be in? · JSON
The config that you've selected requires the following dependencies:    

@typescript-eslint/eslint-plugin@latest @typescript-eslint/parser@latest
√ Would you like to install them now? · No / Yes
√ Which package manager do you want to use? · npm
Installing @typescript-eslint/eslint-plugin@latest, @typescript-eslint/parser@latest
```

## prettier

```sh
npm install -D prettier eslint-config-prettier
```

Create `.prettierrc.json`

```json

```
