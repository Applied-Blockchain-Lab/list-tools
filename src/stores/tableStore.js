import { defineStore } from "pinia";

export const useTableStore = (storeId) =>
  defineStore(`${storeId}`, {
    state: () => {
      return {
        allItems: [
          { firstName: "Frank", lastName: "Murphy", email: "frank.murphy@test.com", role: "User" },
          { firstName: "Vic", lastName: "Reynolds", email: "vic.reynolds@test.com", role: "Admin" },
          { firstName: "Gina", lastName: "Jabowski", email: "gina.jabowski@test.com", role: "Admin" },
          { firstName: "Jessi", lastName: "Glaser", email: "jessi.glaser@test.com", role: "User" },
          { firstName: "Jay", lastName: "Bilzerian", email: "jay.bilzerian@test.com", role: "User" },
          { firstName: "Jay", lastName: "Bilzerian", email: "jay.bilzerian@test.com", role: "User" },
          { firstName: "Jay", lastName: "Bilzerian", email: "jay.bilzerian@test.com", role: "User" },
          { firstName: "Jay", lastName: "Bilzerian", email: "jay.bilzerian@test.com", role: "User" },
          { firstName: "Jay", lastName: "Bilzerian", email: "jay.bilzerian@test.com", role: "User" },
        ],

        currentPage: 1,
        itemsPerPage: 4,
        pageItems: {
          startIndex: 0,
          endIndex: 2,
        },
      };
    },
    actions: {
      increment() {
        this.count++;
      },
      init(allItems) {
        this.allItems = allItems;
      },
      insertRow(row) {
        this.rows.push(row);
      },
      setCurrentPage(page) {
        console.log("Setting page to ", page);
        this.currentPage = page;
        this.pageItems.startIndex = (page - 1) * this.itemsPerPage;
        const lastIndex = this.pageItems.startIndex + this.itemsPerPage - 1;
        this.pageItems.endIndex = lastIndex > this.allItems.length ? this.allItems.length - 1 : lastIndex;
      },
      // Sort by values
      // Filter by values
    },
  })();
