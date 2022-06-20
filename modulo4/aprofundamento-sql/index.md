### Exercício 1

a)
```
ALTER TABLE Actor DROP COLUMN salary;
```
- Remove a coluna de salários da tabela.

b)
```
ALTER TABLE Actor CHANGE gender sex VARCHAR(6);
```
- Muda o campo gender para sex.

c)
```
ALTER TABLE Actor CHANGE gender gender VARCHAR(255);
```
- Altera o tamanho máximo de caracteres do campo gender para 255.

d)
```
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
```

-------------------------------------------------------------------------

### Exercício 2

a)
```
UPDATE Actor
SET name = "Moacyr Franco", birth_date = "1936-10-05"
WHERE id = "003";
```

b)
```
UPDATE Actor
SET name = "JULIANA PAES"
WHERE name = "Juliana Paes";
```
```
UPDATE Actor
SET name = "Juliana Paes"
WHERE name = "JULIANA PAES";
```

c)
```
UPDATE Actor
SET name = "Antônio Fagundes", salary = 450000 , birth_date = "1949-04-18", gender = "male"
WHERE id = "005";
```

d)
- o comando funciona, mas não muda nada, já que o id não existe na tabela

-------------------------------------------------------------------------

### Exercício 3

a)
```
DELETE FROM Actor WHERE name = "Fernanda Montenegro"
```

b)
```
DELETE FROM Actor WHERE gender = "male" AND salary > 1000000;
```

-------------------------------------------------------------------------

### Exercício 4

a)
```
SELECT MAX(salary) FROM Actor;
```

b)
```
SELECT MIN(salary) FROM Actor
WHERE gender = "female";
```

c)
```
SELECT COUNT(*) FROM Actor
WHERE gender = "female";
```

d)
```
SELECT SUM(salary) FROM Actor;
```

-------------------------------------------------------------------------

### Exercício 5

a)
- O comando retornou a quantidade total de atores separados por gênero, ou seja, retornou a quantidade total de male e a quantidade total de female.

b)
```
SELECT id, name FROM Actor
ORDER BY name DESC;
```

c)
```
SELECT * FROM Actor
ORDER BY salary;
```

d)
```
SELECT AVG(salary), gender
FROM Actor
GROUP BY gender;
```

-------------------------------------------------------------------------

### Exercício 6

a)
```
ALTER TABLE Filmes ADD playing_limit_date DATE;
```

b)
```
ALTER TABLE Filmes CHANGE avaliacao rating FLOAT NOT NULL;
```

c)
```
UPDATE Filmes
SET playing_limit_date = "2022-06-20"
WHERE id = "001";
```

```
UPDATE Filmes
SET playing_limit_date = "2020-06-10"
WHERE id = "002";
```

d)
```
DELETE FROM Filmes
WHERE id = 003;
```

```
UPDATE Filmes
SET sinopse = "Teste"
WHERE id = "003";
```
- O comando funciona, mas não altera nada já que a id não existe mais
```