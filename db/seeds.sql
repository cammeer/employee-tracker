-- -- not sure if I need this here and/or in the db file
-- use tracker;

insert into department (name)
values ("Command/Bridge");
insert into department (name)
values ("Engineering");
insert into department (name)
values ("Security");
insert into department (name)
values ("Medical");
insert into department (name)
values ("Ten Forward");

insert into role (title, salary, department_id)
values ("Captain", 500000, 1);
insert into role (title, salary, department_id)
values ("Chief Engineer", 450000, 2);
insert into role (title, salary, department_id)
values ("Chief of Security", 350000, 3);
insert into role (title, salary, department_id)
values ("Chief Medical Officer", 400000, 4);
insert into role (title, salary, department_id)
values ("Space Bartender", 200000, 5);

insert into employee (first_name, last_name, role_id, manager_id)
values ("Jean Luc", "Picard", 1, null);
insert into employee (first_name, last_name, role_id, manager_id)
values ("Geordi", "La Forge", 2, 1);
insert into employee (first_name, last_name, role_id, manager_id)
values ("Worf", "son of Mogh", 3, 1);
insert into employee (first_name, last_name, role_id, manager_id)
values ("Beverly", "Crusher", 4, 1);
insert into employee (first_name, last_name, role_id, manager_id)
values ("Guinan", "El-Aurian", 5, null);
