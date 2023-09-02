describe('TESTANDO ALGUMA COISA', () => {
  it('should return one', () => {
    const number = 1;
    expect(number).toBe(1);
  });
  test('should return Luiz', () => {
    const nome = 'Luiz';
    expect(nome).toBe('Luiz');
  });
});

describe('TESTANDO OUTRA COISA', () => {
  it('descricao do teste (IT)', () => {
    const number = 1;
    expect(number).not.toBe(1);
  });
  test('descricao do teste (TEST)', () => {
    const nome = 'Luiz';
    expect(nome).not.toBe('Luiz');
  });
});
