### Exercício 1
```
CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);
```

a)
- o VARCHAR(255) mostra que o id e name são do tipo string com no máximo 255 caracteres.
- birth_date é do tipo DATE que representa uma data.
- id é a chave primária e os demais não podem ser nulos.

b)
- SHOW DATABASES mostra o banco de dados
- SHOW TABLES mostra as tabelas existentes no banco de dados

c)
- Ao rodar o comando, mostra na tela a tabela respectiva com todas as informações criadas e organizadas em linhas e colunas.

-------------------------------------------------------------------------

### Exercício 2

a)
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Glória Pires",
  1200000,
  "1963-08-23", 
  "female"
);
```

b) Apareceu o seguinte erro:
- Código de erro: 1062. Entrada duplicada '002' para a chave 'PRIMÁRIA'
- O banco de dados não permitiu adicionar um dado novo utilizando uma id que já existia.

c)
- Código de erro: 1136. Contagem da coluna não corresponde com o valor da contagem da fileira 1.
- Não permitiu adicionar os dados, pois está faltando os campos birth_date e gender dentro dos parênteses da query

O correto é:
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
```

d)
- Código de erro: 1364. Campo 'name' não tem um valor padrão
- Como foi definido que o campo 'name' não pode ser nulo, o banco de dados não permitiu adicionar os dados sem um nome.

O correto é:
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "Lázaro Ramos",
  400000,
  "1949-04-18", 
  "male"
);
```

e)
- Código de erro: 1292. Valor data incorreto: '1950' para coluna 'birth_date' na fileira 1.
- Deu erro, pois o campo data não está entre aspas

O correto é:
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);
```

f)
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "006", 
  "Paolla Oliveira",
  350000,
  "1982-04-14", 
  "female"
);
```
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "007", 
  "Reynaldo Gianecchini",
  300000,
  "1972-11-12", 
  "male"
);
```
-------------------------------------------------------------------------

### Exercício 3

a)
```
SELECT * FROM Actor WHERE gender = "female";
```

b)
```
SELECT salary FROM Actor WHERE name = "Tony Ramos";
```

c)
- não retorna nada porque todos os dados da tabela estão com o gender preenchido

d)
- SELECT id, name, salary FROM Actor WHERE salary <= 500000;

e)
- Erro 1054. Coluna 'nome' desconhecido em 'lista de campo'
- O campo 'nome' não existe. O campo correto deveria ser 'name'

Correto:
```
SELECT id, name from Actor WHERE id = "002";
```

-------------------------------------------------------------------------

### Exercício 4

a)
- A query vai retornar todos os atores que estão no banco de dados que possuem o nome começando por A ou J e que tenham salário acima de 300.000

b)
```
SELECT * FROM Actor
WHERE (name NOT LIKE "A%") AND salary > 350000;
```

c)
```
SELECT * FROM Actor
WHERE (name LIKE "G%" OR name LIKE "%g%");
```

d)
```
SELECT * FROM Actor
WHERE (name LIKE "%a%" OR name LIKE "%A%" OR name LIKE "%g%" OR name LIKE "%G%")
AND salary BETWEEN 350000 AND 900000;
```

-------------------------------------------------------------------------

### Exercício 5

a)
```
CREATE TABLE Filmes (
	id VARCHAR(255) PRIMARY KEY,
  nome VARCHAR(255) NOT NULL,
  sinopse TEXT NOT NULL,
  data_lancamento DATE NOT NULL,
  avaliacao INT NOT NULL
);
```

- id é do tipo string e chave primária.
- nome é do tipo string, sinopse é do tipo texto, data_lancamento é do tipo data e avaliacao é do tipo inteiro.
- Nenhum pode ser nulo.

-------------------------------------------------------------------------

### Exercício 6

a)
```
SELECT id, nome, avaliacao from Filmes WHERE id = "004";
```

b) 
```
SELECT * from Filmes WHERE nome = "Se Eu Fosse Você";
```

c) 
```
SELECT id, nome, sinopse from Filmes WHERE avaliacao > 7;
```

-------------------------------------------------------------------------

### Exercício 7

a)
```
SELECT * from Filmes WHERE nome LIKE "%vida%";
```

b)
```
SELECT * from Filmes
WHERE nome LIKE "%vida%" OR sinopse LIKE "%vida%";
```

c)
```
SELECT * from Filmes
WHERE data_lancamento < "2022-06-06";
```

d)
```
SELECT * from Filmes
WHERE data_lancamento < "2022-06-06"
AND (nome LIKE "%vida%" OR sinopse LIKE "%vida%")
AND avaliacao > 7; 
```