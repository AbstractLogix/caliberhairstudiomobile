// fetch function

const fetchResponse = async (url: string) => {
  try {
    const response = await fetch(url);
    const json = await response.json();
    return json.payload;
  } catch (error) {
    console.error(error);
  }
};

export default fetchResponse;
