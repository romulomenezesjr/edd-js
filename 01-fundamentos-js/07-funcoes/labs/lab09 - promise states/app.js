const fetchPromise = fetch(
    "bad-scheme://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
  );
  
  fetchPromise
    .then((resposta) => {
      if (!resposta.ok) {
        throw new Error(`HTTP error: ${resposta.status}`);
      }
      return resposta.json();
    })
    .then((data) => {
      console.log(data[0].name);
    })
    .catch((error) => {
      console.error(`Não foi possível obter os produtos: ${error}`);
    });
  