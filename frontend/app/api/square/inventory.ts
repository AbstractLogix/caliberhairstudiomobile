import React from "react";
import { Text, View } from "react-native";

const inventoryURL: string = "https://connect.squareup.com/v2/inventory/";

const SquareApi = () => {
  return { getInventoryCount, getInventoryPhysicalCount };
};

// GET /v2/inventory/{catalog_object_id}
// Retrieve inventory count
// Retrieves the current calculated stock count for a given CatalogObject at
// a given set of Locations.

const getInventoryCount = async (catalog_object_id: string) => {
  try {
    const response = await fetch(
      inventoryURL + catalog_object_id // dummy link
    );
    const json = await response.json();
    return json.counts;
  } catch (error) {
    console.error(error);
  }
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

//
export default SquareApi;
