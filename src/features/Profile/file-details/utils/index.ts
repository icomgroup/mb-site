import { storage } from "@/utils/storage";

export const getCurrentPageFromStorage = (fileId: number) => {
  const items = storage.getCurrentPages();
  return items[fileId] ?? null;
};
