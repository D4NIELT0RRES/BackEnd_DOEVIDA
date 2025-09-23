-- Cria o Banco de Dados
CREATE DATABASE db_doevida_tcc;

-- Usa o BD
USE db_doevida_tcc;

-- Ver todas as Tabelas
SHOW TABLES;

-- Ver todas as Triggers
SHOW TRIGGERS;

-- =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

-- Tabela de Banco de Sangue
CREATE TABLE tbl_banco_sangue (
    id INT AUTO_INCREMENT PRIMARY KEY,
    tipo_sanguineo VARCHAR(5) NOT NULL,
    quantidade VARCHAR(5) NOT NULL
);

-- Trigger para padronização de dados
DELIMITER //
CREATE TRIGGER before_bancosangue_insert
BEFORE INSERT ON tbl_banco_sangue
FOR EACH ROW
BEGIN
    -- Converte o título para maiúsculas
    SET NEW.tipo_sanguineo = UPPER(NEW.tipo_sanguineo);
END//
DELIMITER ;

-- =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

-- Tabela de sexo
CREATE TABLE tbl_sexo (
    id INT AUTO_INCREMENT PRIMARY KEY,
    sexo VARCHAR(15) NOT NULL
);

-- Trigger para padronização de dados
DELIMITER //
CREATE TRIGGER before_sexo_insert
BEFORE INSERT ON tbl_sexo
FOR EACH ROW
BEGIN
    -- Converte o sexo para maiúsculas
    SET NEW.sexo = UPPER(NEW.sexo);
END//
DELIMITER ;


-- =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

-- Tabela de doacao
CREATE TABLE tbl_doacao (
    id INT AUTO_INCREMENT PRIMARY KEY,
    data DATE NOT NULL,
    observacao TEXT,
    foto VARCHAR(255) NOT NULL
);

-- Trigger para Data de Doação
DELIMITER //
CREATE TRIGGER before_doacao_data_format
BEFORE INSERT ON tbl_doacao
FOR EACH ROW
BEGIN
    -- Converte formatos alternativos para YYYY-MM-DD
    IF NEW.data REGEXP '^[0-9]{2}/[0-9]{2}/[0-9]{4}$' THEN
        SET NEW.data = STR_TO_DATE(NEW.data, '%d/%m/%Y');
    ELSEIF NEW.data REGEXP '^[0-9]{2}-[0-9]{2}-[0-9]{4}$' THEN
        SET NEW.data = STR_TO_DATE(NEW.data, '%d-%m-%Y');
    END IF;
    -- Validação: data de doação não pode ser futura
    IF NEW.data > CURDATE() THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Data de doação não pode ser futura';
    END IF;
    -- Validação: data de doação não pode ser anterior a 2000
    IF NEW.data < '2000-01-01' THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Data de doação muito antiga';
    END IF;
END //
DELIMITER ;

-- =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=


-- Tabela de telefone
CREATE TABLE tbl_telefone (
    id INT AUTO_INCREMENT PRIMARY KEY,
    tipo VARCHAR(30) NOT NULL,
    numero VARCHAR(15) NOT NULL
);

DELIMITER //
CREATE TRIGGER before_telefone_format
BEFORE INSERT ON tbl_telefone
FOR EACH ROW
BEGIN
    -- Remove caracteres não numéricos
    SET NEW.numero = REPLACE(REPLACE(REPLACE(REPLACE(NEW.numero, '(', ''), ')', ''), '-', ''), ' ', '');
    -- Formata para o padrão (XX) XXXXX-XXXX
    IF LENGTH(NEW.numero) = 11 THEN
        SET NEW.numero = CONCAT(
            '(', SUBSTRING(NEW.numero, 1, 2), ') ',
            SUBSTRING(NEW.numero, 3, 5), '-',
            SUBSTRING(NEW.numero, 8, 4)
        );
    END IF;
END //
DELIMITER ;

-- =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

-- Tabela de certificado
CREATE TABLE tbl_certificado (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(50) NOT NULL,
    organizacao VARCHAR(60) NOT NULL,
    data_emissao DATE NOT NULL
);

-- Trigger para Data de Emissão de Certificado
DELIMITER //
CREATE TRIGGER before_certificado_data_format
BEFORE INSERT ON tbl_certificado
FOR EACH ROW
BEGIN
    -- Converte formatos alternativos para YYYY-MM-DD
    IF NEW.data_emissao REGEXP '^[0-9]{2}/[0-9]{2}/[0-9]{4}$' THEN
        SET NEW.data_emissao = STR_TO_DATE(NEW.data_emissao, '%d/%m/%Y');
    ELSEIF NEW.data_emissao REGEXP '^[0-9]{2}-[0-9]{2}-[0-9]{4}$' THEN
        SET NEW.data_emissao = STR_TO_DATE(NEW.data_emissao, '%d-%m-%Y');
    END IF;
    -- Validação: data de emissão não pode ser futura
    IF NEW.data_emissao > CURDATE() THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Data de emissão não pode ser futura';
    END IF;
END //
DELIMITER ;

-- =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

