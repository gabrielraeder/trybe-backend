type Slices  = 4 | 6 | 8;

interface Pizza {
  flavor: string;
  slices: Slices;
}

export const calabresa: Pizza = {
  flavor: 'Calabresa',
  slices: 8,
}

export const marguerita: Pizza = {
  flavor: 'Marguerita',
  slices: 6,
}

export const nutella: Pizza = {
  flavor: 'Nutella',
  slices: 4,
};

console.log(calabresa);
console.log(marguerita);
console.log(nutella);
