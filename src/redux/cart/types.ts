export type CartItem = {
  id: string;
  title: string;
  price: number;
  grams: number;
  imageUrl: string;
  count: number;
};

export interface CartSliceState {
  totalPrice: number;
  items: CartItem[];
}
