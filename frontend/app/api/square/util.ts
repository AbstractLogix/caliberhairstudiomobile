import keys from "../test_secrets";

// fetch function

const fetchResponse = async (url: string, headers: {}) => {
  try {
    const response = await fetch(url, { headers });
    const json = await response.json();
    return json.payload;
  } catch (error) {
    console.error(error);
  }
};

export default fetchResponse;
