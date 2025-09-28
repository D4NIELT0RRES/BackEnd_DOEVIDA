-- Cria o Banco de Dados
CREATE DATABASE db_doevida_tcc;

-- Usa o BD
USE db_doevida_tcc;


-- =========================
-- TABELA: Banco de Sangue
-- =========================
CREATE TABLE tbl_banco_sangue (
    id INT AUTO_INCREMENT PRIMARY KEY,
    tipo_sanguineo VARCHAR(5) NOT NULL,
    quantidade VARCHAR(5) NOT NULL
);

DELIMITER //
CREATE TRIGGER before_bancosangue_insert
BEFORE INSERT ON tbl_banco_sangue
FOR EACH ROW
BEGIN
    SET NEW.tipo_sanguineo = UPPER(NEW.tipo_sanguineo);
END//
DELIMITER ;

-- =========================
-- TABELA: Sexo
-- =========================
CREATE TABLE tbl_sexo (
    id INT AUTO_INCREMENT PRIMARY KEY,
    sexo VARCHAR(15) NOT NULL
);

DELIMITER //
CREATE TRIGGER before_sexo_insert
BEFORE INSERT ON tbl_sexo
FOR EACH ROW
BEGIN
    SET NEW.sexo = UPPER(NEW.sexo);
END//
DELIMITER ;

-- =========================
-- TABELA: Doação
-- =========================
CREATE TABLE tbl_doacao (
    id INT AUTO_INCREMENT PRIMARY KEY,
    data DATE NOT NULL,
    observacao TEXT NULL,
    foto VARCHAR(255) NULL
);

DELIMITER //
CREATE TRIGGER before_doacao_data_format
BEFORE INSERT ON tbl_doacao
FOR EACH ROW
BEGIN
    IF NEW.data REGEXP '^[0-9]{2}/[0-9]{2}/[0-9]{4}$' THEN
        SET NEW.data = STR_TO_DATE(NEW.data, '%d/%m/%Y');
    ELSEIF NEW.data REGEXP '^[0-9]{2}-[0-9]{2}-[0-9]{4}$' THEN
        SET NEW.data = STR_TO_DATE(NEW.data, '%d-%m-%Y');
    END IF;

    IF NEW.data > CURDATE() THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Data de doação não pode ser futura';
    END IF;

    IF NEW.data < '2000-01-01' THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Data de doação muito antiga';
    END IF;
END //
DELIMITER ;

-- =========================
-- TABELA: Telefone
-- =========================
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
    SET NEW.numero = REPLACE(REPLACE(REPLACE(REPLACE(NEW.numero, '(', ''), ')', ''), '-', ''), ' ', '');
    IF LENGTH(NEW.numero) = 11 THEN
        SET NEW.numero = CONCAT('(', SUBSTRING(NEW.numero, 1, 2), ') ',
                                 SUBSTRING(NEW.numero, 3, 5), '-',
                                 SUBSTRING(NEW.numero, 8, 4));
    END IF;
END //
DELIMITER ;

-- =========================
-- TABELA: Certificado
-- =========================
CREATE TABLE tbl_certificado (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(50) NOT NULL,
    organizacao VARCHAR(60) NOT NULL,
    data_emissao DATE NOT NULL
);

DELIMITER //
CREATE TRIGGER before_certificado_data_format
BEFORE INSERT ON tbl_certificado
FOR EACH ROW
BEGIN
    IF NEW.data_emissao REGEXP '^[0-9]{2}/[0-9]{2}/[0-9]{4}$' THEN
        SET NEW.data_emissao = STR_TO_DATE(NEW.data_emissao, '%d/%m/%Y');
    ELSEIF NEW.data_emissao REGEXP '^[0-9]{2}-[0-9]{2}-[0-9]{4}$' THEN
        SET NEW.data_emissao = STR_TO_DATE(NEW.data_emissao, '%d-%m-%Y');
    END IF;

    IF NEW.data_emissao > CURDATE() THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Data de emissão não pode ser futura';
    END IF;
END //
DELIMITER ;

-- =========================
-- TABELA: Usuário
-- =========================
CREATE TABLE tbl_usuario (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(70) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    senha VARCHAR(255) NOT NULL,
    cpf VARCHAR(15) UNIQUE NOT NULL,
    cep VARCHAR(10) NOT NULL,
    logradouro VARCHAR(150),
    bairro VARCHAR(100),
    localidade VARCHAR(100),
    uf VARCHAR(2),
    numero VARCHAR(20),
    tipo_sanguineo VARCHAR(5) NOT NULL,
    data_nascimento DATE NOT NULL,
    foto_perfil VARCHAR(255),
    data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    data_atualizacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    id_banco_sangue INT,
    id_sexo INT,
    FOREIGN KEY (id_banco_sangue) REFERENCES tbl_banco_sangue(id),
    FOREIGN KEY (id_sexo) REFERENCES tbl_sexo(id)
);

