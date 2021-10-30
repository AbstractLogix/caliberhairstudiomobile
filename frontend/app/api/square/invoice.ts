// invoice endpoints Square Api

import fetchResponse from "./util";

const invoicesURL: string = "https://connect.squareup.com/v2/invoices";

// GET /v2/invoices
// List invoices
// Returns a list of invoices for a given location.

const listInvoices = (location_id: string) => {
  const url = invoicesURL + "?location_id=" + location_id;
  const json = fetchResponse(url);
  return json;
};
// async (location_id: string) => {
//   try {
//     const response = await fetch(invoicesURL + "?location_id=" + location_id);
//     const json = await response.json();
//     return json.invoice;
//   } catch (error) {
//     console.log(error);
//   }
// };

// GET /v2/invoices/{invoice_id}
// Get invoice
// Retrieves an invoice by invoice ID.

const getInvoice = () => {};

const invoice = () => {
  return { listInvoices, getInvoice };
};

export default invoice;
