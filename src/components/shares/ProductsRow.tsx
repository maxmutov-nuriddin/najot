import ProductType from "@/types/product";
import ProductCard from "../card/ProductCard";

interface ProductsRowProps {
  loading?: boolean;
  products: ProductType[];
}

const ProductsRow = ({ loading, products, idFunc }: ProductsRowProps) => {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
      {loading ? (
        <div>Loading...</div>
      ) : (
        products.map((product) => (
          <ProductCard key={product._id} idFunc={idFunc} {...product} />
        ))
      )}
    </div>
  );
};

export default ProductsRow;
