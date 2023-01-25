// buddy ignore:start
import useGlobalComposable from "../src/composables/globalComposable";
import { readFileSync } from "fs";
import { setActivePinia, createPinia } from "pinia";
import { describe, expect, test, beforeEach } from "@jest/globals";
const demoData = JSON.parse(readFileSync("./demo-data/demoData1.json"));

describe("Pagination tests", () => {
  let listTools1;
  const STORE_ID = 1;
  const ITEMS_PER_PAGE = 5;
  const SINGLE_SORT = true;

  beforeEach(() => {
    setActivePinia(createPinia());
    listTools1 = useGlobalComposable(STORE_ID, ITEMS_PER_PAGE, SINGLE_SORT);
    listTools1.init(demoData);
  });

  test("Proper items length after init", () => {
    expect(listTools1.paginationUtils.getItems().length).toBe(ITEMS_PER_PAGE);
  });

  test("Proper items per page after init", () => {
    expect(listTools1.paginationUtils.getItemsPerPage()).toBe(ITEMS_PER_PAGE);
  });

  test("Sets items per page", () => {
    const newItemsPerPage = 10;
    listTools1.paginationUtils.setItemsPerPage(newItemsPerPage);

    expect(listTools1.paginationUtils.getItemsPerPage()).toBe(newItemsPerPage);
    expect(listTools1.paginationUtils.getItems().length).toBe(newItemsPerPage);
  });

  test("Sets items per page and updates pages count", () => {
    const totalPagesBefore = listTools1.paginationUtils.getTotalPages();

    const newItemsPerPage = 10;
    listTools1.paginationUtils.setItemsPerPage(newItemsPerPage);

    const totalPagesAfter = listTools1.paginationUtils.getTotalPages();

    expect(totalPagesBefore).not.toBe(totalPagesAfter);
  });

  test("Sets page number to 3", () => {
    expect(listTools1.paginationUtils.getCurrentPage()).toBe(1);
    listTools1.paginationUtils.setCurrentPage(3);
    expect(listTools1.paginationUtils.getCurrentPage()).toBe(3);
  });

  test("Goes to next page and compare items", () => {
    const currentPage = listTools1.paginationUtils.getCurrentPage();
    const itemsBeforePageChange = listTools1.paginationUtils.getItems();

    listTools1.paginationUtils.setCurrentPage(currentPage + 1);
    const itemsAfterPageChange = listTools1.paginationUtils.getItems();

    expect(itemsAfterPageChange).not.toBe(itemsBeforePageChange);
  });
});
// buddy ignore:end
