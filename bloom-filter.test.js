const { BloomFilter } = require("./bloom-filter-exemplo");

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
  test("Deve distinguir palavras diferentes por similaridade", () => {
    const bloom = new BloomFilter(200, 4);
    bloom.add("banana");

    expect(bloom.contains("banan")).toBe(false);
    expect(bloom.contains("bananas")).toBe(false);
    expect(bloom.contains("banana")).toBe(true);
  });
  test("Hash deve ser determinístico para mesma palavra e mesmo seed", () => {
    const bloom = new BloomFilter(100, 3);

    expect(bloom.hashFunction("banana", 0)).toBe(
      bloom.hashFunction("banana", 0),
    );
    expect(bloom.hashFunction("banana", 1)).toBe(
      bloom.hashFunction("banana", 1),
    );
  });
  test("Deve aceitar inserção repetida da mesma palavra", () => {
    const bloom = new BloomFilter(100, 3);

    bloom.add("banana");
    bloom.add("banana");

    expect(bloom.contains("banana")).toBe(true);
  });
  test("Deve tratar string vazia corretamente", () => {
    const bloom = new BloomFilter(100, 3);
    bloom.add("");

    expect(bloom.contains("")).toBe(true);
  });
  test("Deve conter várias palavras adicionadas", () => {
    const bloom = new BloomFilter(200, 4);

    ["banana", "uva", "morango", "laranja"].forEach((palavra) => {
      bloom.add(palavra);
    });

    expect(bloom.contains("banana")).toBe(true);
    expect(bloom.contains("uva")).toBe(true);
    expect(bloom.contains("morango")).toBe(true);
    expect(bloom.contains("laranja")).toBe(true);
  });
});
