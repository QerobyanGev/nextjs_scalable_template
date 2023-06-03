# Project template configuration for NEXT.js

_Hi! This is my first try of setting up and configuring a fully scalable project for NEXT.js._

This project is set up for using styled-components, as I very often use it myself, but allows easy integration of css frameworks like Tailwind CSS, or UI libraries like MUI. I plan to create this same template for React as well, but will see how it goes, a little short on time for now. Also, when enough free time occurs, I will try to build more complicated projects on this setup in the near future using other css frameworks and libraries, as well as other tools.

If sticking with styled-components and typescript, don't forget to also install the types, so run =>

```sh
yarn add -D @types/styled-components
```

#

## Tools and packages used

- [`Next.js`](https://nextjs.org/)
- [`Typescript`](https://www.typescriptlang.org/)
- [`Styled-Components`](https://styled-components.com/)
- [`Storybook`](https://storybook.js.org/)
- [`Husky`](https://typicode.github.io/husky/#/)

### _The project also includes setup and configurations for:_

- `VS Code`
- `Debugging`
- `Linters`
- `Formatters` (_[Prettier](https://prettier.io/)_)
- `Git hooks` (_[Husky](https://typicode.github.io/husky/#/)_)

#

# Few points to mention

## _Storybook_

After installing storybook , specifying to use webpack 5 in package.json's resolutions key, noticed the following error =>

```sh
Cannot find type definition file for babel__core'. The file is in the program because: Entry point for implicit type library 'babel__core ...
```

I found the solution in [github.com](https://github.com/microsoft/TypeScript-Babel-Starter/issues/51) suggested by [leeweisberger](https://github.com/leeweisberger). The solution was to install the types that were mentioned missing.

So just ran this command in terminal

```
yarn add -D @types/babel__core
```

If the problem persist, try restarting the vscode, that solved it for me.

I also changed the paths in `/storybook/main.ts` to allow locating stories for each component in it's own folder instead of piling all up in single stories folder. Also add staticDirs, to inform storybook about our location of static assets in the project.

Changed the extension of /storybook/preview.ts to js, because of type issues occurring during defining NextImage properties, which I was not able to resolve in TypeScript / I'm new to typescript and it was late night :) /.

I have left the stories directory in tact, because being new to storybook, I still like to have stories examples on hand for reference.

##

#

# _Template_

I have created a base template folder, which can be copied as a base for any component created during the process.

The folders and included files' internal structure follows my personal preference, but my guess is it's fairly easily adoptable to any other structure of choice.

The folder includes

### Component file itself =>

> `BaseTemplate.tsx`

#

### File with the styling with styled-components (including basic props template), includes simple Wrapper with the props type =>

> `styled.ts`

#

### Fake data file for easy quick testing the component, it basically exports props based on the interface of the main component. The data is mainly used by the stories.tsx of that component.

> `BaseTemplate.mocks.ts`

#

### The story of the component for storybook - basically a slightly modified sample provided by storybook itself.

> `BaseTemplate.stories.tsx`

#

BTW if you get error on mockData import

`import { mockBaseTemplateProps } from './BaseTemplate.mocks'`

or I would guess on any other import for that matter, saying something similar to =>

```
File name '.../*.mocks.ts' differs from already included file name '.../*.Mocks.ts' only in casing
```

no need to run changing the tsconfig.json file, as many answers in `stackoverflow` suggested. Just reload the vscode first, it solved it for me at least.

##

---

## Configs

### _Husky_

> Created `pre-commit` and `pre-push` hooks, which call `yarn lint` and `yarn build` respectively.

#

### _Commitlint_

> Configured 14 acceptable commit message prefixes according to the convention.

### _Package manager restriction_

> Created `.npmrc` file with `engine-stict = true` config and added changes to the `package.json` to lock package manager to yarn.
