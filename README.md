# desafio-bloom-filter

### Este algoritmo tem como objetivo realizar um teste prático para minha monografia 

- o arquivo bloom-filter-desafio.js é o arquivo onde será escrito o código para o algoritmo
- o arquivo bloom-filter.test.js é o arquivo que irá realizar a validação do algoritmo

### Comandos utilizados
- "npm run test": será utilizado para rodar os teste unitários
- "node bloom-filter-desafio.js" pode ser utilizado caso o entrevistado precise validar algum funcionamento do algoritmo

<img width="1213" height="703" alt="image" src="https://github.com/user-attachments/assets/fdd04fa2-76a6-4616-b049-7a63277bfed8" />

# Explicação sobre o Algoritmo para base de conhecimento da atividade

### Parte 1: A Estrutura Base (O Bit Array)
- A base do Bloom Filter é um Bit Array (vetor de bits) de tamanho fixo, representado no diagrama com 8 posições (índices de 0 a 7).
- Inicialmente, todas as posições do vetor começam zeradas (0).

### Parte 2: O Processo de Inserção (Passo a Passo)
- Tomando como exemplo a inserção da palavra "Pesquisa":
- Funções Hash ($k$): A palavra passa por múltiplas funções hash independentes. No desenho, são utilizadas 3 funções hash (hashFunction).
- Mapeamento de Índices: Cada função calcula um valor numérico baseado na palavra "Pesquisa" e o mapeia para um índice correspondente dentro do limite do array.
- Ativação dos Bits: Na ilustração, as funções apontaram para as posições 1, 3 e 5. O algoritmo vai até essas posições e altera o valor de 0 para 1. As posições não atingidas (0, 2, 4, 6 e 7) permanecem em 0.

### Parte 3: O Processo de Verificação (Como o Filtro Responde)

Para explicar como o algoritmo faz a consulta de um elemento:
- Se o participante quiser verificar se a palavra "Pesquisa" já foi inserida, o algoritmo calcula novamente os três hashes.
- Ele checa as posições 1, 3 e 5. Como todas estão marcadas com 1, o algoritmo responde que a palavra "provavelmente está no conjunto".
- Se pelo menos um dos bits consultados fosse 0, a resposta seria determinística: a palavra "com certeza não está no conjunto".

## Parte 4: Vantagens e Trade-offs
### Vantagens:
- Baixo custo de memória: O filtro não armazena o dado real (a string "Pesquisa"), mas apenas os bits correspondentes (0 ou 1). Isso economiza uma quantidade massiva de memória em comparação com tabelas hash tradicionais.Retorno rápido: A busca e a inserção dependem apenas do número de funções hash ($O(k)$), sendo uma operação de tempo constante, ideal para uso como camadas de cache de alto desempenho.
### Trade-offs (Contrapontos):
Falsos Positivos: Como o espaço de bits é finito, outras palavras inseridas futuramente podem acabar ativando acidentalmente os mesmos bits (1, 3 e 5). Se consultarmos uma palavra que nunca foi inserida, mas que mapeia para esses mesmos bits já ativos, o filtro dirá incorretamente que ela está no conjunto. Nota: Falsos negativos são impossíveis.
