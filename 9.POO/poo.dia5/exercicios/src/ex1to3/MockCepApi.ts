import ICepAPI from "./interfaces/ICepAPI";

export default class MockCepApi implements ICepAPI {
  async getAddressByCEP(cep: string, number: number): Promise<string> {
      return 'MOCK address for "cep:${cep}, n°:${number}" is "mock address"';
  }

  async getCepByAddress(address: string, number: number): Promise<string> {
      return 'MOCK cep for: "${address}, n°:${number}" is "mock cep"';
  }
}