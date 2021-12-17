# Codecraft

This project was generated using [Nx](https://nx.dev) following Bram Borggreve's (beeman 🐝) NXPM stack

- [NX API Guide](https://dev.to/beeman/introduction-to-building-api-s-with-nestjs-and-nrwl-nx-1l2b)
- [Video Guide](https://www.youtube.com/watch?v=J32s6Dm41bE)

- [NXPM](https://nxpm.dev/)

See [installation notes](#installation-notes) This project is built using [Git-Flow](https://github.com/nvie/gitflow)

[Presented using Heroku](https://codecraft-nx.herokuapp.com/) on [Heroku Repo](https://git.heroku.com/codecraft-nx.git)

- [Get an account](https://signup.heroku.com/)
- [Install CLI](https://devcenter.heroku.com/articles/heroku-cli)

## Heroku Setup

### Heroku Installation:

```zsh
$ heroku -v
```

Login to Heroku

```zsh
$ heroku login
```

Create app

```zsh
$ heroku create codecraft-nx
```

Push to Git

```zsh
$ git push
```

Push to Heroku

```zsh
$ git push heroku main
```

### Verify Installation

1. CURL  
   Installation can be verified by hitting the endpoint directly:

```zsh
curl -XPOST \
     -H "Content-Type: application/json" \
     --data ' { "query": "query { uptime }"  }' \
     https://codecraft-nx.herokuapp.com/graphql
```

Should return something like...

```zsh
{"data":{"uptime":439.593632003}}
```

2. PLAYGROUND  
   Playground has been enabled in production mode from api-core.module.
   (There may be an initial error on the right. Add query below to test )

   - Open [playground](https://codecraft-nx.herokuapp.com/graphql) on Heroku
   - Add query in left panel
   - Click play button (center)

```zsh
query {
  uptime
}

```

# Saving Playground Using Chrome Ext
(This is tempermental but can be made to work)
- [Add LocalStorage Manager Extension to Chrome](https://chrome.google.com/webstore/detail/localstorage-manager/fkhoimdhngkiicbjobkinobjkoefhkap/related)
- Export the Local Storage object from the playground ("graphql-playground" ...) to a file
- Copy the file over to the destination
- Copy the file contents to clipboard
- Use the Import option in the Chrome extension
- Refresh the playground to see your restored tabs

- [View this playground](tools/CodecraftPlayground.txt)

<p style="text-align: center;">
<img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="300">
&nbsp;
<img src="https://avatars.githubusercontent.com/u/65322676?s=200&v=4">
</p>

<br />

🔎 **Smart, Extensible Build Framework**

## Adding capabilities to your workspace

Nx supports many plugins which add capabilities for developing different types of applications and different tools.

These capabilities include generating applications, libraries, etc as well as the devtools to test, and build projects as well.

Below are our core plugins:

- [React](https://reactjs.org)
  - `npm install --save-dev @nrwl/react`
- Web (no framework frontends)
  - `npm install --save-dev @nrwl/web`
- [Angular](https://angular.io)
  - `npm install --save-dev @nrwl/angular`
- [Nest](https://nestjs.com)
  - `npm install --save-dev @nrwl/nest`
- [Express](https://expressjs.com)
  - `npm install --save-dev @nrwl/express`
- [Node](https://nodejs.org)
  - `npm install --save-dev @nrwl/node`

There are also many [community plugins](https://nx.dev/community) you could add.

## Generate an application

Run `nx g @nrwl/react:app my-app` to generate an application.

> You can use any of the plugins above to generate applications as well.

When using Nx, you can create multiple applications and libraries in the same workspace.

## Generate a library

Run `nx g @nrwl/react:lib my-lib` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are shareable across libraries and applications. They can be imported from `@codecraft/mylib`.

## Development server

Run `nx serve my-app` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `nx g @nrwl/react:component my-component --project=my-app` to generate a new component.

## Build

Run `nx build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `nx test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `ng e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `nx dep-graph` to see a diagram of the dependencies of your projects.

## Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.

## ☁ Nx Cloud

### Distributed Computation Caching & Distributed Task Execution

<p style="text-align: center;"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-cloud-card.png"></p>

Nx Cloud pairs with Nx in order to enable you to build and test code more rapidly, by up to 10 times. Even teams that are new to Nx can connect to Nx Cloud and start saving time instantly.

Teams using Nx gain the advantage of building full-stack applications with their preferred framework alongside Nx’s advanced code generation and project dependency graph, plus a unified experience for both frontend and backend developers.

Visit [Nx Cloud](https://nx.app/) to learn more.

# Installation Notes

## GraphQL compat issue

| Specifically, GraphQL@16 changed the gqaphql function, as called from within graphqlImpl, to only support args without a schema

### Resolve:

We have to downgrade graphql to below v16:

```zsh
yarn upgrade graphql@^15.8.0
```
