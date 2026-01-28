import { useState } from "react";

export const ShoppingCart = () => {
  return (
    <div>
      <ProductCard />
      <CartSummary />
    </div>
  );
};

export const ProductCard = () => {
  const [quantity, setQuantity] = useState(0);

  return (
    <div>
      <h3>React course</h3>
      <p>$49.99</p>
      <p>Quantity: {quantity}</p>
      <button onClick={() => setQuantity(quantity + 1)}>Add to cart</button>
    </div>
  );
};

export const CartSummary = () => {
  return (
    <div>
      <h3>Cart Summary</h3>
      <p>Total items: 0</p>
      <p>Total price: $0</p>
    </div>
  );
};
