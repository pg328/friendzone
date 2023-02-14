# FriendZone Turborepo

Yarn Workspaces and Turborepo used to package together:
1. `projects/blog`: A Next.js blog powered by TRPC and Sanity CMS, runs on port *3000*
2. `projects/web`: A Solito Web App, running on port *3001*.
3. `projects/mobile`: A Solito React-Native Typescript App, runs on port *19000* for Expo Go.
4. `projects/studio`: A Vite Sanity Studio to edit content that is currently in `projects/blog` and may come to `projects/web` and `projects/mobile` for management of copy. Runs port *3002*

As if that weren't enough, I've also built a few packages that are shareable via Yarn Workspaces between the projects.
Those packages are currently:
1. `packages/api`: All api for all apps (other than studio which handles its api under the hood). TRPC and Sanity stored here other than the `sanity` npm package that can break expo. After about 10 hours I've given up on fixing this, the sanity package breaking a react-native expo app due to a download in an adjacent monorepo child is too niche to get any help from StackOverflow or the Sanity docs so I'm just gonna close my eyes lol.
2. `packages/db`: Prisma config for a Railway.app (for now) database. Runs a model editor on port *3003*.
3. `packages/solito-common`: Shared code for the app and web app itself. This will need to be altered later, to use 4.
4. `packages/twrc`: Shared Tailwind Config.
5. `packages/ui`: Template code, will be but might be useful for research.
6. `packages/tsconfig`: We love TypeScript, why write new tsconfigs for each project?
7.  `packages/eslint-config-custom` | `custom`: Shared eslint config, eslint can only find packages _like_ `eslint-config-*`. 


TODO: Connect `packages/solito-common` to `packages/twrc` && connect `projects/web` and `projects/mobile` to `packages/api`, `packages/eslint-config-custom`, and `packages/tsconfig` && dockerise(?) just for fun lolz.
