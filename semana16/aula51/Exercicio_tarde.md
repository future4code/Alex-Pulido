###Exercício 1
a)CREATE TABLE - Cria tabela, VARCHAR - Campo tipo string, DATE, campo tipo data,
PRIMARY KEY - Determina que o campo é uma chave primaria.
b) SHOW DATABASES - Exibe as informações da base de dados, SHOW TABLES - Exibe as informações
das tabelas.
c) DESCRIBE Actor - exibe a tabela Actor, com os nomes dos campos, tipos de dados.

###Exercício 2
a)INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Glória Pires",
  1200000,
  "1963-08-23", 
  "female"
);

b) 
58/5000
Código de erro: 1062. Entrada duplicada '002' para a chave 'PRIMARY' - O Erro ocorre
devido o campo ID ser uma chave primária e não permitir valores duplicados.

c) Código de erro: 1136. A contagem de colunas não corresponde à contagem de valores na linha 1
A quantidade de campos listados não corresponde a quantidade de informações inseridas.

d) 
62/5000
Código de erro: 1364. O campo 'name' não tem um valor padrão
A informação do campo nome não pode ser omitido.

e)Código do erro: 1292. Valor incorreto da data: '1950' para a coluna 'data_de_natalidade' na linha 1
Faltaram as aspas na data.

###Exercício 3
a) SELECT * from Actor WHERE gender = "female";

b)SELECT salary from Actor WHERE name = "Tony Ramos";

c)SELECT * FROM Actor WHERE gender = "invalid";
Retorna o último resgistro da tabela.

d)SELECT id, name, salary FROM Actor WHERE salary <= 500000;


e)Error Code: 1054. Unknown column 'nome' in 'field list'
A coluna nome não existe na tabela.

###Exercício 4
a) A query retorna os dados que o name inicia com as letras A ou J e com salário maior que 300000

b) WHERE (name NOT LIKE "A%") AND salary > 350000;

c) SELECT * FROM Actor WHERE (name LIKE "%G%" OR name LIKE "%g%");

d) SELECT * FROM Actor WHERE (name LIKE "%a%" OR name LIKE "%A%") OR (name LIKE "%g%" OR name LIKE "%G%") and salary between 350000 and 900000;

###Exercício 5
a)CREATE TABLE Movie (
		id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255) NOT NULL UNIQUE,
    synopsis TEXT NOT NULL,
    release_Date DATE NOT NULL,
    rating INT NOT NULL
);

b)INSERT INTO Movie (id, title, synopsis, release_Date, rating)
VALUES(
"001",
"Se Eu Fosse Você",
"Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
"2006-01-06",
7);

c)INSERT INTO Movie (id, title, synopsis, release_Date, rating)
VALUES(
"002",
"Doce de mãe",
"Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
"2012-12-27",
10);

d)INSERT INTO Movie (id, title, synopsis, release_Date, rating)
VALUES(
"003",
"Dona Flor e seus Dois Maridos",
"Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
"2017-02-11",
8);

e)INSERT INTO Movie (id, title, synopsis, release_Date, rating)
VALUES(
"004",
"Tropa de Elite",
"02, pede pra sair, 02, você é muleque, Traz a vasoura",
"2002-04-15",
10);

###Exercício 6

a)SELECT id, title, rating FROM Movie WHERE id="004";

b)SELECT * FROM Movie WHERE title="Tropa de Elite";

c)SELECT id, title, synopsis FROM Movie WHERE rating <= 7;

###Exercício 7

a)SELECT * FROM Movie WHERE title LIKE "%vida%";

b)SELECT * FROM Movie
WHERE title LIKE "%pede%" OR
      synopsis LIKE "%pede%";

c)SELECT * FROM Movie
WHERE release_date < "2020-05-04";

d)SELECT * FROM Movie
WHERE release_date < "2020-05-04" AND 
      (title LIKE "%mãe" OR
      synopsis LIKE "%mãe%") AND rating > 7;





