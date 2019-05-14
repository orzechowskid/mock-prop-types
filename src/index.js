const PropTypes = require('prop-types');
const serialize = require('serialize-javascript');

function _serialize(items) {
    console.log(`items:`, items);
    try {
        return serialize(items.map(function(item) {
            return item.toString
                ? item.toString()
                : item;
        }));
    } catch (ex) {
        console.log(`items:`, items);
        return 'herpaderp';
    }
}

/**
 * create a PropType of the given type
 * @param{String} type
 * @return{Proxy}
 */
function _getPropProxy(type) {
    const name = `_PropTypes.${type}`;
    const baseProp = PropTypes[type];
    const requiredProp = baseProp.isRequired;
    const requiredProxy = new Proxy(requiredProp, {
        get(target, prop) {
            switch (prop) {
                case `name`:
                    return `${name} (required)`;
                case Symbol.toPrimitive:
                    return `_herp${name} (required)`;
                case toString:
                    return function() { return `_herp${name} (required)`; };
                default:
                    return baseProp[prop];
            }
        }
    });
    const p = new Proxy(function() { }, {
        get(target, prop) {
            switch (prop) {
                case `name`:
                    return name;
                case `isRequired`:
                    return requiredProxy;
                case toString:
                case Symbol.toPrimitive:
                    return function() { return `_derp`; };
                default:
                    return target[prop];
            }
        }
    });

    p.toString = p[Symbol.toPrimitive] = function() { return name; };

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
    const p = new Proxy(function() { }, {
        apply(target, thisArg, args) { // e.g. oneOf(...args)
            const key = _serialize(args);

            if (p[key]) {
                return p[key];
            }

            p[key] = new Proxy(PropTypes[type].apply(thisArg, args), {
                get(target, prop) {
                    
                    return target[prop];
                }
            });
            p[key].toString = p[key][Symbol.toPrimitive] =
                function() { return `balls`; };

            return p[key];
        }
    });

    p.toString = p[Symbol.toPrimitive] = function() { return `ohhh damn`; };

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
