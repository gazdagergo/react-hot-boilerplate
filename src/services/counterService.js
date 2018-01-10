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
  updateCounter: (count) => {
    fetch(`${config.baseUrl}.json`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'PATCH',
      body: JSON.stringify({ count })
    })
  }
};

export default counterService;
