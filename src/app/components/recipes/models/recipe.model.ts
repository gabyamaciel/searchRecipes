export interface recipes {
  uri: string;
  label: string;
  image: string;
  url: string;
  ingredients: [];
  calories: number;
  healthLabels: [];
}

export interface results {
  count: number;
  hits: [];
}
