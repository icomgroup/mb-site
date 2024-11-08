export interface BackendResponse<T> {
  result: T;
  message: string;
  success: boolean;
}
export interface BackendResponseWithPagination<T> {
  success: true;
  result: Pagination<T>;
  message: string;
}
export interface Pagination<T> {
  data: T[];
  from: number;
  to: number;
  total: number;
  current_page: number;
  first_page_url: string;
  last_page: number;
  last_page_url: string | null;
  // "links": [
  //     {
  //         "url": null,
  //         "label": "&laquo; Previous",
  //         "active": false
  //     },
  //     {
  //         "url": string,
  //         "label": "1",
  //         "active": true
  //     },
  //     {
  //         "url": null,
  //         "label": "Next &raquo;",
  //         "active": false
  //     }
  // ],
  next_page_url: string | null;
  path: string;
  per_page: number; // 15,
  prev_page_url: string | null;
}

export interface Page<T> {
  data: T[];
  pageParam: number;
}

export type PaginationParams = {
  items?: number;
  page?: number;
};
