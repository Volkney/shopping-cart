import { useState, useEffect } from "react";
import { fetchProducts } from "../services/productsApi";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProducts()
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="p-4">Loading products...</div>;
  if (error) return <div className="p-4">Error: {error}</div>;

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product.id}>{product.title}</div>
          // ↑ placeholder — ProductCard goes here next
        ))}
      </div>
    </div>
  );
};

export default Shop;
