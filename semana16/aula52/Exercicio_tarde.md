###Exercício 1
a)Deleta a coluna salary da tabela Actor

b)Altera o titulo da coluna gender para sex, tipo VARCHAR tamanho 6

c) Altera o titulo da coluna gender para gender, tipo VARCHAR, tamanho 255

d)ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

###Exercício 2

a)UPDATE Actor
SET 
	name = "Moacyr Franco",
	birth_date = "2020-02-10"
WHERE id = "003";

b) UPDATE Actor
SET name = "JULIANA PÃES"
WHERE name = "Juliana Paes";

UPDATE Actor
SET name = "Juliana Paes"
WHERE name = "JULIANA PÃES";

c)UPDATE Actor
SET 
	name = "Moacyr Franco",
	birth_date = "2020-02-10",
    salary = 600000,
    gender = "male"
WHERE id = "005";

d)0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0
Não retorna um erro, apenas não afeta nenhuma linha.

###Exercício 3
a)DELETE FROM Actor WHERE name = "Fernanda Montenegro";

b)DELETE FROM Actor
WHERE
	gender = "male" AND
	salary > 1000000;
	
###Exercício 4

a)SELECT MAX(salary) FROM Actor

b)SELECT MIN(salary) FROM Actor WHERE gender = "female";

c)SELECT COUNT(*) FROM Actor WHERE gender = "female";

d)SELECT SUM(salary) FROM Actor;

###Exercício 5

a)Ordena os registros por genero e retorna a quantidade de cada um.

b)SELECT id, name FROM Actor
ORDER BY name DESC;

c)SELECT * FROM Actor
ORDER BY salary;

d)SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 3;

e)SELECT AVG(salary), gender FROM Actor
GROUP BY gender;

###Exercício 6

a)ALTER TABLE Movie ADD playing_limit_date DATE;

b)ALTER TABLE Movie CHANGE rating rating FLOAT;

c)UPDATE Movie
SET
playing_limit_date = "2020-12-31"
WHERE id = "004";

d)0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0
Não retorna nenhhum erro apenas que não afetou nenhum registro

###Exercício 7

a)SELECT COUNT(*) FROM Movie WHERE rating > 7.5;

b)SELECT AVG(rating) FROM Movie;

c)SELECT COUNT(*) FROM Movie WHERE playing_limit_date > CURDATE();

d)SELECT COUNT(*) FROM Movie WHERE release_date < CURDATE();

e)SELECT MAX(rating) FROM Movie;

f)SELECT MIN(rating) FROM Movie;

###Exercício 8

a)SELECT * FROM Movie ORDER BY title;

b)SELECT * FROM Movie ORDER BY title DESC LIMIT 5;

c)SELECT * FROM Movie 
WHERE release_date < CURDATE() 
ORDER BY release_date DESC 
LIMIT 3;

d)SELECT * FROM Movie 
WHERE release_date < CURDATE() 
ORDER BY release_date DESC 
LIMIT 3;




