import React from "react";

const Home = () => {
  const newlyLaunched = [
    { id: 1, name: "New Salwar Material", price: "₹1,299" },
    { id: 2, name: "Trendy Saree", price: "₹1,999" },
  ];
  const bestsellers = [
    { id: 1, name: "Designer Salwar", price: "₹1,499" },
    { id: 2, name: "Ethnic Saree", price: "₹2,399" },
  ];
  const salwarMaterial = [
    { id: 1, name: "Cotton Salwar Material", price: "₹1,199" },
    { id: 2, name: "Silk Salwar Material", price: "₹2,199" },
  ];
  const sarees = [
    { id: 1, name: "Chiffon Saree", price: "₹2,999" },
    { id: 2, name: "Cotton Saree", price: "₹1,799" },
  ];

  return (
    <>
      <header>
        <h1>Neidhal</h1>
        <p>Buy Ethnic Wear for Women at Neidhal Online Shopping</p>
      </header>

      <section>
        <h2>Newly Launched</h2>
        <ul>
          {newlyLaunched.map((item) => (
            <li key={item.id}>
              {item.name} - {item.price}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Our Bestsellers</h2>
        <ul>
          {bestsellers.map((item) => (
            <li key={item.id}>
              {item.name} - {item.price}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Salwar Material</h2>
        <ul>
          {salwarMaterial.map((item) => (
            <li key={item.id}>
              {item.name} - {item.price}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Sarees</h2>
        <ul>
          {sarees.map((item) => (
            <li key={item.id}>
              {item.name} - {item.price}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Home;
