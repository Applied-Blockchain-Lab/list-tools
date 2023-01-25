export default function usePaginationUtils(listStore) {
  const getItems = () => {
    return listStore.getItemsForList;
  };

  const getItemsPerPage = () => listStore.getItemsPerPage;

  const setItemsPerPage = (itemsPerPage) => {
    listStore.setItemsPerPage(itemsPerPage);
    listStore.setCurrentPage(1);
  };

  const getCurrentPage = () => listStore.getCurrentPage;
  const getTotalPages = () => Math.ceil(listStore.getFilteredItems.length / listStore.getItemsPerPage);

  const setCurrentPage = (pageNum) => {
    listStore.setCurrentPage(pageNum);
  };

  return {
    getItemsPerPage,
    setItemsPerPage,
    getCurrentPage,
    getTotalPages,
    setCurrentPage,
    getItems,
  };
}
