### Operadores de Comparação

1 - Selecione e faça a contagem dos restaurantes presentes nos bairros Queens, Staten Island e Bronx. (utilizando o atributo borough)
```
db.restaurants.find({ borough: { $in: ['Queens', 'Staten Island', 'Bronx'] } }, { name: 1, borough: 1 });
db.restaurants.countDocuments({ borough: { $in: ['Queens', 'Staten Island', 'Bronx'] } });
```

2 - Selecione e faça a contagem dos restaurantes que não possuem culinária do tipo American. (utilizando o atributo cuisine)
```
db.restaurants.find({ cuisine: { $ne: 'American' } }, { name: 1, cuisine: 1 });
db.restaurants.countDocuments({ cuisine: { $ne: 'American' } });
```

3 - Selecione e faça a contagem dos restaurantes que possuem avaliação maior ou igual a 8. (utilizando o atributo rating)
```
db.restaurants.find({ rating: { $gte: 8 } }, { name: 1, rating: 1 });
db.restaurants.countDocuments({ rating: { $gte: 8 } });
```

4 - Selecione e faça a contagem dos restaurantes que possuem avaliação menor que 4.
```
db.restaurants.find({ rating: { $lt: 4 } }, { name: 1, rating: 1 });
db.restaurants.countDocuments({ rating: { $lt: 4 } });
```

5 - Selecione e faça a contagem dos restaurantes que não possuem as avaliações 5, 6 e 7.
```
db.restaurants.find({ rating: { $nin: [5, 6, 7] } }, { name: 1, rating: 1 });
db.restaurants.countDocuments({ rating: { $nin: [5, 6, 7] } });
```
