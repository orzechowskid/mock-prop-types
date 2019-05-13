# mock-prop-types

prop-types mock module, for use with unit-test assertion libraries

# Why?

The external interface to a React component is defined by its set of `propTypes` and `defaultProps`.  This interface should be validated so that any changes to it are caught, and semver updated accordingly.

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

(to be clear, it is already possible to do this today if your `propTypes` objects are simple enough.  What doesn't work is more complex prop-types like `oneOf`, `shape`, etc.)

# Usage



# License

MIT
