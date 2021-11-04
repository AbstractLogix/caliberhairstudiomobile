// invoice endpoints Square Api

import { fetchResponse, GETHeader } from "./util";

const invoicesURL: string = "https://connect.squareup.com/v2/invoices";

// GET /v2/invoices
// List invoices
// Returns a list of invoices for a given location.

const listInvoices = (location_id: string) => {
  const url = invoicesURL + "?location_id=" + location_id;
  const jsonResponse = fetchResponse(url, GETHeader);
  return jsonResponse;
};
// not sure about this above code ^
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

const getInvoice = (invoice_id: string) => {
  const url = invoicesURL + "/" + invoice_id;
  const jsonResponse = fetchResponse(url, GETHeader);
  return jsonResponse;
};

const invoice = () => {
  return { listInvoices, getInvoice };
};

export default invoice;
