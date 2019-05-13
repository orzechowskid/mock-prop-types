# mock-prop-types

prop-types mock module, for use with unit-test assertion libraries

# Why?

The external interface to a React component is defined by its set of `propTypes` and `defaultProps`.  Tests should be written to validate this interface, so that any changes to it are caught and semver updated accordingly.

Existing attempts to solve this problem usually use the `prop-types` library itself to perform prop-types validation, and/or mock out `console.error` to catch error messages.  It seemed strange to require specific types of mock data, and to assert against hardcoded strings, when attempting to validate the shape of a component's API.

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

To be clear, it is already possible to do this today if your `propTypes` objects are simple enough.  What doesn't work out-of-the-box is more complex prop-types like `oneOf`, `shape`, etc.  This library provides support for those complex prop-types, as well as renaming some stuff internally so that functions have slightly more useful names like "string (required)" instead of "bound checkType".

# Usage

## Jest

add a new `prop-types.js` file inside a \_\_mocks\_\_ directory which is a sibling of your node_modules directory containing `prop-types`.

\_\_mocks\_\_/prop-types.js:

```javascript
    module.exports = require('mock-prop-types');
```

# License

MIT
