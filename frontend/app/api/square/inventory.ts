// @ts-ignore
import keys from "../test_secrets.ts";
// @ts-ignore
import fetchResponse from "./util.ts";
// Inventory endpoints Square Api
const inventoryURL = "https://connect.squareup.com/v2/inventory/";
const sandBoxInventoryURL = "https://connect.squareupsandbox.com/v2/inventory/";

const headers = {
  "Square-Version": "2021-10-20",
  Authorization: "Bearer " + keys.SQUARE_ACCESS_TOKEN,
  "Content-Type": "application/json",
};

// GET /v2/inventory/{catalog_object_id}
// Retrieve inventory count
// Retrieves the current calculated stock count for a given CatalogObject at
// a given set of Locations.

const getInventoryCount = async (catalog_object_id: string) => {
  await fetchResponse(sandBoxInventoryURL + catalog_object_id, headers).then(
    (response: any) => {
      return response;
    }
  );
};

// GET /v2/inventory/physical-counts/{physical_count_id}
// Retrieve inventory physical count
// Returns the InventoryPhysicalCount object with the provided physical_count_id.

const getInventoryPhysicalCount = async (physical_count_id: string) => {
  try {
    const response = await fetch(
      inventoryURL + "physical-counts/" + physical_count_id
    );
    const json = await response.json();
    return json.counts;
  } catch (error) {
    console.error(error);
  }
};

// POST /v2/inventory/counts/batch-retrieve
// Batch retrieve inventory counts
// Returns current counts for the provided CatalogObjects at the requested Locations.

const batchRetrieveInventoryCounts = () => {};

const inventory = () => {
  return { getInventoryCount, getInventoryPhysicalCount };
};

// TEST MAIN
const response = getInventoryCount("0"); // {}

export default inventory;
