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

### Operadores Lógicos

1 - Selecione e faça a contagem dos restaurantes que não possuem avaliação menor ou igual a 5, essa consulta também deve retornar restaurantes que não possuem o campo de avaliação.
```
db.restaurants.find({ rating: { $not: { $lte: 5 } } },  { name: 1, rating: 1 });
db.restaurants.countDocuments({ rating: { $not: { $lte: 5 } } });
```

2 - Selecione e faça a contagem dos restaurantes em que a avaliação seja maior ou igual a 6, ou restaurantes localizados no bairro Brooklyn.
```
db.restaurants.countDocuments({ $or: [{ rating: { $gte: 6 } }, { borough: 'Brooklyn' }] });
```

3 - Selecione e faça a contagem dos restaurantes localizados nos bairros Queens, Staten Island e Brooklyn e possuem avaliação maior que 4.
```
db.restaurants.countDocuments({ $and: [{ borough: { $in: ['Queens', 'Staten Island', 'Brooklyn'] } }, { rating: { $gt: 4 } }] });

```

4 - Selecione e faça a contagem dos restaurantes onde nem o campo avaliação seja igual a 1, nem o campo culinária seja do tipo American.
```
db.restaurants.countDocuments({ $nor: [{ rating: { $eq: 1 } }, { cuisine: "American" }] });
```

5 - Selecione e faça a contagem dos restaurantes que satisfaçam ambas as condições a seguir:

  A avaliação seja maior que 6 OU menor que 10.
  Estejam localizados no bairro Brooklyn OU não possuam culinária do tipo Delicatessen.
```
db.restaurants.countDocuments({
  $and: [
    { $or: [{ rating: { $gt: 6, $lt: 10 } }] },
    { $or: [{ borough: 'Brooklyn' }, { cuisine: { $ne: 'Delicatessen' } }] }
  ] 
})
```

### Método sort()

1 - Ordene alfabeticamente os restaurantes pelo nome (atributo name).
```
db.restaurants.find({}, { _id: 0, name: 1 }).sort({ name: 1 });
```

2 - Ordene os restaurantes de forma decrescente baseado nas avaliações.
```
db.restaurants.find({}, { _id: 0, name: 1, rating: 1 }).sort({ rating: -1 });
```

### Removendo documentos

1 - Remova o primeiro restaurante que possua culinária do tipo Ice Cream, Gelato, Yogurt, Ices.
```
db.restaurants.deleteOne({ cuisine: "Ice Cream, Gelato, Yogurt, Ices" });
```
2 - Remova todos os restaurantes que possuem culinária do tipo American.
```
db.restaurants.deleteMany({ cuisine: 'American' });
```
