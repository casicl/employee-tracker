use employee_db;

INSERT INTO department (name)
VALUES  ("ACCOUNTING"),
        ("SALES"),
        ("IT"),
        ("MANAGEMENT");

INSERT INTO role (title, salary, department_id)
VALUES  ("Vice-president", 280000, 1),
        ("President", 1000000, 2),
        ("Manager", 150000, 3);
        

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  ("Charles", "Clarkson", 1, 1),
        ("Audrey", "Coulthurst", 2, 1),
        ("Casi", "Clarkson", 3, 1);
      



