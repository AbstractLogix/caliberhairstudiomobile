// @ts-ignore
import { fetchResponse, GETHeader } from "./util.ts";

// Inventory endpoints Square Api
const inventoryURL = "https://connect.squareup.com/v2/inventory/"; // production url
const sandBoxInventoryURL = "https://connect.squareupsandbox.com/v2/inventory/"; // sandbox url

// GET /v2/inventory/{catalog_object_id}
// Retrieve inventory count
// Retrieves the current calculated stock count for a given CatalogObject at
// a given set of Locations.

const getInventoryCount = (catalog_object_id: string) => {
  fetchResponse(sandBoxInventoryURL + catalog_object_id, GETHeader);
};

// GET /v2/inventory/physical-counts/{physical_count_id}
// Retrieve inventory physical count
// Returns the InventoryPhysicalCount object with the provided physical_count_id.

const getInventoryPhysicalCount = async (physical_count_id: string) => {
  fetchResponse(
    inventoryURL + "physical-counts/" + physical_count_id,
    GETHeader
  );
};

// POST /v2/inventory/counts/batch-retrieve
// Batch retrieve inventory counts
// Returns current counts for the provided CatalogObjects at the requested Locations.

// const batchRetrieveInventoryCounts = () => {
//   fetchResponse(inventoryURL + "counts/batch-retrieve", util.POSTHeader); // check headers diff for POST
// };

// default export func
const inventory = () => {
  return { getInventoryCount, getInventoryPhysicalCount };
};

// TEST MAIN -- using deno run --allow-net inventory.ts
const response = getInventoryCount("0"); // {}
console.log(response); // undefined

export default inventory;
