// fetch function

const fetchResponse = async (url: string, headers: {}) => {
  const response = await fetch(url, { headers })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((e) => console.log(e));
};

export default fetchResponse;
