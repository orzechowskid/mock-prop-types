const PropTypes = require('prop-types');
const serialize = require('serialize-javascript');

function _serialize(items) {
    return serialize(items.map(function(item) {
        return item.serialize
            ? item.serialize()
            : item;
    }));
}

/**
 * create a PropType of the given type
 * @param{String} type
 * @return{Proxy}
 */
function _getPropProxy(type) {
    const name = `_PropTypes.${type}`;
    const requiredName = `${name} (required)`;
    const baseProp = PropTypes[type];
    const requiredProp = baseProp.isRequired;
    const requiredProxy = new Proxy(requiredProp, {
        get(target, prop) {
            switch (prop) {
                case `name`:
                    return requiredName;
                default:
                    return target[prop];
            }
        }
    });
    const p = new Proxy(baseProp, {
        get(target, prop) {
            switch (prop) {
                case `name`:
                    return name;
                case `isRequired`:
                    return requiredProxy;
                default:
                    return target[prop];
            }
        }
    });

    p.toString = function() { return name; };
    p.serialize = function() { return name; };
    requiredProxy.toString = function() { return requiredName; };
    requiredProxy.serialize = function() { return requiredName; };

    return p;
}

/**
 * create a PropType factory of the given type
 * @param{String} type
 * @return{Function}
 */
function _getFnPropProxy(type) {
    const name = `_PropTypes.${type}`;
    const baseFnProp = PropTypes[type];
    const p = new Proxy(baseFnProp, {
        apply(target, thisArg, args) {
            const key = _serialize(args);

            if (p[key]) {
                return p[key];
            }

            p[key] = new Proxy(PropTypes[type].apply(thisArg, args), {
                get(target, prop) {
                    switch (prop) {
                        case `name`:
                            return `${name}(${key})`;
                        default:
                            return target[prop];
                    }
                }
            });
            p[key].toString = function() { return `${name}(${key})`; };
            p[key].serialize = function() { return `${name}(${key})`; };

            return p[key];
        }
    });

    return p;
}

const _exports = {
    any: _getPropProxy(`any`),
    array: _getPropProxy(`array`),
    arrayOf: _getFnPropProxy(`arrayOf`),
    bool: _getPropProxy(`bool`),
    element: _getPropProxy(`element`),
    elementType: _getPropProxy(`elementType`),
    exact: _getFnPropProxy(`exact`),
    func: _getPropProxy(`func`),
    instanceOf: _getFnPropProxy(`instanceOf`),
    node: _getPropProxy(`node`),
    number: _getPropProxy(`number`),
    object: _getPropProxy(`object`),
    objectOf: _getFnPropProxy(`objectOf`),
    oneOf: _getFnPropProxy(`oneOf`),
    oneOfType: _getFnPropProxy(`oneOfType`),
    shape: _getFnPropProxy(`shape`),
    string: _getPropProxy(`string`),
    symbol: _getPropProxy(`symbol`)
};

_exports.default = _exports;

module.exports = _exports;