DELIMITER //
CREATE TRIGGER before_usuario_insert
BEFORE INSERT ON tbl_usuario
FOR EACH ROW
BEGIN
    SET NEW.email = LOWER(NEW.email);
END //
DELIMITER ;

DELIMITER //
CREATE TRIGGER before_usuario_cpf_format
BEFORE INSERT ON tbl_usuario
FOR EACH ROW
BEGIN
    SET NEW.cpf = REPLACE(REPLACE(REPLACE(NEW.cpf, '.', ''), '-', ''), ' ', '');
    IF LENGTH(NEW.cpf) = 11 THEN
        SET NEW.cpf = CONCAT(SUBSTRING(NEW.cpf, 1, 3), '.',
                             SUBSTRING(NEW.cpf, 4, 3), '.',
                             SUBSTRING(NEW.cpf, 7, 3), '-',
                             SUBSTRING(NEW.cpf, 10, 2));
    END IF;
END //
DELIMITER ;

DELIMITER //
CREATE TRIGGER before_usuario_cep_format
BEFORE INSERT ON tbl_usuario
FOR EACH ROW
BEGIN
    SET NEW.cep = REPLACE(REPLACE(NEW.cep, '-', ''), ' ', '');
    IF LENGTH(NEW.cep) = 8 THEN
        SET NEW.cep = CONCAT(SUBSTRING(NEW.cep, 1, 5), '-', SUBSTRING(NEW.cep, 6, 3));
    END IF;
END //
DELIMITER ;

DELIMITER //
CREATE TRIGGER before_usuario_data_format
BEFORE INSERT ON tbl_usuario
FOR EACH ROW
BEGIN
    IF NEW.data_nascimento REGEXP '^[0-9]{2}/[0-9]{2}/[0-9]{4}$' THEN
        SET NEW.data_nascimento = STR_TO_DATE(NEW.data_nascimento, '%d/%m/%Y');
    ELSEIF NEW.data_nascimento REGEXP '^[0-9]{2}-[0-9]{2}-[0-9]{4}$' THEN
        SET NEW.data_nascimento = STR_TO_DATE(NEW.data_nascimento, '%d-%m-%Y');
    END IF;

    IF NEW.data_nascimento > CURDATE() THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Data de nascimento não pode ser futura';
    END IF;
END //
DELIMITER ;

-- =========================
-- TABELA: Hospitais
-- =========================
CREATE TABLE tbl_hospital (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(70) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    senha VARCHAR(20) NOT NULL,
    cnpj VARCHAR(20) UNIQUE NOT NULL,
    crm VARCHAR(255) NOT NULL,
    cep VARCHAR(10) NOT NULL,
    telefone VARCHAR(15) NOT NULL,
    capacidade_maxima INT NOT NULL DEFAULT 10,
    convenios VARCHAR(255) NOT NULL,
    horario_abertura TIME NOT NULL DEFAULT '08:00:00',
    horario_fechamento TIME NOT NULL DEFAULT '18:00:00',
    foto VARCHAR(255) NOT NULL,
    complemento VARCHAR(255)
);

DELIMITER //
CREATE TRIGGER before_hospital_email_format
BEFORE INSERT ON tbl_hospital
FOR EACH ROW
BEGIN
    SET NEW.email = LOWER(NEW.email);
END //
DELIMITER ;

DELIMITER //
CREATE TRIGGER before_hospital_cnpj_format
BEFORE INSERT ON tbl_hospital
FOR EACH ROW
BEGIN
    SET NEW.cnpj = REPLACE(REPLACE(REPLACE(REPLACE(NEW.cnpj, '.', ''), '/', ''), '-', ''), ' ', '');
    IF LENGTH(NEW.cnpj) = 14 THEN
        SET NEW.cnpj = CONCAT(SUBSTRING(NEW.cnpj, 1, 2), '.',
                              SUBSTRING(NEW.cnpj, 3, 3), '.',
                              SUBSTRING(NEW.cnpj, 6, 3), '/',
                              SUBSTRING(NEW.cnpj, 9, 4), '-',
                              SUBSTRING(NEW.cnpj, 13, 2));
    END IF;
