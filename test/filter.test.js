// buddy ignore:start
import useGlobalComposable from "../src/composables/globalComposable";
import { readFileSync } from "fs";
import { setActivePinia, createPinia } from "pinia";
import { describe, /* expect, test, */ beforeEach } from "@jest/globals";
const demoData = JSON.parse(readFileSync("./demo-data/demoData1.json"));

describe("Filter tests", () => {
  let listTools1;
  const STORE_ID = 1;
  const ITEMS_PER_PAGE = 5;
  const SINGLE_SORT = true;

  beforeEach(() => {
    setActivePinia(createPinia());
    listTools1 = useGlobalComposable(STORE_ID, ITEMS_PER_PAGE, SINGLE_SORT);
    listTools1.init(demoData);
  });
});
