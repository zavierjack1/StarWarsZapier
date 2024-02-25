const zapier = require('zapier-platform-core');
const App = require('../../index');
const appTester = zapier.createAppTester(App);
zapier.tools.env.inject();

describe('triggers.starWarsPeople', () => {
  it('should run trigger for first page', async () => {
    const bundle = { inputData: {} };

    const results = await appTester(
      App.triggers['starWarsPeople'].operation.perform,
      bundle
    );
    const luke = results[0];

    expect({name: luke.name, id: luke.id}).toMatchObject({name: 'Luke Skywalker', id: "1"});
  });

  it('should run trigger for second page', async () => {
    const bundle = { meta: {page: 2} };

    const results = await appTester(
      App.triggers['starWarsPeople'].operation.perform,
      bundle
    );
    const luke = results[0];

    expect({name: luke.name, id: luke.id}).toMatchObject({name: 'Boba Fett', id: "22"});
  });
});