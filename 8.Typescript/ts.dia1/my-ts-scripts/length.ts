export const units = ["km", "hm", "dam", "m", "dm", "cm", "mm"];

export function convert(value: number, base: string, convertTo: string): number {
  const fromIndex = units.indexOf(base); // pegamos o index da unidade base no array
  const toIndex = units.indexOf(convertTo); // pegamos o index da unidade para a conversão
  const exponent = (toIndex - fromIndex); // calculamos o expoente a partir da diferença dos index

  return value * Math.pow(10, exponent);
};