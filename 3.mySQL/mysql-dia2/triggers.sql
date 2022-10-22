USE betrybe_automoveis;
DELIMITER $$
CREATE TRIGGER trigger_insert_data
    BEFORE INSERT ON carros
    FOR EACH ROW
BEGIN
    SET NEW.data_atualizacao = NOW(),
        NEW.acao = 'INSERT',
		NEW.disponivel_em_estoque = 1;
	INSERT INTO log_operacoes(tipo_operacao, data_ocorrido)
    VALUES ('INSERT', NOW());
END $$
DELIMITER ;

USE betrybe_automoveis;
DELIMITER $$
CREATE TRIGGER trigger_update_data
    BEFORE UPDATE ON carros
    FOR EACH ROW
BEGIN
    SET NEW.data_atualizacao = NOW(),
        NEW.acao = 'ATUALIZAÇÃO';
	INSERT INTO log_operacoes(tipo_operacao, data_ocorrido)
    VALUES ('ATUALIZAÇÃO', NOW());
END $$
DELIMITER ;

USE betrybe_automoveis;
DELIMITER $$
CREATE TRIGGER trigger_delete
    AFTER DELETE ON carros
    FOR EACH ROW
BEGIN
	INSERT INTO log_operacoes(tipo_operacao, data_ocorrido)
    VALUES ('EXCLUSÃO', NOW());
END $$
DELIMITER ;