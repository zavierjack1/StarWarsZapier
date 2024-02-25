const perform = async (z, bundle) => {
  const mapResponseToArray = (results) =>
    results.map((result) => {
      //get the id from the result's url prop
      const url = result.url;
      const startIdx = url.indexOf("people/") + "people/".length;
      const endIdx = url.indexOf("/", startIdx);

      const id = url.substring(startIdx, endIdx);
      return { ...result, id };
    });

  const page = bundle.meta?.page ? bundle.meta.page + 1 : 1;
  
  const options = {
    url: "https://swapi.dev/api/people/",
    method: "GET",
    headers: {},
    params: {
      page,
    },
  };

  return z.request(options).then((response) => {
    response.throwForStatus();
    return mapResponseToArray(response.json.results);
  });
};

module.exports = {
  operation: { perform: perform, canPaginate: true },
  display: {
    description: "This trigger returns star wars characters from the SWApi",
    hidden: false,
    label: "Star Wars Trigger",
  },
  key: "starWarsPeople",
  noun: "Star Wars Characters",
};
