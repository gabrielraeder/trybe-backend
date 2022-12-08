"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convert = exports.units = void 0;
exports.units = ["kg", "hg", "dag", "g", "dg", "cg", "mg"];
function convert(value, base, convertTo) {
    const fromIndex = exports.units.indexOf(base);
    const toIndex = exports.units.indexOf(convertTo);
    const exponent = (toIndex - fromIndex);
    return value * Math.pow(10, exponent);
}
exports.convert = convert;
;
