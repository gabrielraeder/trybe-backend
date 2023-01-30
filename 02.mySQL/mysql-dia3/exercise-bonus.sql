SELECT * FROM Scientists.Scientists WHERE Name LIKE '%e%';
SELECT * FROM Scientists.Projects WHERE Code LIKE 'a%' ORDER BY Name;
SELECT * FROM Scientists.Projects WHERE Code LIKE '%3%' ORDER BY Name;
SELECT * FROM Scientists.AssignedTo WHERE Project IN ('AeH3', 'Ast3', 'Che1');
SELECT * FROM Scientists.Projects WHERE Hours > 500;
SELECT * FROM Scientists.Projects WHERE Hours BETWEEN 250 AND 800;
SELECT * FROM Scientists.Projects WHERE Name NOT LIKE 'a%';
SELECT * FROM Scientists.Projects WHERE Code LIKE '%h%';
