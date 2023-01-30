export const units = ["kg", "hg", "dag", "g", "dg", "cg", "mg"];

export function convert(value: number, base: string, convertTo: string): number {
  const fromIndex = units.indexOf(base);
  const toIndex = units.indexOf(convertTo);
  const exponent = (toIndex - fromIndex);

  return value * Math.pow(10, exponent);
};
