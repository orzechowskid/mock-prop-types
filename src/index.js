const serialize = require('serialize-javascript');

/**
 * @param {List<String>} args
 * @return {String}
 */
function _serialize(args) {
    return serialize(args.map(function(arg) {
        return typeof arg === `function`
            ? arg.name
            : arg;
    }));
}

/**
 * create a PropType proxy around the given type
 * @param {Map<String, Object>} PropTypes
 * @param {String} type
 * @return {Proxy}
 */
function _getPropProxy(PropTypes, type) {
    const name = `PropTypes.${type}`;
    const requiredName = `${name}.isRequired`;
    const baseProp = PropTypes[type];

    if (!baseProp) {
        return;
    }

    const requiredProp = baseProp.isRequired;
    const requiredProxy = new Proxy(requiredProp, {
        get(target, prop) {
            switch (prop) {
                case `name`: // used by enzyme
                    return requiredName;
                default:
                    return target[prop];
            }
        }
    });
    const p = new Proxy(baseProp, {
        get(target, prop) {
            switch (prop) {
                case `isRequired`:
                    return requiredProxy;
                case `name`:
                    return name;
                default:
                    return target[prop];
            }
        }
    });

    p.toString = function() { return name; };
    requiredProxy.toString = function() { return requiredName; };

    return p;
}

/**
 * create a PropType factory proxy around the given type
 * @param {Map<String, Object>} PropTypes
 * @param {String} type
 * @return {Function}
 */
function _getFnPropProxy(PropTypes, type) {
    const name = `PropTypes.${type}`;
    const baseFnProp = PropTypes[type];

    if (!baseFnProp) {
        return;
    }

    const p = new Proxy(baseFnProp, {
        apply(target, thisArg, args) {
            const key = _serialize(args).slice(1, -1);
            const checkerName = `${name}(${key})`;
            const requiredName = `${checkerName}.isRequired`;

            if (p[key]) {
                return p[key];
            }

            const baseChecker = target.apply(thisArg, args);
            const requiredChecker = baseChecker.isRequired;
            const requiredProxy = new Proxy(requiredChecker, {
                get(target, prop) {
                    switch (prop) {
                        case `name`: // used by enzyme
                            return requiredName;
                        default:
                            return target[prop];
                    }
                }
            });

            requiredProxy.toString = function() { return requiredName; };
            p[key] = new Proxy(baseChecker, {
                get(target, prop) {
                    switch (prop) {
                        case `isRequired`:
                            return requiredProxy;
                        case `name`: // used by enzyme
                            return `${name}(${key})`;
                        default:
                            return target[prop];
                    }
                }
            });
            p[key].toString = function() { return checkerName; };

            return p[key];
        }
    });

    return p;
}

module.exports = function(realPropTypes) {
    return {
        any: _getPropProxy(realPropTypes, `any`),
        array: _getPropProxy(realPropTypes, `array`),
        arrayOf: _getFnPropProxy(realPropTypes, `arrayOf`),
        bool: _getPropProxy(realPropTypes, `bool`),
        element: _getPropProxy(realPropTypes, `element`),
        elementType: _getPropProxy(realPropTypes, `elementType`),
        exact: _getFnPropProxy(realPropTypes, `exact`),
        func: _getPropProxy(realPropTypes, `func`),
        instanceOf: _getFnPropProxy(realPropTypes, `instanceOf`),
        node: _getPropProxy(realPropTypes, `node`),
        number: _getPropProxy(realPropTypes, `number`),
        object: _getPropProxy(realPropTypes, `object`),
        objectOf: _getFnPropProxy(realPropTypes, `objectOf`),
        oneOf: _getFnPropProxy(realPropTypes, `oneOf`),
        oneOfType: _getFnPropProxy(realPropTypes, `oneOfType`),
        shape: _getFnPropProxy(realPropTypes, `shape`),
        string: _getPropProxy(realPropTypes, `string`),
        symbol: _getPropProxy(realPropTypes, `symbol`),

        checkPropTypes: realPropTypes.checkPropTypes
    };
};
