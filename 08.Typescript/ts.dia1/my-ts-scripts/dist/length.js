"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convert = exports.units = void 0;
exports.units = ["km", "hm", "dam", "m", "dm", "cm", "mm"];
function convert(value, base, convertTo) {
    const fromIndex = exports.units.indexOf(base); // pegamos o index da unidade base no array
    const toIndex = exports.units.indexOf(convertTo); // pegamos o index da unidade para a conversão
    const exponent = (toIndex - fromIndex); // calculamos o expoente a partir da diferença dos index
    return value * Math.pow(10, exponent);
}
exports.convert = convert;
;
