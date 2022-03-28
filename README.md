# Calculadora Romana

#### Aluno: Mateus Santos de Azevedo

## 953 - DESENVOLVIMENTO DE APLICAÇÕES WEB 2022/1

### Este é um trabalho de avaliação da Instituição [Unicarioca](https://www.unicarioca.edu.br/)

### Lógica dos cálculos e algarismos

I - 1<br>
V - 5<br>
X - 10<br>
L - 50<br>
C - 100<br>
D - 500<br>
M - 1000<br>

1. Observado que qualquer algarismo romano que começa com 1 ele pode ser repetido 3 vezes.
   Por exemplo: III - XXX - CCC - MMM

2. Os algarismo romano que começa com 5 não haverá repetição
   Por exemplo: V - L - D

3. Cabe aos algarismo que se repetem aumentarem ou diminuirem o valores
   Por exemplo: V = 5; IV = 4; VI = 6

4. Quando diminuimos também foi observado que é apenas um algarismo
   Por exemplo: IV = 4; IX = 9; XL = 40; XC = 90

5. Quando aumentamos podendo ser até três vezes
   Por exemplo: III = 3; MMM = 3000;

Na aplicação sou capaz de inserir qualquer algarismo romano, realizar operações de soma, subtração, multiplicação e divisão. Tanto os números de entrada quanto a resposta de saída serão em algarismos romanos.

Na função transformRomanToDecimal() foi utilizado o conceito do item 4 onde serão utilizados dois algarismos para realizar uma diminuição, então, verifico se existe esse padrão com a função checkRomanNumerals().

Como são dois algarismo pego o valor do atual no laço de repetição e do próximo para verificar se atende a regra. Visto que sim intero dois números no meu laço de repetição para que o valor atual e o próximo sejam ignorados na próxima interação.

Caso a verificação anterior não seja atendida, realizo uma chamada para minha função checkRomanNumeralValue(). Onde será verificado o valor de um único algarismo romano.

Tanto a função checkRomanNumerals() quanto a função checkRomanNumeralValue() retornam valores decimais.

Após ambas verificações, eu utilizo uma solução que está devidamente documentada no código para que possa realizar o processo inverso e transforma o valor decimal em um valor romano para que seja impresso na tela.

Essa solução possui dois arrays "num" e "sym" onde eles estão ligados suas posições ligam o valor decimal ao valor romano e vice-versa. Crio uma variável "i" para interação dos arrays que possui o tamanho total de ambos.

O numero decimal que é passado para função é dividido diversas vezes a fim de ser encontrado e convertido seu valor para romanos e assim podendo ser retornado o valor em algarismo romanos para nossa função de chamada.

Tornando capaz a visualização do resultado na página HTMLS"

#### Na versão 1.0.0 da calculadora só tem suporte de conversão até o número 3999
