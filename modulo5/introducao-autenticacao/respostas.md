## Exercício 1

a)
- Concordo. Porque uma string aleatória aparenta ser mais segura do que usar somente números, pois pode acontecer uma combinação maior de caracteres.

-----------------------------------------------------------------------------------

## Exercício 2

a)
- O código faz a conexão com o banco de dados e tem um endpoint que cria um usuário.

b)

```
CREATE TABLE User (
	id VARCHAR(255) PRIMARY KEY,
	email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);
```

-----------------------------------------------------------------------------------

## Exercício 3

a)
- Ela garante que o process.env.JWT_KEY será ums string mesmo.

