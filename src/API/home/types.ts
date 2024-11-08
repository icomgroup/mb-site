import { BackendResponse, BackendResponseWithPagination } from "@/types/apis";

export type GetAllFeatures = BackendResponseWithPagination<Feature>;

export type Feature = {
  name: string;
  img: string;
  description: string;
};

export type GetAllPrinciples = BackendResponseWithPagination<Principle>;

export type Principle = {
  id: string;
  name: string;
  img: string;
};

export type GetAllReviews = BackendResponse<Reviews[]>;

export type Reviews = {
  id: string;
  msg: string;
  rate: number;
  name: string;
  title: string;
  img: string;
};

export type GetAllVendors = BackendResponseWithPagination<Vendor>;

export type Vendor = {
  name: string;
  id: string;
  region: string;
  phone: string;
  email: string;
  address: string;
};
