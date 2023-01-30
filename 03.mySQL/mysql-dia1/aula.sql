SELECT UCASE('trybe');
SELECT REPLACE('Você já ouviu falar do DuckDuckGo?', 'DuckDuckGo', 'Google');
SELECT LENGTH('Uma frase qualquer');
SELECT SUBSTRING('A linguagem JavaScript está entre as mais usadas', 13, 10);
SELECT LCASE('RUA NORTE 1500, SÃO PAULO, BRASIL');

SELECT film_id, title, IF(title = 'ACE GOLDFINGER', 'JÁ ASSISTI!', 'NUNCA VI.') AS 'assistido?' FROM sakila.film;

SELECT title, rating, 
	CASE
		WHEN rating = 'G' THEN 'Livre para todos'
        WHEN rating = 'PG' THEN 'Não recomendado para menores de 10 anos'
        WHEN rating = 'PG-13' THEN 'Não recomendado para menores de 13 anos'
        WHEN rating = 'R' THEN 'Não recomendado para menores de 17 anos'
	ELSE 'Proibido para menores de idade'
END AS 'público-alvo'
FROM sakila.film;

SELECT IF (15 MOD 2 != 0, 'impar', 'par') AS 'PAR OU ÍMPAR';
SELECT 220 DIV 12;
SELECT 220 MOD 12;
SELECT ROUND(15 + (RAND() * 5));
SELECT ROUND(15.7515971, 5);
SELECT FLOOR(39.494);
SELECT CEIL(85.234);
SELECT DATEDIFF('2030-01-20', CURRENT_DATE());
SELECT TIMEDIFF('10:25:45', '11:00:00');
SELECT ROUND(AVG(length)) AS 'Média de duração',
	MIN(length) AS 'Duração Mínima',
	MAX(length) AS 'Duração Máxima',
	SUM(length) AS 'Tempo Total',
	COUNT(*) AS 'Filmes Registrados' FROM sakila.film;
    
SELECT active, COUNT(*) FROM sakila.customer GROUP BY active;
SELECT store_id, active, COUNT(*) FROM sakila.customer GROUP BY store_id, active;

SELECT AVG(rental_duration) AS avg_rental, rating
FROM sakila.film
GROUP BY rating
ORDER BY avg_rental DESC;

SELECT district, COUNT(*) AS total
FROM sakila.address
GROUP BY district
ORDER BY total DESC;

SELECT rating, AVG(length) AS media_duracao
FROM sakila.film
GROUP BY rating
HAVING media_duracao BETWEEN 115 AND 121.50
ORDER BY media_duracao DESC;

SELECT rating, SUM(replacement_cost) AS total
FROM sakila.film
GROUP by rating
HAVING total > 3950.50
ORDER BY total;
