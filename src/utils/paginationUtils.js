export default function usePaginationUtils(listStore) {
  const paginate = () => {
    const items = [];
    for (let i = listStore.pageItems.startIndex; i <= listStore.pageItems.endIndex; i++) {
      items.push(listStore.allItems[i]);
    }
    return items;
  };

  const getItemsPerPage = () => listStore.getItemsPerPage;

  const setItemsPerPage = (itemsPerPage) => {
    listStore.setItemsPerPage(itemsPerPage);
  };

  return {
    paginate,
    getItemsPerPage,
    setItemsPerPage,
  };
}
