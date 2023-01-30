import * as Ex from './exercises';

console.log("A ÁREA DE UM:");

console.log(`- Quadrado de lado 10cm: ${Ex.getSquareArea(10)}cm²`);
console.log(`- Quadrado de lado 5cm: ${Ex.getSquareArea(5)}cm²`);
console.log(`- Quadrado de lado 100cm: ${Ex.getSquareArea(100)}cm²`);

console.log(`- Retângulo de base 10cm e altura 25cm: ${Ex.getRectangleArea(10, 25)}cm²`);
console.log(`- Retângulo de base 5cm e altura 30cm: ${Ex.getRectangleArea(5, 30)}cm²`);
console.log(`- Retângulo de base 200cm e altura 100cm: ${Ex.getRectangleArea(200, 100)}cm²`);

console.log(`- Triângulo de base 10cm e altura 25cm: ${Ex.getTriangleArea(10, 25)}cm²`);
console.log(`- Triângulo de base 5cm e altura 30cm: ${Ex.getTriangleArea(5, 30)}cm²`);
console.log(`- Triângulo de base 100cm e altura 200cm: ${Ex.getTriangleArea(100, 200)}cm²`);

console.log("\nO PERÍMETRO DE UM:");

console.log(`- Quadrado de lado 10cm: ${Ex.getPolygonPerimeter([10, 10, 10, 10])}cm`);
console.log(`- Retângulo de base 10cm e altura 25cm: ${Ex.getPolygonPerimeter([10, 25, 10, 25])}cm`);
console.log(`- Triângulo cujos lados tem 10cm cada: ${Ex.getPolygonPerimeter([10, 10, 10])}cm`);

console.log("\nVERIFICA A EXISTÊNCIA DE TRIÂNGULOS CUJOS LADOS TÊM:");

console.log(`- 10cm, 5cm e 3cm: ${Ex.triangleCheck(10, 5, 3)}`);
console.log(`- 10cm, 5cm e 3cm: ${Ex.triangleCheck(10, 5, 8)}`);
console.log(`- 10cm, 5cm e 3cm: ${Ex.triangleCheck(30, 30, 30)}`);

console.log("\nÁREA DE UM LOSANGO:");

console.log(`Diagonal maior 32cm, menor 18cm: ${Ex.getLosangoArea(32, 18)}cm²`);
console.log(`Diagonal maior 200cm, menor 50cm: ${Ex.getLosangoArea(200, 50)}cm²`);
console.log(`Diagonal maior 75cm, menor 25cm: ${Ex.getLosangoArea(75, 25)}cm²`);

console.log("\nÁREA DE UM TRAPEZIO:");

console.log(`B = 100cm, b = 70cm e altura = 50cm : ${Ex.getTrapezioArea(100, 70, 50)}cm²`);
console.log(`B = 75cm, b = 50cm e altura = 35cm: ${Ex.getTrapezioArea(75, 50, 35)}cm²`);
console.log(`B = 150cm, b = 120cm e altura = 80cm: ${Ex.getTrapezioArea(150, 120, 80)}cm²`);

console.log("\nÁREA DE UM CIRCULO:");

console.log(`raio 25cm: ${Ex.getCircleArea(25)}cm²`);
console.log(`raio 100cm: ${Ex.getCircleArea(100)}cm²`);
console.log(`raio 12.5cm: ${Ex.getCircleArea(12.5)}cm²`);