// Deno used for testing hence file extension in import and export funcs

// @ts-ignore
import keys from "../test_secrets.ts";
// fetch function

export const fetchResponse = async (url: string, headers: {}) => {
  const response = await fetch(url, { headers })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((e) => console.log(e));
};

export const GETHeader = {
  "Square-Version": "2021-10-20",
  Authorization: "Bearer " + keys.SQUARE_ACCESS_TOKEN,
  "Content-Type": "application/json",
};