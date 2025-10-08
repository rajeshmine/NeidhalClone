import React from "react";

const products = [
  { id: 1, name: "Kurti Set", category: "Newly Launched", price: "₹1,299" },
  { id: 2, name: "Embroidered Saree", category: "Sarees", price: "₹2,999" },
  { id: 3, name: "Cotton Salwar Material", category: "Salwar Material", price: "₹1,199" },
  { id: 4, name: "Designer Dupatta", category: "Bestsellers", price: "₹1,499" },
];

const Collections = () => {
  return (
    <section>
      <h2>All Collections</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - {product.category} - {product.price}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Collections;