-- Tabela de usuários
CREATE TABLE tbl_usuario (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(70) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    senha VARCHAR(10) NOT NULL,
    cpf VARCHAR(15) UNIQUE NOT NULL,
    cep VARCHAR(10) NOT NULL,
    tipo_sanguineo VARCHAR(5) NOT NULL,
    data_nascimento DATE NOT NULL,
    foto_perfil VARCHAR(255),
    data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    data_atualizacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    id_banco_sangue INT,
    CONSTRAINT FK_usuario_banco_sangue
    FOREIGN KEY (id_banco_sangue)
    REFERENCES tbl_banco_sangue(id),
    id_sexo INT,
    CONSTRAINT FK_usuario_sexo
    FOREIGN KEY (id_sexo)
    REFERENCES tbl_sexo(id)
);

-- Trigger para padronização de dados
DELIMITER //
CREATE TRIGGER before_usuario_insert
BEFORE INSERT ON tbl_usuario
FOR EACH ROW
BEGIN
    -- Converte e-mail para minúsculas
    SET NEW.email = LOWER(NEW.email);
END //
DELIMITER ;

-- Trigger para Formatação Automática de CPF
DELIMITER //
CREATE TRIGGER before_usuario_cpf_format
BEFORE INSERT ON tbl_usuario
FOR EACH ROW
BEGIN
    -- Remove caracteres não numéricos
    SET NEW.cpf = REPLACE(REPLACE(REPLACE(NEW.cpf, '.', ''), '-', ''), ' ', '');
    -- Formata para o padrão XXX.XXX.XXX-XX
    IF LENGTH(NEW.cpf) = 11 THEN
        SET NEW.cpf = CONCAT(
            SUBSTRING(NEW.cpf, 1, 3), '.',
            SUBSTRING(NEW.cpf, 4, 3), '.',
            SUBSTRING(NEW.cpf, 7, 3), '-',
            SUBSTRING(NEW.cpf, 10, 2)
        );
    END IF;
END //
DELIMITER ;

-- Trigger para Formatação Automática de CEP
DELIMITER //
CREATE TRIGGER before_usuario_cep_format
BEFORE INSERT ON tbl_usuario
FOR EACH ROW
BEGIN
    -- Remove caracteres não numéricos
    SET NEW.cep = REPLACE(REPLACE(NEW.cep, '-', ''), ' ', '');
    -- Formata para o padrão XXXXX-XXX
    IF LENGTH(NEW.cep) = 8 THEN
        SET NEW.cep = CONCAT(
            SUBSTRING(NEW.cep, 1, 5), '-',
            SUBSTRING(NEW.cep, 6, 3)
        );
    END IF;
END //
DELIMITER ;

-- Trigger para Padronização de Data de Nascimento
DELIMITER //
CREATE TRIGGER before_usuario_data_format
BEFORE INSERT ON tbl_usuario
FOR EACH ROW
BEGIN
    -- Garante que a data esteja no formato YYYY-MM-DD
    -- Converte formatos como DD/MM/YYYY para YYYY-MM-DD
    IF NEW.data_nascimento REGEXP '^[0-9]{2}/[0-9]{2}/[0-9]{4}$' THEN
        SET NEW.data_nascimento = STR_TO_DATE(NEW.data_nascimento, '%d/%m/%Y');
    ELSEIF NEW.data_nascimento REGEXP '^[0-9]{2}-[0-9]{2}-[0-9]{4}$' THEN
        SET NEW.data_nascimento = STR_TO_DATE(NEW.data_nascimento, '%d-%m-%Y');
    END IF;
    -- Validação adicional: não permite datas futuras
    IF NEW.data_nascimento > CURDATE() THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Data de nascimento não pode ser futura';
    END IF;
END //
DELIMITER ;

-- =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

-- Tabela de agendamento
CREATE TABLE tbl_agendamento (
    id INT AUTO_INCREMENT PRIMARY KEY,
    status VARCHAR(50) NOT NULL,
    data DATE NOT NULL,
    hora TIME NOT NULL,
    id_usuario INT,
    CONSTRAINT FK_agendamento_usuario
        FOREIGN KEY (id_usuario) REFERENCES tbl_usuario(id),
    id_doacao INT,
    CONSTRAINT FK_agendamento_doacao
        FOREIGN KEY (id_doacao) REFERENCES tbl_doacao(id),
    id_hospital INT,
    CONSTRAINT FK_agendamento_hospital
        FOREIGN KEY (id_hospital) REFERENCES tbl_hospital(id)
);

-- Trigger para Padronização de Data de Agendamento
DELIMITER //
CREATE TRIGGER before_agendamento_data_format
BEFORE INSERT ON tbl_agendamento
FOR EACH ROW
BEGIN
    -- Converte formatos alternativos para YYYY-MM-DD
    IF NEW.data REGEXP '^[0-9]{2}/[0-9]{2}/[0-9]{4}$' THEN
        SET NEW.data = STR_TO_DATE(NEW.data, '%d/%m/%Y');
    ELSEIF NEW.data REGEXP '^[0-9]{2}-[0-9]{2}-[0-9]{4}$' THEN
        SET NEW.data = STR_TO_DATE(NEW.data, '%d-%m-%Y');
    END IF;
    -- Validação: não permite agendamentos no passado
    IF NEW.data < CURDATE() THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Não é possível agendar para datas passadas';
    END IF;
