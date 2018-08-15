# Javascript Monorepo

All of Omaze's javascript apps, and components (react)

We're using `lerna` & `yarn workspaces` to assist managing this monorepo.

(_note: only use `yarn`, do *not* use `npm`. they don't play well together._)

## Development

You'll need the following installed:

- node / npm -- `brew install node` (assuming MacOS & brew installed already)
- yarn -- `npm install -g yarn`

that's it.

### Directory Layout
`root / packages`

this is where all reusable components / packages / services will live

`root / apps`

this is where all standalone apps will live

## Apps
### Creating a new `app`

// TODO

#### Serve (development)

`yarn start`

#### Testing

`yarn test`

##### Unit

`yarn test:unit`

`yarn test:unit:watch`

##### Integration

`yarn test:e2e`

`yarn test:e2e:watch`

#### Logging

// TODO:

#### Build (production)

`yarn build`

#### Docker

// TODO:

## Packages
### Creating a new `package` (`component`)
#### Serve (development)
  
  storybook (local)
  
#### Testing

`yarn test`

#### Storybook / Styleguide

// TODO

#### Logging

// TODO

#### Docker

// TODO
