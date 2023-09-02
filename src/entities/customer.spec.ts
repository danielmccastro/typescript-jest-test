import { IndividualCustomer, EnterpriseCustomer } from './customer';

const createIndividualCustomer = (
  firstName: string,
  lastName: string,
  cpf: string,
): IndividualCustomer => {
  return new IndividualCustomer(firstName, lastName, cpf);
};

const createEnterpriseCustomer = (
  name: string,
  cnpj: string,
): EnterpriseCustomer => {
  return new EnterpriseCustomer(name, cnpj);
};

afterEach(() => jest.clearAllMocks());

describe('IndividualCustomer', () => {
  it('should have firstName, lastName, cpf', () => {
    const sut = createIndividualCustomer('Luiz', 'Otavio', '111.111.111-11');
    expect(sut).toHaveProperty('firstName', 'Luiz');
    expect(sut).toHaveProperty('lastName', 'Otavio');
    expect(sut).toHaveProperty('cpf', '111.111.111-11');
  });
  it('should have methods to get name and idn', () => {
    const sut = createIndividualCustomer('Luiz', 'Otavio', '111.111.111-11');
    expect(sut.getName()).toBe('Luiz Otavio');
    expect(sut.getIDN()).toBe('111.111.111-11');
  });
});

describe('EnterpriseCustomer', () => {
  it('should have name and cnpj', () => {
    const sut = createEnterpriseCustomer('Empresa', '11.111.111/0001-11');
    expect(sut).toHaveProperty('name', 'Empresa');
    expect(sut).toHaveProperty('cnpj', '11.111.111/0001-11');
  });
  it('should have methods to get name and idn', () => {
    const sut = createEnterpriseCustomer('Empresa', '11.111.111/0001-11');
    expect(sut.getName()).toBe('Empresa');
    expect(sut.getIDN()).toBe('11.111.111/0001-11');
  });
});
