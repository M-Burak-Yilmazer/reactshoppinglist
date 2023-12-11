import Header from "./components/header/Header";
import Products from "./components/products/ProductList";
import { categories, products } from "./helper/data";
import "./App.scss";
import { useState } from "react";

function App() {
  const [veri, setVeri] = useState(products);
  const [input, setInput] = useState("");
  const [category, setCategory] = useState("all");

  const handleClick = (item) => {
    setCategory(item);
    setVeri(() => {
      if (item === "all") {
        return products.filter((eleman) =>
          eleman.title.toLowerCase().includes(input.toLowerCase())
        );
      } else {
        return products
          .filter((eleman) => eleman.category === item)
          .filter((eleman) =>
            eleman.title.toLowerCase().includes(input.toLowerCase())
          );
      }
    });
  };

  const handleChange = (e) => {
    const searchText = e.target.value.toLowerCase();
    setInput(e.target.value);

    setVeri(() => {
      if (category === "all") {
        return products.filter((item) =>
          item.title.toLowerCase().includes(searchText)
        );
      } else {
        return products
          .filter((item) => item.category === category)
          .filter((item) => item.title.toLowerCase().includes(searchText));
      }
    });
  };

  console.log(category);

  return (
    <div>
      <Header
        input={input}
        handleChange={handleChange}
        handleClick={handleClick}
        data={categories}
      />
      <Products veri={veri} />
    </div>
  );
}

export default App;
