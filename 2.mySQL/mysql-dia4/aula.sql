INSERT INTO sakila.staff (first_name, last_name, address_id, email, store_id, active, username) VALUES
('Gabriel','Raeder', 6, 'trybe1@teste.com', 1, 1, 'Raeder'),
('Rafael','Sousa', 2, 'trybe2@teste.com', 2, 1, 'Sousa');

INSERT INTO sakila.category (name)
SELECT first_name, last_name FROM sakila.customer LIMIT 5;

INSERT INTO sakila.category (name) VALUES
('valor1'), ('valor2'), ('valor3'), ('valor4'), ('valor5');

INSERT INTO sakila.store (manager_staff_id, address_id) VALUES (3, 3);

SET SQL_SAFE_UPDATES = 0;

UPDATE sakila.staff
SET first_name = (
CASE staff_id WHEN 7 THEN 'Joe' -- se actor_id = 1, alterar first_name para 'JOE'
              WHEN 8 THEN 'Davis' -- se actor_id = 2, alterar first_name para 'DAVIS'
              WHEN 9 THEN 'Carolina' -- se actor_id = 3, alterar first_name para 'CAROLINE'
	      ELSE first_name -- em todos os outros casos, mantém-se o first_name
END),
last_name = (
CASE staff_id WHEN 7 THEN 'Saldana' -- se actor_id = 1, alterar first_name para 'JOE'
              WHEN 8 THEN 'Anthony' -- se actor_id = 2, alterar first_name para 'DAVIS'
              WHEN 9 THEN 'Goncalves' -- se actor_id = 3, alterar first_name para 'CAROLINE'
	      ELSE first_name -- em todos os outros casos, mantém-se o first_name
END);

UPDATE sakila.film
SET rental_rate = (
	CASE
		WHEN length BETWEEN 1 AND 100 THEN 10
        WHEN length > 100 THEN 20
	END
);

DELETE FROM sakila.film_actor WHERE actor_id = 12;
DELETE FROM sakila.actor WHERE first_name = 'KARL';

DELETE FROM sakila.film_actor WHERE actor_id IN (8, 103, 181);
DELETE FROM sakila.actor WHERE first_name = 'MATTHEW';

DELETE FROM sakila.film_text WHERE description LIKE '%saga%';

TRUNCATE sakila.film_actor;
TRUNCATE sakila.film_category;
