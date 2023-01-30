USE sakila;
DELIMITER $$
CREATE FUNCTION numberOfPaymentsByCustomerID(id INT)
RETURNS INT READS SQL DATA
BEGIN
	DECLARE payments INT;
    SELECT COUNT(*) FROM payment WHERE customer_id = id INTO payments;
    RETURN payments;
END $$
DELIMITER ;

USE sakila;
DELIMITER $$
CREATE FUNCTION titleByInventoryID(id INT)
RETURNS VARCHAR(300) READS SQL DATA
BEGIN
	DECLARE filmTitle VARCHAR(300);
    SELECT f.title FROM film AS f
    INNER JOIN inventory AS i ON f.film_id = i.film_id
    WHERE inventory_id = id INTO filmTitle;
    RETURN filmTitle;
END $$
DELIMITER ;

USE sakila;
DELIMITER $$
CREATE FUNCTION numberOfMoviesByCategory(categoryName VARCHAR(50))
RETURNS INT READS SQL DATA
BEGIN
	DECLARE total INT;
    SELECT COUNT(*) FROM film AS f
		INNER JOIN film_category AS fc ON f.film_id = fc.film_id
		INNER JOIN category AS c ON fc.category_id = c.category_id
		WHERE name = categoryName INTO total;
    RETURN total;
END $$
DELIMITER ;
