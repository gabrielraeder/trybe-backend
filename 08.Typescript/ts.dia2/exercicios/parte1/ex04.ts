type Slices  = 4 | 6 | 8;

type Common = 'Calabresa' | 'Frango' | 'Pepperoni';

type Vegetariana = 'Marguerita' | 'Palmito' | 'Cogumelo';

type Doce = 'Nutella' | 'Goiabada com Queijo' | 'Marshmallow';

interface Pizza {
  flavor: string;
  slices: Slices;
}

interface PizzaCommon extends Pizza {
  flavor: Common
}

interface PizzaVegetarian extends Pizza {
  flavor: Vegetariana
}

interface PizzaSugar extends Pizza {
  flavor: Doce,
  slices: 4
}

const calabresa: PizzaCommon = {
  flavor: 'Calabresa',
  slices: 6
};
console.log(calabresa);

const palmito: PizzaVegetarian = {
  flavor: 'Palmito',
  slices: 8
};
console.log(palmito);

const marshmallow: PizzaSugar = {
  flavor: 'Marshmallow',
  slices: 4
};

console.log(marshmallow);