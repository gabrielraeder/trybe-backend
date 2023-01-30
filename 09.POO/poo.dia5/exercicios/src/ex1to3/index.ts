// ./index.ts
import CepService from './CepService';
import FooCepAPI from './FooCepAPI';
import MockCepApi from './MockCepApi';

async function main() {
  const cepSvc = new CepService(new FooCepAPI());

  console.log(
    'get address by cep', 
    '->', 
    await cepSvc.addressByCep('xx.xxx-xx', 10),
  );
  console.log(
    'get cep by address', 
    '->', 
    await cepSvc.cepByAddress('street foo, between bar and baz', 10),
  );
}

// main();

async function main2() {
  const cepSvc = new CepService(new MockCepApi());

  console.log(
    ' MOCKED - get address by cep', 
    '->', 
    await cepSvc.addressByCep('xx.xxx-xx', 10),
  );
  console.log(
    ' MOCKED - get cep by address', 
    '->', 
    await cepSvc.cepByAddress('street foo, between bar and baz', 10),
  );
}

main().then(() => main2());