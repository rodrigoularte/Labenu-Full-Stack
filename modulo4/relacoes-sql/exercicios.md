### Exercício 1

a)
- A chave estrangeira é um dado que faz parte de outra tabela. Ela deve fazer referência a uma chave primária de outra tabela.

b)
```
INSERT INTO Rating (id, comment, rate, movie_id)
VALUES (
	"001", "É um filme bom", 8, "001"
);
```
```
INSERT INTO Rating (id, comment, rate, movie_id)
VALUES (
	"002", "Não gostei muito", 5, "002"
);
```
```
INSERT INTO Rating (id, comment, rate, movie_id)
VALUES (
	"003", "Me fez refletir", 9, "003"
);
```
```
INSERT INTO Rating (id, comment, rate, movie_id)
VALUES (
	"004", "É muito engraçado!", 10, "004"
);
```

c)
- Deu erro dizendo que não pode adicionar porque a chave estrangeira tem uma restrição (que acredito que seja os ids dos filmes lá na tabela movie) e falhou

d)
```
ALTER TABLE Movie
DROP COLUMN rating;
```

e)
- Deu um erro parecido com o da letra c. Não pode deletar ou atualizar uma fileira pai. Acredito que seja porque a tabela rating está usando os dados da tabela movie

-----------------------------------------------------------------------------------------------------

### Exercício 2

a)
- É uma tabela que contém duas colunas. Uma vai recerber a id do filme e a outra a id do ator. Como as ids originalmente não fazem parte dessa tabela, elas serão uma chave estrangeira, e serão relacionadas por esta tabela.

b)
```
INSERT INTO MovieCast VALUES
("001","001"), ("001","004"), ("002","004"), ("003","003"), ("004","001"), ("004","005");
```

c)
- Não é possível atualizar ou adicionar os itens na tabela por causa da restrição da chave estrangeira

d)
- Não é possível deletar ou atualizar uma linha pai: falha de restrição de chave estrangeira

-----------------------------------------------------------------------------------------------------

### Exercício 3

a)
- Primeiro seleciona todos os dados da tabela Movie e faz uma comparação com a tabela Rating. O ON é a condição que irá definir os dados relacionados entre as tabelas que irão retornar. Neste caso, vai retornar os dados quando o id do filme for igual nas duas tabelas.

b)
```
SELECT name, Movie.id, rate FROM Movie
INNER JOIN Rating
ON Movie.id = Rating.movie_id;
```