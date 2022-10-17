SELECT * FROM PecasFornecedores.Pecas WHERE name LIKE 'gr%';
SELECT * FROM PecasFornecedores.Fornecimentos WHERE peca = 2 ORDER BY Fornecedor;
SELECT * FROM PecasFornecedores.Fornecimentos WHERE Fornecedor LIKE '%n%';
SELECT * FROM PecasFornecedores.Fornecedores WHERE name LIKE '%LTDA%' ORDER BY name DESC;
SELECT COUNT(*) FROM PecasFornecedores.Fornecedores WHERE code LIKE '%f%';
SELECT * FROM PecasFornecedores.Fornecimentos WHERE Preco BETWEEN 15 AND 40 ORDER BY Preco;
SELECT * FROM PecasFornecedores.Vendas WHERE DATE(order_date) BETWEEN '2018-04-15' AND '2019-07-30';
