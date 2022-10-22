SELECT
    CONCAT(Employee.first_name, " ", Employee.last_name) AS "Nome da Pessoa Colaboradora",
    CONCAT(Manager.first_name, " ", Manager.last_name) AS "Nome Gerente"
FROM
    hr.employees AS Employee
INNER JOIN
    hr.employees AS Manager ON Employee.manager_id = Manager.employee_id
WHERE
  Employee.department_id <> Manager.department_id;


SELECT
    CONCAT(Manager.first_name, " ", Manager.last_name) AS "Nome Gerente",
    COUNT(*)
FROM
    hr.employees AS Employee
INNER JOIN
    hr.employees AS Manager ON Employee.manager_id = Manager.employee_id
GROUP BY Manager.manager_id;