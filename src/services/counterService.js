const config = {
  baseUrl: "https://json-mock-server.firebaseio.com/votes"
};

const counterService = {
  getCounter: () => (
    new Promise((resolve, reject) => {
      resolve(
        fetch(`${config.baseUrl}.json`)
        .then(result => result.json())
      )
    })
  ),
  updateCounter: () => {}
};

export default counterService;
