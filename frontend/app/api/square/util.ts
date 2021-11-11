// Deno used for testing hence file extension in import and export funcs

// @ts-ignore
import keys from "../test_secrets.ts";

// fetch function
export const fetchResponse = async (url: string, headers: {}) => {
  const response = await fetch(url, { headers })
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .then((data) => {
      console.log("Here is the data current being pushed from fetchResponse"); // block is for debugging
      console.log(data);
    })
    .catch((e) => console.log(e));
};

// GET header
export const GETHeader = {
  "Square-Version": "2021-10-20",
  Authorization: "Bearer " + keys.SQUARE_ACCESS_TOKEN,
  "Content-Type": "application/json",
};
