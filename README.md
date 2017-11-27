# Lion

[![Greenkeeper badge](https://badges.greenkeeper.io/alphasights/lion.svg)](https://greenkeeper.io/)

Lion is a dashboard for developers written with Ember and Rails.
It rewards developers when they get shit done®.

This is the web client. [Here](https://github.com/alphasights/lion-api) you can find the API.

## Installation

#### Prerequisites

You will need the following things properly installed on your computer.

```bash

# Install node and yarn with Homebrew
$ brew install node yarn

# Bower and ember-cli
$ yarn global add bower ember-cli
```

### Setup

* `git clone` this repository
* `yarn install`
* `cp .example-env .env`

## Running

Before running the server make sure you have [lion-api](https://github.com/alphasights/lion-api) running in a separate terminal on `localhost:3000`. You can run the lion-api server with `rails server`.

* `yarn start`
* Visit your app at http://localhost:4200.

## Running Tests

* `yarn test`
* `yarn test -- --server`

## Building

* `yarn build`

## Leaderboard

![leaderboard](public/assets/images/readme/leaderboard.png)

## Hall of Fame

![hall-of-fame](public/assets/images/readme/hof.png)

## Stats

![stats](public/assets/images/readme/stats.png)
