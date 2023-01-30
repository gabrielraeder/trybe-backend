SELECT * FROM PiecesProviders.Provides WHERE provider = 'RBT';
SELECT * FROM PiecesProviders.Provides ORDER BY Price DESC LIMIT 5;
SELECT Provider, Price FROM PiecesProviders.Provides ORDER BY Price DESC LIMIT 4 OFFSET 3;
SELECT * FROM PiecesProviders.Provides WHERE provider = 'HAL' ORDER BY Price DESC;
SELECT COUNT(*) FROM PiecesProviders.Provides WHERE Piece = 1;