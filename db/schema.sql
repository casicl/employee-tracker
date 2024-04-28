DROP DATABASE IF EXISTS employee_db;

CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE department (

    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    name VARCHAR(30),
    PRIMARY KEY (id);
);

CREATE TABLE role (

    id INT PRIMARY KEY NOT NULL,
    title: VARCHAR(30),
    salary DECIMAL,
    department_id INT NOT NULL;
    FOREIGN KEY (department_id)
    REFERENCES department(id)
);

CREATE TABLE employee (

    id INT PRIMARY KEY NOT NULL,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT;
    FOREIGN KEY (employee_id)
    REFERENCES employee(id)

)