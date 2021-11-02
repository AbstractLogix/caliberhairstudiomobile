// @ts-ignore
import { fetchResponse, GETHeader } from "./util.ts";

// Catalog API

const sandboxCatalogURL = "https://connect.squareupsandbox.com/v2/catalog/";

// List catalog
// GET /v2/catalog/list
// Returns a list of CatalogObjects that includes all objects of a set of desired types
// (for example, all CatalogItem and CatalogTax objects) in the catalog.
// The types parameter is specified as a comma-separated list of valid CatalogObject types:
// ITEM, ITEM_VARIATION, MODIFIER, MODIFIER_LIST, CATEGORY, DISCOUNT, TAX, IMAGE.

export const listCatalog = () => {
  const url = sandboxCatalogURL + "list";
  fetchResponse(url, GETHeader);
};

// Main
listCatalog();
