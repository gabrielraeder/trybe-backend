SELECT * FROM hotel.Books AS B
WHERE NOT EXISTS (
	SELECT * FROM hotel.Books_Lent
    WHERE B.Id = Books_Lent.book_id
);

SELECT * FROM hotel.Books AS B
WHERE EXISTS (
	SELECT * FROM hotel.Books_Lent
    WHERE B.Id = Books_Lent.book_id AND rental_return_date IS NULL
);

SELECT * FROM hotel.Customers AS C
WHERE NOT EXISTS (
	SELECT * FROM hotel.CarSales
    WHERE C.CustomerId = CarSales.CustomerID
);

SELECT CU.Name, C.Name FROM hotel.Customers AS CU
INNER JOIN hotel.CarSales AS CS ON CU.CustomerId = CS.CustomerID
INNER JOIN hotel.Cars AS C ON CS.CarID = C.Id
WHERE EXISTS (
	SELECT * FROM hotel.CarSales
    WHERE CU.CustomerId = CS.CustomerID
);
