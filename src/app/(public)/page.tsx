import { Metadata } from "next";
import { Fragment } from "react";
import axios from "axios";
import CategoryCard from "@/components/card/CategoryCard";
import request from "@/server";
import CategoryType from "@/types/category";

export const metadata: Metadata = {
  title: "Najot e-commerce | Home",
  description: "E-commerce website forever",
};

const Home = async () => {
  try {
    const { data } = await request.get<CategoryType[]>("category");

    
    return (
      <Fragment>
        <section>
          <h1 className="text-center">Latest products</h1>
        </section>
        <section>
          <h1 className="text-center">Categories</h1>
          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
            {data.map((category) => (
              <CategoryCard key={category._id} {...category} />
            ))}
          </div>
        </section>
      </Fragment>
    );
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data);
    } else {
      throw new Error((error as Error).message);
    }
  }
};

export default Home;
