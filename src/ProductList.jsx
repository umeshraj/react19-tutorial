export const ProductList = () => {
  const products = [
    {
      id: 1,
      name: "Laptop",
      price: 999,
    },
    { id: 2, name: "Smartphone", price: 699 },
    { id: 3, name: "Tablet", price: 499 },
    { id: 4, name: "Headphones", price: 199 },
    { id: 5, name: "Smartwatch", price: 299 },
  ]; // Example array of products

  const productElements = products
    .filter((product) => {
      return product.price >= 500;
    })
    .map((product) => {
      return (
        <div>
          <h3>{product.name}</h3>
          <p>Price: ${product.price}</p>
        </div>
      );
    });

  return (
    <div>
      <h2>Product List</h2>
      {productElements}
    </div>
  );
};
