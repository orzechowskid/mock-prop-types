/**
 * create a PropType of the given type
 * @param{String} type
 * @return{Proxy}
 */
function _getPropProxy(type) {
    const isRequiredProxy = new Proxy(function() { }, {
        get(target, prop) {
            return prop === `name`
                ? `${type} (required)`
                : target[prop];
        }
    });

    return new Proxy(function() { }, {
        get(target, prop) {
            switch (prop) {
                case `name`:
                    return type;
                case `isRequired`:
                    return isRequiredProxy;
                default:
                    return target[prop];
            }
        }
    });
}

/**
 * create a PropType factory of the given type
 * @param{String} type
 * @return{Function}
 */
function _getFnPropProxy(type) {
    const fn = function(...args) {
        const key = `${args}`;

        fn[key] = fn[key] || _getPropProxy(`${type}(${key})`);

        return fn[key];
    };

    return fn;
}

module.exports = {
    array: _getPropProxy(`PropTypes.array`),
    arrayOf: _getFnPropProxy(`PropTypes.arrayOf`),
    bool: _getPropProxy(`PropTypes.bool`),
    element: _getPropProxy(`PropTypes.element`),
    exact: _getFnPropProxy(`PropTypes.exact`),
    func: _getPropProxy(`PropTypes.func`),
    instanceOf: _getFnPropProxy(`PropTypes.instanceOf`),
    node: _getPropProxy(`PropTypes.node`),
    number: _getPropProxy(`PropTypes.number`),
    object: _getPropProxy(`PropTypes.object`),
    objectOf: _getFnPropProxy(`PropTypes.objectOf`),
    oneOf: _getFnPropProxy(`PropTypes.oneOf`),
    oneOfType: _getFnPropProxy(`PropTypes.oneOfType`),
    shape: _getFnPropProxy(`PropTypes.shape`),
    string: _getPropProxy(`PropTypes.string`),
    symbol: _getPropProxy(`PropTypes.symbol`)
};
