const PropTypes = require('../index');

class MockClass { }
class MockDifferentClass { }

describe(`the mock-prop-types module`, function() {
    describe(`any prop-type`, function() {
        it(`exists`, function() {
            expect(PropTypes.any).toBeDefined();
        });

        it(`matches itself`, function() {
            expect({
                foo: PropTypes.any
            }).toEqual({
                foo: PropTypes.any
            });
        });

        it(`doesn't match others`, function() {
            expect({
                foo: PropTypes.any
            }).not.toEqual({
                foo: PropTypes.bool
            });

            expect(Object.keys(PropTypes)
                   .filter(function(key) { return key !== `any`; })
                   .reduce(function(match, key) {
                       return match
                           && (PropTypes.any !== PropTypes[key]);
                   }, true))
                .toBe(true);
        });

        describe(`isRequired`, function() {
            it(`exists`, function() {
                expect(PropTypes.any.isRequired).toBeDefined();
            });

            it(`matches itself`, function() {
                expect({
                    foo: PropTypes.any.isRequired
                }).toEqual({
                    foo: PropTypes.any.isRequired
                });
            });

            it(`does not match the non-required version`, function() {
                expect({
                    foo: PropTypes.any.isRequired
                }).not.toEqual({
                    foo: PropTypes.any
                });
            });
        });
    });

    describe(`array prop-type`, function() {
        it(`exists`, function() {
            expect(PropTypes.array).toBeDefined();
        });

        it(`matches itself`, function() {
            expect({
                foo: PropTypes.array
            }).toEqual({
                foo: PropTypes.array
            });
        });

        it(`doesn't match others`, function() {
            expect({
                foo: PropTypes.array
            }).not.toEqual({
                foo: PropTypes.bool
            });

            expect(Object.keys(PropTypes)
                   .filter(function(key) { return key !== `array`; })
                   .reduce(function(match, key) {
                       return match
                           && (PropTypes.array !== PropTypes[key]);
                   }, true))
                .toBe(true);
        });

        describe(`isRequired`, function() {
            it(`exists`, function() {
                expect(PropTypes.array.isRequired).toBeDefined();
            });

            it(`matches itself`, function() {
                expect({
                    foo: PropTypes.array.isRequired
                }).toEqual({
                    foo: PropTypes.array.isRequired
                });
            });

            it(`does not match the non-required version`, function() {
                expect({
                    foo: PropTypes.array.isRequired
                }).not.toEqual({
                    foo: PropTypes.array
                });
            });
        });
    });

    describe(`arrayOf prop-type`, function() {
        it(`exists`, function() {
            expect(PropTypes.arrayOf).toBeDefined();
        });

        it(`matches itself when given the same arguments`, function() {
            expect({
                foo: PropTypes.arrayOf(PropTypes.bool)
            }).toEqual({
                foo: PropTypes.arrayOf(PropTypes.bool)
            });
        });

        it(`does not match itself when given different arguments`, function() {
            expect({
                foo: PropTypes.arrayOf(PropTypes.bool)
            }).not.toEqual({
                foo: PropTypes.arrayOf(PropTypes.number)
            });
        });

        it(`doesn't match others`, function() {
            expect({
                foo: PropTypes.arrayOf(PropTypes.bool)
            }).not.toEqual({
                foo: PropTypes.bool
            });

            expect(Object.keys(PropTypes)
                   .filter(function(key) { return key !== `arrayOf`; })
                   .reduce(function(match, key) {
                       return match
                           && (PropTypes.arrayOf !== PropTypes[key]);
                   }, true))
                .toBe(true);
        });

        describe(`isRequired`, function() {
            it(`exists`, function() {
                expect(PropTypes.arrayOf(PropTypes.bool).isRequired).toBeDefined();
            });

            it(`matches itself`, function() {
                expect({
                    foo: PropTypes.arrayOf(PropTypes.bool).isRequired
                }).toEqual({
                    foo: PropTypes.arrayOf(PropTypes.bool).isRequired
                });
            });

            it(`doesn't match others`, function() {
                expect({
                    foo: PropTypes.arrayOf(PropTypes.bool).isRequired
                }).not.toEqual({
                    foo: PropTypes.arrayOf(PropTypes.string).isRequired
                });
            });

            it(`does not match the non-required version`, function() {
                expect({
                    foo: PropTypes.arrayOf(PropTypes.bool).isRequired
                }).not.toEqual({
                    foo: PropTypes.arrayOf(PropTypes.bool)
                });
            });
        });
    });

    describe(`bool prop-type`, function() {
        it(`exists`, function() {
            expect(PropTypes.bool).toBeDefined();
        });

        it(`matches itself`, function() {
            expect({
                foo: PropTypes.bool
            }).toEqual({
                foo: PropTypes.bool
            });
        });

        it(`doesn't match others`, function() {
            expect({
                foo: PropTypes.bool
            }).not.toEqual({
                foo: PropTypes.array
            });

            expect(Object.keys(PropTypes)
                   .filter(function(key) { return key !== `bool`; })
                   .reduce(function(match, key) {
                       return match
                           && (PropTypes.bool !== PropTypes[key]);
                   }, true))
                .toBe(true);
        });

        describe(`isRequired`, function() {
            it(`exists`, function() {
                expect(PropTypes.bool.isRequired).toBeDefined();
            });

            it(`matches itself`, function() {
                expect({
                    foo: PropTypes.bool.isRequired
                }).toEqual({
                    foo: PropTypes.bool.isRequired
                });
            });

            it(`does not match the non-required version`, function() {
                expect({
                    foo: PropTypes.bool.isRequired
                }).not.toEqual({
                    foo: PropTypes.bool
                });
            });
        });
    });

    describe(`element prop-type`, function() {
        it(`exists`, function() {
            expect(PropTypes.element).toBeDefined();
        });

        it(`matches itself`, function() {
            expect({
                foo: PropTypes.element
            }).toEqual({
                foo: PropTypes.element
            });
        });

        it(`doesn't match others`, function() {
            expect({
                foo: PropTypes.element
            }).not.toEqual({
                foo: PropTypes.bool
            });

            expect(Object.keys(PropTypes)
                   .filter(function(key) { return key !== `element`; })
                   .reduce(function(match, key) {
                       return match
                           && (PropTypes.element !== PropTypes[key]);
                   }, true))
                .toBe(true);
        });

        describe(`isRequired`, function() {
            it(`exists`, function() {
                expect(PropTypes.element.isRequired).toBeDefined();
            });

            it(`matches itself`, function() {
                expect({
                    foo: PropTypes.element.isRequired
                }).toEqual({
                    foo: PropTypes.element.isRequired
                });
            });

            it(`does not match the non-required version`, function() {
                expect({
                    foo: PropTypes.element.isRequired
                }).not.toEqual({
                    foo: PropTypes.element
                });
            });
        });
    });

    describe(`exact prop-type`, function() {
        it(`exists`, function() {
            expect(PropTypes.exact).toBeDefined();
        });

        it(`matches itself when given the same arguments`, function() {
            expect({
                foo: PropTypes.exact({
                    bar: PropTypes.bool
                })
            }).toEqual({
                foo: PropTypes.exact({
                    bar: PropTypes.bool
                })
            });
        });

        it(`does not match itself when given different arguments`, function() {
            expect({
                foo: PropTypes.exact({
                    bar: PropTypes.bool
                })
            }).not.toEqual({
                foo: PropTypes.exact({
                    bar: PropTypes.string
                })
            });
        });

        it(`doesn't match others`, function() {
            expect({
                foo: PropTypes.exact({
                    foo: PropTypes.bool
                })
            }).not.toEqual({
                foo: PropTypes.bool
            });

            expect(Object.keys(PropTypes)
                   .filter(function(key) { return key !== `exact`; })
                   .reduce(function(match, key) {
                       return match
                           && (PropTypes.exact !== PropTypes[key]);
                   }, true))
                .toBe(true);
        });

        describe(`isRequired`, function() {
            it(`exists`, function() {
                expect(PropTypes.exact({
                    foo: PropTypes.bool
                }).isRequired).toBeDefined();
            });

            it(`matches itself`, function() {
                expect({
                    foo: PropTypes.exact({
                        bar: PropTypes.bool
                    }).isRequired
                }).toEqual({
                    foo: PropTypes.exact({
                        bar: PropTypes.bool
                    }).isRequired
                });
            });

            it(`doesn't match others`, function() {
                expect({
                    foo: PropTypes.exact({
                        bar: PropTypes.bool
                    }).isRequired
                }).not.toEqual({
                    foo: PropTypes.exact({
                        bar: PropTypes.string
                    }).isRequired
                });
            });

            it(`does not match the non-required version`, function() {
                expect({
                    foo: PropTypes.exact({
                        bar: PropTypes.bool
                    }).isRequired
                }).not.toEqual({
                    foo: PropTypes.exact({
                        bar: PropTypes.bool
                    })
                });
            });
        });
    });

    describe(`func prop-type`, function() {
        it(`exists`, function() {
            expect(PropTypes.func).toBeDefined();
        });

        it(`matches itself`, function() {
            expect({
                foo: PropTypes.func
            }).toEqual({
                foo: PropTypes.func
            });
        });

        it(`doesn't match others`, function() {
            expect({
                foo: PropTypes.func
            }).not.toEqual({
                foo: PropTypes.bool
            });

            expect(Object.keys(PropTypes)
                   .filter(function(key) { return key !== `func`; })
                   .reduce(function(match, key) {
                       return match
                           && (PropTypes.func !== PropTypes[key]);
                   }, true))
                .toBe(true);
        });

        describe(`isRequired`, function() {
            it(`exists`, function() {
                expect(PropTypes.func.isRequired).toBeDefined();
            });

            it(`matches itself`, function() {
                expect({
                    foo: PropTypes.func.isRequired
                }).toEqual({
                    foo: PropTypes.func.isRequired
                });
            });

            it(`does not match the non-required version`, function() {
                expect({
                    foo: PropTypes.func.isRequired
                }).not.toEqual({
                    foo: PropTypes.func
                });
            });
        });
    });

    describe(`instanceOf prop-type`, function() {
        it(`exists`, function() {
            expect(PropTypes.instanceOf).toBeDefined();
        });

        it(`matches itself when given the same arguments`, function() {
            expect({
                foo: PropTypes.instanceOf(MockClass)
            }).toEqual({
                foo: PropTypes.instanceOf(MockClass)
            });
        });

        it(`does not match itself when given different arguments`, function() {
            expect({
                foo: PropTypes.instanceOf(MockClass)
            }).not.toEqual({
                foo: PropTypes.instanceOf(MockDifferentClass)
            });
        });

        it(`doesn't match others`, function() {
            expect({
                foo: PropTypes.instanceOf(MockClass)
            }).not.toEqual({
                foo: PropTypes.bool
            });

            expect(Object.keys(PropTypes)
                   .filter(function(key) { return key !== `instanceOf`; })
                   .reduce(function(match, key) {
                       return match
                           && (PropTypes.instanceOf !== PropTypes[key]);
                   }, true))
                .toBe(true);
        });

        describe(`isRequired`, function() {
            it(`exists`, function() {
                expect(PropTypes.instanceOf(MockClass).isRequired).toBeDefined();
            });

            it(`matches itself`, function() {
                expect({
                    foo: PropTypes.instanceOf(MockClass).isRequired
                }).toEqual({
                    foo: PropTypes.instanceOf(MockClass).isRequired
                });
            });

            it(`doesn't match others`, function() {
                expect({
                    foo: PropTypes.instanceOf(MockClass).isRequired
                }).not.toEqual({
                    foo: PropTypes.instanceOf(MockDifferentClass).isRequired
                });
            });

            it(`does not match the non-required version`, function() {
                expect({
                    foo: PropTypes.instanceOf(MockClass).isRequired
                }).not.toEqual({
                    foo: PropTypes.instanceOf(MockClass)
                });
            });
        });
    });

    describe(`node prop-type`, function() {
        it(`exists`, function() {
            expect(PropTypes.node).toBeDefined();
        });

        it(`matches itself`, function() {
            expect({
                foo: PropTypes.node
            }).toEqual({
                foo: PropTypes.node
            });
        });

        it(`doesn't match others`, function() {
            expect({
                foo: PropTypes.node
            }).not.toEqual({
                foo: PropTypes.bool
            });

            expect(Object.keys(PropTypes)
                   .filter(function(key) { return key !== `node`; })
                   .reduce(function(match, key) {
                       return match
                           && (PropTypes.node !== PropTypes[key]);
                   }, true))
                .toBe(true);
        });

        describe(`isRequired`, function() {
            it(`exists`, function() {
                expect(PropTypes.node.isRequired).toBeDefined();
            });

            it(`matches itself`, function() {
                expect({
                    foo: PropTypes.node.isRequired
                }).toEqual({
                    foo: PropTypes.node.isRequired
                });
            });

            it(`does not match the non-required version`, function() {
                expect({
                    foo: PropTypes.node.isRequired
                }).not.toEqual({
                    foo: PropTypes.node
                });
            });
        });
    });

    describe(`number prop-type`, function() {
        it(`exists`, function() {
            expect(PropTypes.number).toBeDefined();
        });

        it(`matches itself`, function() {
            expect({
                foo: PropTypes.number
            }).toEqual({
                foo: PropTypes.number
            });
        });

        it(`doesn't match others`, function() {
            expect({
                foo: PropTypes.number
            }).not.toEqual({
                foo: PropTypes.bool
            });

            expect(Object.keys(PropTypes)
                   .filter(function(key) { return key !== `number`; })
                   .reduce(function(match, key) {
                       return match
                           && (PropTypes.number !== PropTypes[key]);
                   }, true))
                .toBe(true);
        });

        describe(`isRequired`, function() {
            it(`exists`, function() {
                expect(PropTypes.number.isRequired).toBeDefined();
            });

            it(`matches itself`, function() {
                expect({
                    foo: PropTypes.number.isRequired
                }).toEqual({
                    foo: PropTypes.number.isRequired
                });
            });

            it(`does not match the non-required version`, function() {
                expect({
                    foo: PropTypes.number.isRequired
                }).not.toEqual({
                    foo: PropTypes.number
                });
            });
        });
    });

    describe(`object prop-type`, function() {
        it(`exists`, function() {
            expect(PropTypes.object).toBeDefined();
        });

        it(`matches itself`, function() {
            expect({
                foo: PropTypes.object
            }).toEqual({
                foo: PropTypes.object
            });
        });

        it(`doesn't match others`, function() {
            expect({
                foo: PropTypes.object
            }).not.toEqual({
                foo: PropTypes.bool
            });

            expect(Object.keys(PropTypes)
                   .filter(function(key) { return key !== `object`; })
                   .reduce(function(match, key) {
                       return match
                           && (PropTypes.object !== PropTypes[key]);
                   }, true))
                .toBe(true);
        });

        describe(`isRequired`, function() {
            it(`exists`, function() {
                expect(PropTypes.object.isRequired).toBeDefined();
            });

            it(`matches itself`, function() {
                expect({
                    foo: PropTypes.object.isRequired
                }).toEqual({
                    foo: PropTypes.object.isRequired
                });
            });

            it(`does not match the non-required version`, function() {
                expect({
                    foo: PropTypes.object.isRequired
                }).not.toEqual({
                    foo: PropTypes.object
                });
            });
        });
    });

    describe(`objectOf prop-type`, function() {
        it(`exists`, function() {
            expect(PropTypes.objectOf).toBeDefined();
        });

        it(`matches itself when given the same arguments`, function() {
            expect({
                foo: PropTypes.objectOf(PropTypes.bool)
            }).toEqual({
                foo: PropTypes.objectOf(PropTypes.bool)
            });
        });

        it(`does not match itself when given different arguments`, function() {
            expect({
                foo: PropTypes.objectOf(PropTypes.bool)
            }).not.toEqual({
                foo: PropTypes.objectOf(PropTypes.number)
            });
        });

        it(`doesn't match others`, function() {
            expect({
                foo: PropTypes.objectOf(PropTypes.bool)
            }).not.toEqual({
                foo: PropTypes.bool
            });

            expect(Object.keys(PropTypes)
                   .filter(function(key) { return key !== `objectOf`; })
                   .reduce(function(match, key) {
                       return match
                           && (PropTypes.objectOf !== PropTypes[key]);
                   }, true))
                .toBe(true);
        });

        describe(`isRequired`, function() {
            it(`exists`, function() {
                expect(PropTypes.objectOf(PropTypes.bool).isRequired).toBeDefined();
            });

            it(`matches itself`, function() {
                expect({
                    foo: PropTypes.objectOf(PropTypes.bool).isRequired
                }).toEqual({
                    foo: PropTypes.objectOf(PropTypes.bool).isRequired
                });
            });

            it(`doesn't match others`, function() {
                expect({
                    foo: PropTypes.objectOf(PropTypes.bool).isRequired
                }).not.toEqual({
                    foo: PropTypes.objectOf(PropTypes.number).isRequired
                });
            });

            it(`does not match the non-required version`, function() {
                expect({
                    foo: PropTypes.objectOf(PropTypes.bool).isRequired
                }).not.toEqual({
                    foo: PropTypes.objectOf(PropTypes.bool)
                });
            });
        });
    });

    describe(`oneOf prop-type`, function() {
        it(`exists`, function() {
            expect(PropTypes.oneOf).toBeDefined();
        });

        it(`matches itself when given the same arguments`, function() {
            expect({
                foo: PropTypes.oneOf([ 0 ])
            }).toEqual({
                foo: PropTypes.oneOf([ 0 ])
            });
        });

        it(`does not match itself when given different arguments`, function() {
            expect({
                foo: PropTypes.oneOf([ 0 ])
            }).not.toEqual({
                foo: PropTypes.oneOf([ 1 ])
            });
        });

        it(`doesn't match others`, function() {
            expect({
                foo: PropTypes.oneOf([ 0 ])
            }).not.toEqual({
                foo: PropTypes.bool
            });

            expect(Object.keys(PropTypes)
                   .filter(function(key) { return key !== `oneOf`; })
                   .reduce(function(match, key) {
                       return match
                           && (PropTypes.oneOf !== PropTypes[key]);
                   }, true))
                .toBe(true);
        });

        describe(`isRequired`, function() {
            it(`exists`, function() {
                expect(PropTypes.oneOf([ 0 ]).isRequired).toBeDefined();
            });

            it(`matches itself`, function() {
                expect({
                    foo: PropTypes.oneOf([ 0 ]).isRequired
                }).toEqual({
                    foo: PropTypes.oneOf([ 0 ]).isRequired
                });
            });

            it(`doesn't match others`, function() {
                expect({
                    foo: PropTypes.oneOf([ 0 ]).isRequired
                }).not.toEqual({
                    foo: PropTypes.oneOf([ 1 ]).isRequired
                });
            });

            it(`does not match the non-required version`, function() {
                expect({
                    foo: PropTypes.oneOf([ 0 ]).isRequired
                }).not.toEqual({
                    foo: PropTypes.oneOf([ 0 ])
                });
            });
        });
    });

    describe(`oneOfType prop-type`, function() {
        it(`exists`, function() {
            expect(PropTypes.oneOfType).toBeDefined();
        });

        it(`matches itself when given the same arguments`, function() {
            expect({
                foo: PropTypes.oneOfType([ PropTypes.bool ])
            }).toEqual({
                foo: PropTypes.oneOfType([ PropTypes.bool ])
            });
        });

        it(`does not match itself when given different arguments`, function() {
            expect({
                foo: PropTypes.oneOfType([ PropTypes.bool ])
            }).not.toEqual({
                foo: PropTypes.oneOfType(PropTypes.instanceOf(MockClass))
            });
        });

        it(`doesn't match others`, function() {
            expect({
                foo: PropTypes.oneOfType([ PropTypes.bool ])
            }).not.toEqual({
                foo: PropTypes.bool
            });

            expect(Object.keys(PropTypes)
                   .filter(function(key) { return key !== `oneOfType`; })
                   .reduce(function(match, key) {
                       return match
                           && (PropTypes.oneOfType !== PropTypes[key]);
                   }, true))
                .toBe(true);
        });

        describe(`isRequired`, function() {
            it(`exists`, function() {
                expect(PropTypes.oneOfType([ PropTypes.bool ]).isRequired).toBeDefined();
            });

            it(`matches itself`, function() {
                expect({
                    foo: PropTypes.oneOfType([ PropTypes.bool ]).isRequired
                }).toEqual({
                    foo: PropTypes.oneOfType([ PropTypes.bool ]).isRequired
                });
            });

            it(`doesn't match others`, function() {
                expect({
                    foo: PropTypes.oneOfType([ PropTypes.bool ]).isRequired
                }).not.toEqual({
                    foo: PropTypes.oneOfType(PropTypes.instanceOf(MockClass)).isRequired
                });
            });

            it(`does not match the non-required version`, function() {
                expect({
                    foo: PropTypes.oneOfType([ PropTypes.bool ]).isRequired
                }).not.toEqual({
                    foo: PropTypes.oneOfType([ PropTypes.bool ])
                });
            });
        });
    });

    describe(`shape prop-type`, function() {
        it(`exists`, function() {
            expect(PropTypes.shape).toBeDefined();
        });

        it(`matches itself when given the same arguments`, function() {
            expect({
                foo: PropTypes.shape({
                    foo: PropTypes.bool,
                    bar: PropTypes.string
                })
            }).toEqual({
                foo: PropTypes.shape({
                    foo: PropTypes.bool,
                    bar: PropTypes.string
                })
            });
        });

        it(`does not match itself when given different arguments`, function() {
            expect({
                foo: PropTypes.shape({
                    foo: PropTypes.bool,
                    bar: PropTypes.string
                })
            }).not.toEqual({
                foo: PropTypes.shape({
                    foo: PropTypes.string,
                    bar: PropTypes.bool
                })
            });
        });

        it(`doesn't match others`, function() {
            expect({
                foo: PropTypes.shape({
                    foo: PropTypes.bool,
                    bar: PropTypes.string
                })
            }).not.toEqual({
                foo: PropTypes.bool
            });

            expect(Object.keys(PropTypes)
                   .filter(function(key) { return key !== `shape`; })
                   .reduce(function(match, key) {
                       return match
                           && (PropTypes.shape !== PropTypes[key]);
                   }, true))
                .toBe(true);
        });

        describe(`isRequired`, function() {
            it(`exists`, function() {
                expect(PropTypes.shape({
                    foo: PropTypes.bool,
                    bar: PropTypes.string
                }).isRequired).toBeDefined();
            });

            it(`matches itself`, function() {
                expect({
                    foo: PropTypes.shape({
                        foo: PropTypes.bool,
                        bar: PropTypes.string
                    }).isRequired
                }).toEqual({
                    foo: PropTypes.shape({
                        foo: PropTypes.bool,
                        bar: PropTypes.string
                    }).isRequired
                });
            });

            it(`doesn't match others`, function() {
                expect({
                    foo: PropTypes.shape({
                        foo: PropTypes.bool,
                        bar: PropTypes.string
                    }).isRequired
                }).not.toEqual({
                    foo: PropTypes.bool.isRequired
                });
            });

            it(`does not match the non-required version`, function() {
                expect({
                    foo: PropTypes.shape({
                        foo: PropTypes.bool,
                        bar: PropTypes.string
                    }).isRequired
                }).not.toEqual({
                    foo: PropTypes.shape({
                        foo: PropTypes.bool,
                        bar: PropTypes.string
                    })
                });
            });
        });
    });

    describe(`string prop-type`, function() {
        it(`exists`, function() {
            expect(PropTypes.string).toBeDefined();
        });

        it(`matches itself`, function() {
            expect({
                foo: PropTypes.string
            }).toEqual({
                foo: PropTypes.string
            });
        });

        it(`doesn't match others`, function() {
            expect({
                foo: PropTypes.string
            }).not.toEqual({
                foo: PropTypes.bool
            });

            expect(Object.keys(PropTypes)
                   .filter(function(key) { return key !== `string`; })
                   .reduce(function(match, key) {
                       return match
                           && (PropTypes.string !== PropTypes[key]);
                   }, true))
                .toBe(true);
        });

        describe(`isRequired`, function() {
            it(`exists`, function() {
                expect(PropTypes.string.isRequired).toBeDefined();
            });

            it(`matches itself`, function() {
                expect({
                    foo: PropTypes.string.isRequired
                }).toEqual({
                    foo: PropTypes.string.isRequired
                });
            });

            it(`does not match the non-required version`, function() {
                expect({
                    foo: PropTypes.string.isRequired
                }).not.toEqual({
                    foo: PropTypes.string
                });
            });
        });
    });

    describe(`symbol prop-type`, function() {
        it(`exists`, function() {
            expect(PropTypes.symbol).toBeDefined();
        });

        it(`matches itself`, function() {
            expect({
                foo: PropTypes.symbol
            }).toEqual({
                foo: PropTypes.symbol
            });
        });

        it(`doesn't match others`, function() {
            expect({
                foo: PropTypes.symbol
            }).not.toEqual({
                foo: PropTypes.bool
            });

            expect(Object.keys(PropTypes)
                   .filter(function(key) { return key !== `symbol`; })
                   .reduce(function(match, key) {
                       return match
                           && (PropTypes.symbol !== PropTypes[key]);
                   }, true))
                .toBe(true);
        });

        describe(`isRequired`, function() {
            it(`exists`, function() {
                expect(PropTypes.symbol.isRequired).toBeDefined();
            });

            it(`matches itself`, function() {
                expect({
                    foo: PropTypes.symbol.isRequired
                }).toEqual({
                    foo: PropTypes.symbol.isRequired
                });
            });

            it(`does not match the non-required version`, function() {
                expect({
                    foo: PropTypes.symbol.isRequired
                }).not.toEqual({
                    foo: PropTypes.symbol
                });
            });
        });
    });
});