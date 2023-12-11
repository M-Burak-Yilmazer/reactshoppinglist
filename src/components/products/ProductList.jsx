import ProductCard from "./ProductCard";
import "./Products.scss"

const ProductList = ({ veri }) => {
  return (
    <div className="product-list">
      {veri.map((item) => (
        <ProductCard key={item.id} {...item} />
      ))}
    </div>
  );
};

export default ProductList;