END //
DELIMITER ;

-- Trigger para Padronização de Hora de Agendamento
DELIMITER //
CREATE TRIGGER before_agendamento_hora_format
BEFORE INSERT ON tbl_agendamento
FOR EACH ROW
BEGIN
    -- Converte formatos de hora variados para HH:MM:SS
    IF NEW.hora REGEXP '^[0-9]{2}:[0-9]{2}$' THEN
        SET NEW.hora = TIME(STR_TO_DATE(NEW.hora, '%H:%i'));
    ELSEIF NEW.hora REGEXP '^[0-9]{2}[0-9]{2}$' THEN
        SET NEW.hora = TIME(STR_TO_DATE(NEW.hora, '%H%i'));
    ELSEIF NEW.hora REGEXP '^[0-9]{1,2}[hH]' THEN
        SET NEW.hora = TIME(STR_TO_DATE(REPLACE(REPLACE(NEW.hora, 'h', ':'), 'H', ':'), '%H:%i'));
    END IF;
    -- Validação: horário entre 7h e 19h
    IF TIME(NEW.hora) < '07:00:00' OR TIME(NEW.hora) > '19:00:00' THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Horário de agendamento deve ser entre 07:00 e 19:00';
    END IF;
END //
DELIMITER ;

-- =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

-- Tabela de hospitais
CREATE TABLE tbl_hospital (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(70) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    senha VARCHAR(20) NOT NULL,
    cnpj VARCHAR(20) UNIQUE NOT NULL,
    crm VARCHAR(255) NOT NULL,
    cep VARCHAR(10) NOT NULL,
    telefone VARCHAR(15) NOT NULL,
    capacidade_maxima INT NOT NULL,
    convenios VARCHAR(255) NOT NULL,
    horario_abertura TIME NOT NULL,
    horario_fechamento TIME NOT NULL,
    foto VARCHAR(255) NOT NULL,
    complemento VARCHAR(255)
);

-- Trigger para padronização de dados
DELIMITER //
CREATE TRIGGER before_hospital_email_format
BEFORE INSERT ON tbl_hospital
FOR EACH ROW
BEGIN
    -- Converte email para minúsculas
    SET NEW.email = LOWER(NEW.email);
END //
DELIMITER ;

-- Trigger para Formatação do CNPJ
DELIMITER //
CREATE TRIGGER before_hospital_cnpj_format
BEFORE INSERT ON tbl_hospital
FOR EACH ROW
BEGIN
    -- Remove caracteres não numéricos
    SET NEW.cnpj = REPLACE(REPLACE(REPLACE(REPLACE(NEW.cnpj, '.', ''), '/', ''), '-', ''), ' ', '');
    -- Formata para o padrão XX.XXX.XXX/XXXX-XX
    IF LENGTH(NEW.cnpj) = 14 THEN
        SET NEW.cnpj = CONCAT(
            SUBSTRING(NEW.cnpj, 1, 2), '.',
            SUBSTRING(NEW.cnpj, 3, 3), '.',
            SUBSTRING(NEW.cnpj, 6, 3), '/',
            SUBSTRING(NEW.cnpj, 9, 4), '-',
            SUBSTRING(NEW.cnpj, 13, 2)
        );
    END IF;
END //
DELIMITER ;

-- Trigger para Formatação do CEP
DELIMITER //
CREATE TRIGGER before_hospital_cep_format
BEFORE INSERT ON tbl_hospital
FOR EACH ROW
BEGIN
    -- Remove caracteres não numéricos
    SET NEW.cep = REPLACE(REPLACE(NEW.cep, '-', ''), ' ', '');
    -- Formata para o padrão XXXXX-XXX
    IF LENGTH(NEW.cep) = 8 THEN
        SET NEW.cep = CONCAT(
            SUBSTRING(NEW.cep, 1, 5), '-',
            SUBSTRING(NEW.cep, 6, 3)
        );
    END IF;
END //
DELIMITER ;

-- Trigger para Formatação do Telefone
DELIMITER //
CREATE TRIGGER before_hospital_telefone_format
BEFORE INSERT ON tbl_hospital
FOR EACH ROW
BEGIN
    -- Remove caracteres não numéricos da coluna "telefone"
    SET NEW.telefone = REPLACE(REPLACE(REPLACE(REPLACE(NEW.telefone, '(', ''), ')', ''), '-', ''), ' ', '');
    -- Formata para o padrão (XX) XXXXX-XXXX
    IF LENGTH(NEW.telefone) = 11 THEN
        SET NEW.telefone = CONCAT(
            '(', SUBSTRING(NEW.telefone, 1, 2), ') ',
            SUBSTRING(NEW.telefone, 3, 5), '-',
            SUBSTRING(NEW.telefone, 8, 4)
        );
    END IF;
END //
DELIMITER ;

-- =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=