# Contributing

Thanks for your interest in contributing to ui.shadcn.com. We're happy to have you here.

Please take a moment to review this document before submitting your first pull request. We also strongly recommend that you check for open issues and pull requests to see if someone else is working on something similar.

If you need any help, feel free to reach out to [@shadcn](https://twitter.com/shadcn).

## About this repository

This repository is a monorepo.

- We use [pnpm](https://pnpm.io) and [`workspaces`](https://pnpm.io/workspaces) for development.
- We use [Turborepo](https://turbo.build/repo) as our build system.
- We use [changesets](https://github.com/changesets/changesets) for managing releases.

## Structure

This repository is structured as follows:

```
apps
└── www
    ├── app
    ├── components
    ├── content
    └── registry
        ├── default
        │   ├── example
        │   └── ui
        └── new-york
            ├── example
            └── ui
packages
└── cli
```

| Path                  | Description                              |
| --------------------- | ---------------------------------------- |
| `apps/www/app`        | The Next.js application for the website. |
| `apps/www/components` | The React components for the website.    |
| `apps/www/content`    | The content for the website.             |
| `apps/www/registry`   | The registry for the components.         |
| `packages/cli`        | The `shadcn-ui` package.                 |

### Additionaly explanation (by Hunter)

- `apps/www/__registry__/`: automatically generated by `build-registry.mts` script in `apps/www/scripts/` when running `pnpm build:registry`.
- `apps/www/.contentlayer/`: automatically generated when running `pnpm dev` or `pnpm build`.
- `apps/www/.next/`: next.js site configurations
- `apps/www/actions/`: 
- `apps/www/edit-in-v0.ts`: actions for editting the component in v0.
- `apps/www/app/`: the conventional next.js app router project structure.
- `apps/www/components/mdx-components.tsx`: registered a list of components that can be used directly in the mdx file to render on the webpage.
- `apps/www/config/`: the configuration files of the website.
- `apps/www/config/docs.ts`: the configurations of the docs, including route paths.
- `apps/www/config/site.ts`: the configurations of the site, mainly for SEO.
- `apps/www/content/docs/`: the mdx files for the documentation.
- `apps/www/hooks/`: the hooks used in the website.
- `apps/www/lib/`: the variables used in the website and project.
- `apps/www/pages/api/`: the api endpoints for fetching components from the server-side (all native UI components are stored in the server-side).
- `apps/www/public/`: the static assets used in the project and components.
- `apps/www/public/schema.json`: the schema of the site, do not forget to add style in the enum list when new styles are added.
- `package/cli/`: the cli package files.
- `scripts/`: additional scripts for constructing the project.
- `templates/next-template`: the template of this website, launched at `localhost:3000` when running `pnpm dev`.

## Development

### Fork this repo

You can fork this repo by clicking the fork button in the top right corner of this page.

### Clone on your local machine

```bash
git clone https://github.com/your-username/ui.git
```

### Navigate to project directory

```bash
cd ui
```

### Create a new Branch

```bash
git checkout -b my-new-branch
```

### Install dependencies

```bash
pnpm install
```

### Run a workspace

You can use the `pnpm --filter=[WORKSPACE]` command to start the development process for a workspace.

#### Examples

1. To run the `ui.shadcn.com` website:

```bash
pnpm --filter=www dev
```

2. To run the `shadcn-ui` package:

```bash
pnpm --filter=shadcn-ui dev
```

## Documentation

The documentation for this project is located in the `www` workspace. You can run the documentation locally by running the following command:

```bash
pnpm --filter=www dev
```

Documentation is written using [MDX](https://mdxjs.com). You can find the documentation files in the `apps/www/content/docs` directory.

## Components

We use a registry system for developing components. You can find the source code for the components under `apps/www/registry`. The components are organized by styles.

```bash
apps
└── www
    └── registry
        ├── default
        │   ├── example
        │   └── ui
        └── new-york
            ├── example
            └── ui
```

When adding or modifying components, please ensure that:

1. You make the changes for every style.
2. You update the documentation.
3. You run `pnpm build:registry` to update the registry.

## Commit Convention

Before you create a Pull Request, please check whether your commits comply with
the commit conventions used in this repository.

When you create a commit we kindly ask you to follow the convention
`category(scope or module): message` in your commit message while using one of
the following categories:

- `feat / feature`: all changes that introduce completely new code or new
  features
- `fix`: changes that fix a bug (ideally you will additionally reference an
  issue if present)
- `refactor`: any code related change that is not a fix nor a feature
- `docs`: changing existing or creating new documentation (i.e. README, docs for
  usage of a lib or cli usage)
- `build`: all changes regarding the build of the software, changes to
  dependencies or the addition of new dependencies
- `test`: all changes regarding tests (adding new tests or changing existing
  ones)
- `ci`: all changes regarding the configuration of continuous integration (i.e.
  github actions, ci system)
- `chore`: all changes to the repository that do not fit into any of the above
  categories

  e.g. `feat(components): add new prop to the avatar component`

If you are interested in the detailed specification you can visit
https://www.conventionalcommits.org/ or check out the
[Angular Commit Message Guidelines](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines).

## Requests for new components

If you have a request for a new component, please open a discussion on GitHub. We'll be happy to help you out.

## CLI

The `shadcn-ui` package is a CLI for adding components to your project. You can find the documentation for the CLI [here](https://ui.shadcn.com/docs/cli).

Any changes to the CLI should be made in the `packages/cli` directory. If you can, it would be great if you could add tests for your changes.

## Testing

Tests are written using [Vitest](https://vitest.dev). You can run all the tests from the root of the repository.

```bash
pnpm test
```

Please ensure that the tests are passing when submitting a pull request. If you're adding new features, please include tests.

## Hunter's way for contributing to this project.

### Add features to exsiting component

1. find the native UI components in `apps/www/registry/{style}/ui` folder, add basic functionalities there. Please ensure the components and packages imported use `@/registry/` path.
2. add usage and examples in `apps/www/registry/{style}/example` folder, add functionalities for demo purpose there.
3. if changes made in `/ui` folder, run `pnpm build:registry` to update the component registry to reflect the changes.

### Create a new component

1. add the component in `apps/www/registry/{style}/ui` folder, and examples in `apps/www/registry/{style}/example`, for **all styles**.
2. update the route path in `apps/www/config/docs.ts` file, to add a route path to that component in the documentation site.
3. run `pnpm build:registry` to update the component registry

### Workflow for Adding a New Component

1. add the component in `apps/www/registry/{style}/ui` folder, and examples in `apps/www/registry/{style}/example`, for **all styles**.

2. Add entries to `apps/www/registry/example.ts`:

```ts
{
  name: "your-component-demo",
  type: "components:example",
  registryDependencies: ["your-component", "other-related-componenent"],
  files: ["example/your-component-demo.tsx"],
},
```

3. Add a page in `apps/www/content/docs` and update `apps/www/config/docs.ts`:

```ts
{
  title: "Your Component",
  href: "/docs/components/your-component",
  items: [],
},
```

4. Run `pnpm build:registry` to update the registry and ensure all new components and examples are registered correctly.

5. Run `pnpm --filter=www dev` to make adjustments to the code or documentation based on your testing.

#### Workflow for Adding a New Variant for a Component
1. add the variant example in `apps/www/registry/{style}/example`, for **all styles**.
2. Add an entry for your component variant in `apps/www/registry/example.ts`: 
```ts
{
  name: "your-component-variant", 
  type: "components:example",
  registryDependencies: ["your-component", "other-related-componenent"],
  files: ["example/your-component-VariantName.tsx"], 
},
```
3. Update the related doc in `apps/www/content/docs/component`. Add content in `.mdx` file like this (structure may vary depending on the page):
```
### Variant Name

Explanation

<ComponentPreview
  name="your-component-variant"
  description="  "
/>
```
4. Run `pnpm build:registry`

### Add documentation content

add documentation files in `apps/www/content/docs/`, in mdx format. (please refer to the folder structure explanation above, and the DOCUMENTATION.md file for doc template)

### Add a new style

copy the original styls folder (any of them, copy the entire folder), and update the component registry, then update `apps/www/public/schema.json` file.

#### Workflow for Adding a New Style

1. Navigate to the `apps/www/registry` directory. Select an existing style folder (e.g., `default` or `new-york`). Copy the entire folder and rename it to your new style name.

The folder structure should look like this after adding a new style:

```bash
apps
└── www
    └── registry
        ├── default
        │   ├── block
        │   ├── example
        │   └── ui
        ├── ...
        └── your-new-style
            ├── block
            ├── example
            └── ui
```

2. Update the `apps/www/registry/styles.ts` file. Add a new entry for your style in the following format (Ensure the `name` matches the folder name created in Step 1.):

```ts
{
  name: "your-new-style",
  label: "Your New Style",
},
```

3. Run `pnpm build:registry` to update the registry. This will compile the registry and ensure the changes are reflected.

4. Run `pnpm --filter=www dev` to verify the changes. Update relevant files (usually in the ui folder) for the new style.

### Add a new theme

just add color and theme variants in `color.ts` and `themes.ts` in `apps/www/registry/` directory, and run `pnpm build:registry` to add a new colorset or theme accordingly.

#### Modify the theme in component-preview

way 1. in `apps/www/components/component-preview.tsx`: find `<ThemeWrapper defaultTheme="rose">`
way 2. in `apps/www/hooks/use-config.ts`: find `theme: "zinc"`

usually we only need to modify the displayed theme, i.e, in `component-preview.tsx` file, the `defaultTheme` and `config.theme` are tied by `theme-wrapper.tsx` component in `apps/www/components/`.


### A general workflow

1. Create a new branch with `comp/[name]_[component-name]` (e.g., comp/Hunter_checkbox, or comp/Hunter_file-upload), or `page/[name]_[page-title]`, and work there
   1. e.g. `git checkout -b comp/Hunter_checkbox` to create a new branch
   2. Everytime when you complete a component, follow the following worlflow to submit a commit and pull request:
   - Fetch the remote main branch to see if there's any update [important]: 
     - switch to main branch: `git checkout main`
     - fetch the lastest update from remote main branch: `git fetch origin main`
     - merge the lastest update to local main branch (if any): `git merge origin/main`
     - go back to your own branch: `git checkout yourbranch`
     - merge the lastest update to your own branch: `git rebase main`
     - or simply `git fetch origin`, then `git rebase origin/main` to merge the updates from main branch to your **current** branch, but you gotta constantly pull the updates from remote main branch to your local main branch to keep your local main branch up-to-date, that's a best practice. 
     - usually, we don't switch back to main branch and merge the content from your own branch, instead we stay at our own branch and merge any updates from local main - remote main branch, that's because your commit will always be seen as a new commit (a step forward) to main branch.
   - add `.` (all) files you changed to stage area, or specific files: `git add .`, or `git add [file1] [file2] ...`
   - add a commit message as per the format **mentioned above**: `git commit -m "message"`
   - push the changes to remote repo: `git push origin comp/Hunter_checkbox`
   - go to github and initate a pull request, select me (Hunter) as the reviewer
   - [important] sometimes when you run `git merge` or `git rebase`, git will switch to a new window ask you to attach a commit message, that's usually in a vim editor, you can move your cursor with arrow keys and press `i` to enter editing mode, type your message, and then press `esc` to exit editing mode, then `:wq` to save the content and quit the editor.
2. Add the missing features / examples (variants) in the existing components based on WBB project
3. Add new components and corresponding examples to this project based on WBB project
4. Write test cases for the new added components
5. Update/add the documentation file in mdx, comply with doc template, design guidelines, and usability/accessibility requirments
   1. Go through the docs and api references provided by radix-ui (shortcut from each shadcn component page)
   2. Check if any properties or api are problematic and fix them
   3. Update your documentation or component
6. Update styles/themes/colors according, all must be done in dynamic way
7. Add the new comopnents to storybook
   1. Be sure to check against the docs and api references, as well as the design guidelines and usability/accessibility requirments
8. Another team member will check everything done in the above steps and approve/reject

if you tried any of the steps mentioned in this doc that don't work, please try to use search functions to search the whole code to see any other files should be modified to make it happen (usually not but it is better to know), and do not touch anything that is automatically generated (e.g. `apps/www/__registr__/`, `apps/www/public/registry/`)

### How to install Storybook and add storyies for new components912 in Storybook
1. Run `npm install storybook` on your terminal, choose next.js, please refer to the [storybook official site](https://storybook.js.org/docs/get-started/frameworks/nextjs?renderer=react)
2. Configure Storybook (we've already done this step so you can just skip it). you can customize Storybook settings by editing `.storybook/main.ts` or `.storybook/preview.ts`:
    - `main.ts`: Add file extensions, story paths, or configure addons.
      ```ts
      import { dirname, join } from "path";
      import type { StorybookConfig } from "@storybook/nextjs";

      /**
      * This function is used to resolve the absolute path of a package.
      * It is needed in projects that use Yarn PnP or are set up within a monorepo.
      */
      function getAbsolutePath(value: string): any {
        return dirname(require.resolve(join(value, "package.json")));
      }

      const config: StorybookConfig = {
        stories: [
          "../stories/**/*.mdx",
          "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
          "../apps/www/registry/default/example/**/*.stories.@(js|jsx|mjs|ts|tsx)"
        ],

        addons: [
          getAbsolutePath("@storybook/addon-onboarding"),
          getAbsolutePath("@storybook/addon-links"),
          getAbsolutePath("@storybook/addon-essentials"),
          getAbsolutePath("@chromatic-com/storybook"),
          getAbsolutePath("@storybook/addon-interactions"),
          getAbsolutePath("@storybook/addon-mdx-gfm"),
          "@chromatic-com/storybook"
        ],
        framework: {
          name: getAbsolutePath("@storybook/nextjs"),
          options: {},
        },
        docs: {},
        typescript: {
          reactDocgen: "react-docgen-typescript"
        },
        webpackFinal: async (config) => {
          config.resolve.alias = {
            ...config.resolve.alias,
            '@': join(__dirname, '../apps/www'), 
          };
          return config;
        }
      };

      export default config;
      ```
    - `preview.ts`: Set global decorators, parameters, or theming.
      ```ts
      import '../apps/www/styles/globals.css';  
      import type { Preview } from "@storybook/react"
      const preview: Preview = {
        parameters: {
          controls: {
            matchers: {
              color: /(background|color)$/i,
              date: /Date$/i,
            },
          },
        },
        tags: ["autodocs"]
      }
      export default preview
      ```
    - `tailwind.config.cjs`:
      ```js
      //...
      module.exports = {
      darkMode: ["class"],
      content: ["app/**/*.{ts,tsx}","components/**/*.{ts,tsx}","stories/**/*.{ts,tsx}","apps/www/registry/default/example/**/*.{ts,tsx}"],
      //...
      }
      ```
3. Add your component file to the directory `stories`(e.g. `stories/new-component.tsx`) Ensure your component is functional and styled according to our design system (using Tailwind CSS as configured in tailwind.config.cjs).
4. Create a new .stories.tsx file in the same directory where your component resides.(e.g.`stories/new-component.stories.tsx`)
5. Start Storybook locally to preview your new story: `npm run storybook`.
6. Test and Adjust
    - Open your browser at http://localhost:6006 to view the new story.
    - Use Storybook’s controls to test props and appearance.
    - Adjust the component or story as needed.

### How to add new component documentation
1. create a new `new-component.mdx` in `apps\www\content\doc\components`, add your documentation detail according to [documentation](./DOCUMENTATION.md).
2. add new lines in `apps\www\config\docs.ts`
  ```ts
    {
      title: "Components",
      items: [
          {
          title: "New-component",
          href: "/docs/components/new-component",
          items: [],
        },
      ]
    }
  ```
  3. after your edit of documentation, run `pnpm build:registry`.