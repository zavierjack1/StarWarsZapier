const perform = async (z, bundle) => {
  const options = {
    url: 'https://fakestoreapi.com/products',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    params: {},
  };

  return z.request(options).then((response) => {
    response.throwForStatus();
    const results = response.json;

    // You can do any parsing you need for results here before returning them

    return { results };
  });
};

module.exports = {
  display: {
    description: 'this is a dummy action for test purposes',
    hidden: false,
    label: 'Star_Wars_Action',
  },
  key: 'Star_Wars_Action',
  noun: 'Star Wars Action',
  operation: { inputFields: [], perform: perform },
};
