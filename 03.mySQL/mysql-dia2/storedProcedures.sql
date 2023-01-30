USE sakila;
DELIMITER $$
CREATE PROCEDURE ShowMostPopularActors()
BEGIN
	SELECT actor_id, COUNT(*) FROM sakila.film_actor
    GROUP BY actor_id
    ORDER BY COUNT(*) DESC
    LIMIT 10;
END $$
DELIMITER ;

USE sakila;
DELIMITER $$
CREATE PROCEDURE showByCategory(IN categoryName VARCHAR(50))
BEGIN
	SELECT f.title, fc.category_id
    FROM film AS f
    INNER JOIN film_category AS fc ON f.film_id = fc.film_id
    INNER JOIN category AS c ON fc.category_id - c.category_id
    WHERE name = categoryName;
END $$
DELIMITER ;

USE sakila;
DELIMITER $$
CREATE PROCEDURE isCustomerActive(INOUT clientEmail VARCHAR(50))
BEGIN
	SELECT IF(active = 1, 'Cliente Ativo', 'Cliente Inavito') AS 'Active?' INTO clientEmail FROM customer
    WHERE email = clientEmail;
END $$
DELIMITER ;
