# Knights Travails

Computes the shortest path a knight can take between two squares on a chess
board.

## External libraries

* [Commander](https://github.com/tj/commander.js/): A node.js command-line
  interface

## Architecture

The app is composed of:

* A console application using commander as the command-line interface.

### Unit testing

Unit testing is done with:

* [Jest](https://facebook.github.io/jest/): JavaScript Testing Framework

To run the unit tests:

```
npm run test
```

To run the unit tests in watch mode:

```
npm run test:w
```

## Installation

```
$ git clone https://github.com/leighshepperson/knights-travails
$ cd knights-travails
```

Install the project dependencies using npm:

```
npm i
```

## Running the project

Run the app (node index.js) from the root directory using the shortestPath (sp)
option:

```
shortestPath|sp <startSquare> <endSquare>  Returns the shortest path a knight can take between <startSquare> and <endSquare>.
```

## Example

```
node index shortestPath A8 B7

C7 B5 D6 B7

npm run shortestPath -- A8 B7

C7 B5 D6 B7

```
