CREATE DATABASE IF NOT EXISTS normalization;
USE normalization;

CREATE TABLE funcionario (
	funcionario_id INT PRIMARY KEY auto_increment,
    nome VARCHAR(50) NOT NULL,
    sobrenome VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    telefone VARCHAR(15) NOT NULL,
    data_cadastro DATETIME NOT NULL DEFAULT NOW()
);

INSERT INTO funcionario(funcionario_id, nome, sobrenome, email, telefone) VALUES
	(12, 'Joseph', 'Rodrigues', 'jo@gmail.com', '(35)998552-1445'),
    (13, 'André', 'Freeman', 'andre1990@gmail.com', '(47)99522-4996'),
    (14, 'Cintia', 'Duval', 'cindy@outlook.com', '(33)99855-4669'),
    (15, 'Fernanda', 'Mendes', 'fernandamendes@yahoo.com', '(33)99200-1556');

CREATE TABLE setor (
	setor_id INT PRIMARY KEY auto_increment,
    nome VARCHAR(50) NOT NULL
);

INSERT INTO setor(setor_id, nome) VALUES
	(1, 'Administração'),
    (2, 'Vendas'),
    (3, 'Operacional'),
    (4, 'Estrategico'),
    (5,'Marketing');

CREATE TABLE setor_func (
	func_id INT NOT NULL,
    setor_id INT NOT NULL,
    FOREIGN KEY (func_id) REFERENCES funcionario(funcionario_id),
    FOREIGN KEY (setor_id) REFERENCES setor(setor_id)
);

INSERT INTO setor_func(func_id, setor_id) VALUES
	(12, 1), (12, 2), (13, 3), (14, 4), (14, 2), (15, 5);