END //
DELIMITER ;

DELIMITER //
CREATE TRIGGER before_hospital_cep_format
BEFORE INSERT ON tbl_hospital
FOR EACH ROW
BEGIN
    SET NEW.cep = REPLACE(REPLACE(NEW.cep, '-', ''), ' ', '');
    IF LENGTH(NEW.cep) = 8 THEN
        SET NEW.cep = CONCAT(SUBSTRING(NEW.cep, 1, 5), '-', SUBSTRING(NEW.cep, 6, 3));
    END IF;
END //
DELIMITER ;

DELIMITER //
CREATE TRIGGER before_hospital_telefone_format
BEFORE INSERT ON tbl_hospital
FOR EACH ROW
BEGIN
    SET NEW.telefone = REPLACE(REPLACE(REPLACE(REPLACE(NEW.telefone, '(', ''), ')', ''), '-', ''), ' ', '');
    IF LENGTH(NEW.telefone) = 11 THEN
        SET NEW.telefone = CONCAT('(', SUBSTRING(NEW.telefone, 1, 2), ') ',
                                  SUBSTRING(NEW.telefone, 3, 5), '-',
                                  SUBSTRING(NEW.telefone, 8, 4));
    END IF;
END //
DELIMITER ;

-- =========================
-- TABELA: Agendamento
-- =========================
CREATE TABLE tbl_agendamento (
    id INT AUTO_INCREMENT PRIMARY KEY,
    status ENUM('Agendado', 'Em espera', 'Concluído') NOT NULL DEFAULT 'Em espera',
    data DATE NOT NULL,
    hora TIME NOT NULL,
    id_usuario INT,
    id_doacao INT,
    id_hospital INT,
    FOREIGN KEY (id_usuario) REFERENCES tbl_usuario(id),
    FOREIGN KEY (id_doacao) REFERENCES tbl_doacao(id),
    FOREIGN KEY (id_hospital) REFERENCES tbl_hospital(id)
);

DELIMITER //
CREATE TRIGGER before_agendamento_data_format
BEFORE INSERT ON tbl_agendamento
FOR EACH ROW
BEGIN
    IF NEW.data REGEXP '^[0-9]{2}/[0-9]{2}/[0-9]{4}$' THEN
        SET NEW.data = STR_TO_DATE(NEW.data, '%d/%m/%Y');
    ELSEIF NEW.data REGEXP '^[0-9]{2}-[0-9]{2}-[0-9]{4}$' THEN
        SET NEW.data = STR_TO_DATE(NEW.data, '%d-%m-%Y');
    END IF;

    IF NEW.data < CURDATE() THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Não é possível agendar para datas passadas';
    END IF;
END //
DELIMITER ;

DELIMITER //
CREATE TRIGGER before_agendamento_hora_format
BEFORE INSERT ON tbl_agendamento
FOR EACH ROW
BEGIN
    IF NEW.hora REGEXP '^[0-9]{2}:[0-9]{2}$' THEN
        SET NEW.hora = TIME(STR_TO_DATE(NEW.hora, '%H:%i'));
    ELSEIF NEW.hora REGEXP '^[0-9]{2}[0-9]{2}$' THEN
        SET NEW.hora = TIME(STR_TO_DATE(NEW.hora, '%H%i'));
    ELSEIF NEW.hora REGEXP '^[0-9]{1,2}[hH]' THEN
        SET NEW.hora = TIME(STR_TO_DATE(REPLACE(REPLACE(NEW.hora, 'h', ':'), 'H', ':'), '%H:%i'));
    END IF;

    IF TIME(NEW.hora) < '07:00:00' OR TIME(NEW.hora) > '19:00:00' THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Horário de agendamento deve ser entre 07:00 e 19:00';
    END IF;
END //
DELIMITER ;

-- =========================
-- ÍNDICES IMPORTANTES
-- =========================
CREATE INDEX idx_usuario_email ON tbl_usuario(email);
CREATE INDEX idx_usuario_cpf ON tbl_usuario(cpf);
CREATE INDEX idx_hospital_email ON tbl_hospital(email);
CREATE INDEX idx_hospital_cnpj ON tbl_hospital(cnpj);

CREATE INDEX idx_agendamento_data ON tbl_agendamento(data);
CREATE INDEX idx_agendamento_status ON tbl_agendamento(status);
CREATE INDEX idx_agendamento_hospital ON tbl_agendamento(id_hospital);

CREATE INDEX idx_doacao_data ON tbl_doacao(data);