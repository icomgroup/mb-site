import { refreshAxiosToken } from "@/libs/axios";

export const storage = {
  setToken(token: string) {
    localStorage.setItem("token", token);
    refreshAxiosToken();
  },
  clearToken() {
    localStorage.setItem("token", "");
    localStorage.setItem("id", ``);
    refreshAxiosToken();
  },
  getToken() {
    return localStorage.getItem("token");
  },
  setId(id: number) {
    localStorage.setItem("id", `${id}`);
  },
  getId() {
    return localStorage.getItem("id");
  },

  setCurrentPages(fileId: number, pageNumber: null | string) {
    let prevItems = {};
    let newItems = {};
    const items = localStorage.getItem("current-pages");

    try {
      if (items) prevItems = JSON.parse(items);
      newItems = {
        ...prevItems,
        [fileId]: pageNumber,
      };
      localStorage.setItem("current-pages", JSON.stringify(newItems));
    } catch (e) {
      console.error(e);
    }
    return newItems;
  },

  getCurrentPages() {
    const items = localStorage.getItem("current-pages");
    try {
      if (items) return JSON.parse(items) as { [key: number]: string };
    } catch (e) {
      console.error(e);
    }
    return {};
  },
};
