# OitoRainhas
Problema das oito rainhas

-----------------------------------

♟ Problema consiste em incluir em um tablueiro 8x8, 8 rainhas sem que elas consigam matar umas as outras, utilizando de técnicas de heurística.

♟ Primeiramente, criei a parte visual do desafio utilizando o HTML cru, crei o tabuleiro de xadrez, com um botão para inciar a resolução do desafio, e as 8 rainhas fixas dentro do menu.

![image](https://user-images.githubusercontent.com/61763480/163696670-2ec62c95-1d39-4399-8bd8-d9d273231487.png)

♟ A ideia é que a visualização facilite a criação do código que irá rodar para resolução do exercício, em seguida criei uma função para que sempre que uma rainha seja adcionado ao tabuleiro tenha todas as casas que aquela rainha domina marcadas, para que posteriormente usemos essas marcações para definir de critério para inclusão de uma rainha dentro de uma casa.
