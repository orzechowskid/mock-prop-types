# mock-prop-types

prop-types mock module, for use with unit-test assertion libraries

# Why?

The external interface to a React component is defined by its sets of `propTypes` and `defaultProps`.  Tests should be written to validate this interface, so that any changes to it are caught and semver updated accordingly.

Existing attempts to solve this problem usually use the `prop-types` library itself to perform prop-types validation, and/or mock out `console.error` to catch error messages.  It seemed strange to render components with mock data, and to assert against hardcoded strings, when attempting to validate the shape of a component's API.

This library allows unit-tests to assert directly against the shape of your component's `propTypes` property:

```javascript
describe('my component', () => {
  it('exposes the expected propTypes', function() {
    expect(MyComponent.propTypes).toEqual({
      className: PropTypes.string,
      data: PropTypes.arrayOf(PropTypes.number),
      type: PropTypes.oneOf([ 'debug', 'info', 'warn', 'error' ]).isRequired
    });
  });
});
```

To be clear, it is already possible to do this today if your prop-types are simple enough.  What doesn't work out-of-the-box is more complex prop-types like `oneOf`, `shape`, etc.  This library provides support for those complex prop-types, as well as renaming some stuff internally so that error messages contain slightly more useful text like `string.isRequired` instead of `[ Function bound checkType ]`.

# Requirements

node >= 6.x

# Installation

```sh
$ npm install --save-dev mock-prop-types
```

or

```sh
$ yarn install --dev mock-prop-types
```

# Usage

## Jest

Create a directory named \_\_mocks\_\_ in the same directory as your node_modules directory.  Create a new [manual mock](https://jestjs.io/docs/en/manual-mocks#mocking-node-modules) for the prop-types package inside that new directory by adding a file named `prop-types.js`.  In that file, import and re-export from mock-prop-types:

\_\_mocks\_\_/prop-types.js:

```javascript
    module.exports = require('mock-prop-types');
```

(TODO: example for `moduleNameMapper`)

You should now be able to write a unit test which verifies that your component exports the expected set of `propTypes`:

```javascript
import {
  MyComponent
} from '../MyComponent';

describe('my component', () => {
  it('exposes the expected propTypes', function() {
    expect(MyComponent.propTypes).toEqual({
      className: PropTypes.string,
      data: PropTypes.arrayOf(PropTypes.number),
      type: PropTypes.oneOf([ 'debug', 'info', 'warn', 'error' ]).isRequired
    });
  });
});

```

You should still be able to run your existing unit tests which call prop-type validators directly, if you really want to:

```javascript
it(`does complain when given the wrong props`, function() {
  shallow(
    <MyComponent
      className="foo"
      data={[ true, true, false, true ]} // arrayOf(PropTypes.bool), not arrayOf(PropTypes.number) as specified
      type="debug"
    />
  );

  expect(console.error).toBeCalled(); // "Warning: Failed prop type: Invalid prop" etc etc etc
});

```

# License

MIT
