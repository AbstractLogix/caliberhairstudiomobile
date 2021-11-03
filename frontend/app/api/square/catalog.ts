// @ts-ignore
import { fetchResponse, GETHeader } from "./util.ts";

// Catalog API
const productionCatalogURL = "https://connect.squareup.com/v2/catalog/";
const sandboxCatalogURL = "https://connect.squareupsandbox.com/v2/catalog/";

// List catalog
// GET /v2/catalog/list
// Returns a list of CatalogObjects that includes all objects of a set of desired types
// (for example, all CatalogItem and CatalogTax objects) in the catalog.
// The types parameter is specified as a comma-separated list of valid CatalogObject types:
// ITEM, ITEM_VARIATION, MODIFIER, MODIFIER_LIST, CATEGORY, DISCOUNT, TAX, IMAGE.

export const listCatalog = () => {
  const url = productionCatalogURL + "list";
  return fetchResponse(url, GETHeader);
};

// Retrieve catalog object
// GET /v2/catalog/object/{object_id}
//Returns a single CatalogItem as a CatalogObject based on the provided ID.

export const getCatalogObject = (id: string) => {
  const url = productionCatalogURL + "object/" + id;
  const catalogObject = fetchResponse(url, GETHeader);
  console.log(catalogObject);
};

// Main
// listCatalog();

getCatalogObject("JO4ME7FID6Z2I3PWJR26IYDP");


interface CatalogObject {
  type: string;
  id: string;
  updated_at: string;
  version: number;
  is_deleted: boolean;
  present_at_all_locations: boolean;
  item_data: {
    name: string;
    visibility: string;
    category_id: string;
    variations: [[Object]];
    product_type: string;
    skip_modefier_screen: boolean;
    ecom_visibility: string;
  };
}
