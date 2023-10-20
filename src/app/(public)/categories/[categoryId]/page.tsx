import Image from "next/image";

import request from "@/server";
import CategoryType from "@/types/category";
import MetadataParams from "@/types/dynamic-metadata";
import Params from "@/types/dynamic-params";
import ProductsRow from "@/components/shares/ProductsRow";
import ProductType from "@/types/product";

export async function generateMetadata({
  params: { categoryId },
}: MetadataParams) {
  const { data } = await request.get<CategoryType>(`category/${categoryId}`);

  return {
    title: data.name,
    description: data.name,
  };
}

const CategoryPage = async ({ params: { categoryId } }: Params) => {
  const { data } = await request.get<CategoryType>(`category/${categoryId}`);
  const {
    data: { total, products },
  } = await request.get<{ total: number; products: ProductType[] }>(`product`, {
    params: { category: categoryId },
  });

  return (
    <div>
      <div className="relative w-50 mx-auto" style={{ height: "200px" }}>
        <Image src={data.image.url} fill alt={data.name} objectFit="contain" />
      </div>
      <h1 className="text-center my-6">
        {data.name} ({total})
      </h1>
      <ProductsRow products={products} />
    </div>
  );
};

export default CategoryPage;
