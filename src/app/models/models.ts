export interface Category {
  id: number;
  category: string;
  subcategory: string;
}

export interface SuggestedProducts {
  bannerimage: string;
  category: Category;
}
