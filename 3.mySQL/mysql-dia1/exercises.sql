SELECT MAX(salary) AS 'Maior salário' FROM hr.employees;
SELECT MAX(salary) - MIN(salary) AS 'diferença salários' FROM hr.employees;
SELECT job_id, AVG(salary) AS media FROM hr.employees GROUP BY job_id ORDER BY media DESC;
SELECT SUM(salary) AS 'Total para Pagamentos' FROM hr.employees;
SELECT ROUND(MAX(salary), 2), ROUND(MIN(salary), 2), ROUND(SUM(salary), 2), ROUND(AVG(salary), 2) FROM hr.employees;
SELECT job_id, COUNT(*) FROM hr.employees GROUP BY job_id HAVING job_id = 'IT_PROG';
SELECT job_id, SUM(salary) FROM hr.employees GROUP BY job_id;
SELECT job_id, SUM(salary) FROM hr.employees GROUP BY job_id HAVING job_id = 'IT_PROG';
SELECT job_id, AVG(salary) FROM hr.employees GROUP BY job_id HAVING job_id <> 'IT_PROG' ORDER BY AVG(salary) DESC;
SELECT department_id, AVG(salary), COUNT(*) FROM hr.employees GROUP BY department_id HAVING COUNT(*) > 10;
UPDATE hr.employees SET phone_number = REPLACE(phone_number, '515', '777') WHERE phone_number LIKE '515%';
SELECT * FROM hr.employees WHERE LENGTH(first_name) >= 8;
SELECT employee_id, first_name, YEAR(hire_date) FROM hr.employees;
SELECT employee_id, first_name, MONTH(hire_date) FROM hr.employees;
SELECT LCASE(CONCAT(first_name, ' ', last_name)) AS nome_completo FROM hr.employees;
SELECT last_name, hire_date FROM hr.employees WHERE hire_date LIKE '1987-07-%';
SELECT first_name, last_name, DATEDIFF(CURRENT_DATE(), hire_date) AS tempo_de_empresa FROM hr.employees;
