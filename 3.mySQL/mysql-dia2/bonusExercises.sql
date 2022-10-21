SELECT first_name, last_name FROM sakila.actor
UNION ALL
SELECT first_name, last_name FROM sakila.staff;

(SELECT first_name, last_name FROM sakila.customer WHERE first_name LIKE '%tracy%' OR last_name LIKE '%tracy%')
UNION
(SELECT first_name, last_name FROM sakila.actor WHERE first_name LIKE '%je%' OR last_name LIKE '%je%');


(SELECT first_name, last_name FROM sakila.actor ORDER BY actor_id DESC LIMIT 5)
UNION
(SELECT first_name, last_name FROM sakila.staff LIMIT 1)
UNION
(SELECT first_name, last_name FROM sakila.customer LIMIT 5 OFFSET 14)
ORDER BY first_name, last_name;


(SELECT first_name, last_name FROM sakila.actor)
UNION ALL
(SELECT first_name, last_name FROM sakila.customer)
ORDER BY first_name, last_name LIMIT 15 OFFSET 45;
