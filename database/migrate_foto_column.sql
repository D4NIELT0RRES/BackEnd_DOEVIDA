-- Migration to increase foto column size in tbl_hospital
ALTER TABLE tbl_hospital MODIFY COLUMN foto MEDIUMTEXT;
