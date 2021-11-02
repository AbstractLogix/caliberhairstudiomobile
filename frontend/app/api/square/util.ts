// fetch function

const fetchResponse = async (url: string, headers: {}) => {
  const response = await fetch(url, { headers });
  const json = response.json();
  json
    .then((res) => {
      console.log(res);
    })
    .catch((e) => console.log(e));
};

export default fetchResponse;
