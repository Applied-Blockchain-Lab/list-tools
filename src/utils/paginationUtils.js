export default function usePaginationUtils(listStore) {
  const paginate = () => {
    const items = [];
    for (let i = listStore.pageItems.startIndex; i <= listStore.pageItems.endIndex; i++) {
      items.push(listStore.getFilteredItems[i]);
    }
    return items;
  };

  const getItemsPerPage = () => listStore.getItemsPerPage;

  const setItemsPerPage = (itemsPerPage) => {
    listStore.setItemsPerPage(itemsPerPage);
    updatePagination(itemsPerPage);
  };

  const getCurrentPage = () => listStore.getCurrentPage;
  const getTotalPages = () => Math.ceil(listStore.getFilteredItems.length / listStore.getItemsPerPage);

  const nextPage = () => {
    setPage(listStore.getCurrentPage + 1);
  };
  const prevPage = () => {
    setPage(listStore.getCurrentPage - 1);
  };
  const updatePagination = (itemsPerPage) => {
    const pageItems = {};
    pageItems.startIndex = 0;
    const lastIndex = pageItems.startIndex + itemsPerPage - 1;
    pageItems.endIndex =
      lastIndex >= listStore.getFilteredItems.length ? listStore.getFilteredItems.length - 1 : lastIndex;
    listStore.setPageItems(pageItems);
    listStore.setCurrentPage(1);
  };

  const setPage = (targetPage) => {
    if (targetPage <= getTotalPages() && targetPage >= 1) {
      listStore.setCurrentPage(targetPage);
      const pageItems = {};
      pageItems.startIndex = (targetPage - 1) * listStore.getItemsPerPage;
      const lastIndex = pageItems.startIndex + listStore.getItemsPerPage - 1;
      pageItems.endIndex =
        lastIndex >= listStore.getFilteredItems.length ? listStore.getFilteredItems.length - 1 : lastIndex;
      listStore.setPageItems(pageItems);
    }
  };

  return {
    paginate,
    getItemsPerPage,
    setItemsPerPage,
    getCurrentPage,
    getTotalPages,
    nextPage,
    prevPage,
    setPage,
  };
}
