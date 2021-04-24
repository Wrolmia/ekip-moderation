# Manageable [![Build Status](https://travis-ci.org/francisbrito/node-manageable.svg?branch=master)](https://travis-ci.org/francisbrito/node-manageable) [![npm version](https://badge.fury.io/js/manageable.svg)](https://badge.fury.io/js/manageable)
> A minimal implementation of a manageable object.

## What?
A manageable object is any object that can initialize and destroy itself along with its dependencies.
It does so by responding to `initialize` and `destroy` messages.

## Why?
I often find myself writing code like this:
```js
const myService = {
  initialized: false,
  initialize(options) {
    if (initialized) // throw already initialized.

    return Promise.all(
      this.dependencies.map(d => d.initialize(options))
    );
  },
  destroy(options) {
    if (!initialized) // throw not initialized.

    return Promise.all(
      this.dependencies.map(d => d.destroy(options))
    );
  }
};
```
So I decided to abstract it into a factory use it like this:
```js
const createManageable = require('./');

const myServiceDependencies
const myService = Object.assign(
  {},
  createManageable({ dependencies: myServiceDependencies })
);

// Alternatively
const destroyMyService = function* () {};
const initializeMyService = function* () {};

const myService = Object.assign(
  {},
  createManageable({ initialize: initializeMyService, destroy: destroyMyService })
);
```
If it sounds like over-kill to you, this real world example might show how its useful:
```js
const mongodb = require('mongodb');

function createMongoDbClient(options) {
  const { connectionUri } = options;

  let db;

  const client = Object.assign({
    // Just a test method.
    getDbStats() {
      return db.stats();
    }
  }, createManageable({ initialize: initializeClient, destroy: destroyClient }));

  function initializeClient() {
    return mongodb.MongoClient.connect(connectionUri);
  }

  function destroyClient() {
    return db.close();
  }
}

const myMongoDbClient = createMongoDbClient({
  connectionUri: 'mongodb://localhost/test',
});

// Usage with promises
myMongoDbClient
.initialize()
.then(myMongoDbClient.getDbStats())
.then(dbStats => console.log(dbStats))
.then(myMongoDbClient.destroy());

// Usage with generators
// assuming `const coroutine = require('co')`;
coroutine(function* () {
  yield myMongoDbClient.intialize();

  const dbStats = yield myMongoDbClient.getDbStats();

  console.log(dbStats);

  yield myMongoDbClient.destroy();
});
```
