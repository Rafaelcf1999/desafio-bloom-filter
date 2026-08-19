const { BloomFilter } = require("./bloom-filter-desafio");

describe("BloomFilter", () => {
  test("Deve adicionar uma palavra ao bloom filter", () => {
    const bloom = new BloomFilter(100, 3);
    bloom.add("banana");
    expect(bloom.contains("banana")).toBe(true);
  });

  test("Não deve conter uma palavra que nunca foi adicionada", () => {
    const bloom = new BloomFilter(100, 3);
    bloom.add("banana");
    expect(bloom.contains("cenoura")).toBe(false);
  });

  test("Função hash deve retornar index dentro do tamanho do filtro", () => {
    const bloom = new BloomFilter(50, 3);
    const index = bloom.hashFunction("index", 0);
    expect(index).toBeGreaterThanOrEqual(0);
    expect(index).toBeLessThan(50);
  });
});
