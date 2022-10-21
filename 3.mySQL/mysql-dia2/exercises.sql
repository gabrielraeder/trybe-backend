SELECT f.title, b.domestic_sales, b.international_sales
FROM pixar.movies AS f
INNER JOIN pixar.box_office AS b
ON f.id = b.movie_id;

SELECT f.title, b.domestic_sales + b.international_sales AS total_sales
FROM pixar.movies AS f
INNER JOIN pixar.box_office AS b
ON f.id = b.movie_id
WHERE b.domestic_sales < b.international_sales;

SELECT f.title, b.rating
FROM pixar.movies AS f
INNER JOIN pixar.box_office AS b
ON f.id = b.movie_id
ORDER BY b.rating DESC;

SELECT t.name, t.location, f.title
FROM pixar.theater AS t
LEFT JOIN pixar.movies AS f
ON t.id = f.theater_id;

SELECT t.name, t.location, f.title
FROM pixar.theater AS t
RIGHT JOIN pixar.movies AS f
ON t.id = f.theater_id
ORDER BY t.name;

SELECT m.*
FROM pixar.movies AS m
INNER JOIN pixar.box_office AS b
ON m.id = b.movie_id
WHERE m.theater_id IS NOT NULL AND b.rating > 8;
