SELECT M.title FROM pixar.movies AS M
INNER JOIN pixar.box_office AS B
ON M.id = B.movie_id
WHERE M.length_minutes > 110 AND B.domestic_sales + B.international_sales > 500000000;

SELECT * FROM pixar.movies
WHERE id IN (
	SELECT movie_id FROM pixar.box_office
    WHERE domestic_sales + international_sales > 500000000
) AND length_minutes > 110;

USE bee_movies;
DELIMITER $$
CREATE TRIGGER trigger_insert_movie
    BEFORE INSERT ON movies
    FOR EACH ROW
BEGIN
	SET NEW.release_year = YEAR(NOW());
END $$
DELIMITER ;

USE bee_movies;
DELIMITER $$
CREATE TRIGGER trigger_insert_logs
    AFTER INSERT ON movies
    FOR EACH ROW
BEGIN
	INSERT INTO movies_logs(movie_id, executed_action, log_date)
    VALUES (NEW.movie_id, 'INSERT', NOW());
END $$
DELIMITER ;

USE bee_movies;
DELIMITER $$
CREATE TRIGGER trigger_update_data
    BEFORE UPDATE ON movies
    FOR EACH ROW
BEGIN
    SET NEW.ticket_price_estimation = (
    CASE 
		WHEN OLD.ticket_price < NEW.ticket_price THEN 'Increasing'
        WHEN OLD.ticket_price > NEW.ticket_price THEN 'Decreasing'
        ELSE 'SAME'
    END);
    INSERT INTO movies_logs(movie_id, executed_action, log_date)
    VALUES (OLD.movie_id, 'UPDATE', NOW());
END $$
DELIMITER ;

USE bee_movies;
DELIMITER $$
CREATE TRIGGER trigger_delete
    AFTER DELETE ON movies
    FOR EACH ROW
BEGIN
	INSERT INTO movies_logs(movie_id, executed_action, log_date)
    VALUES (OLD.movie_id, 'DELETE', NOW());
END $$
DELIMITER ;

SELECT * FROM pixar.theater AS T
WHERE EXISTS (
	SELECT * FROM pixar.movies
    WHERE theater_id = T.id
);

SELECT * FROM pixar.theater AS T
WHERE NOT EXISTS (
	SELECT * FROM pixar.movies
    WHERE theater_id = T.id
);
