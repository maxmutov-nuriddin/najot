import ImageType from "./image";

interface CategoryType {
  _id: string;
  name: string;
  image: ImageType;
  createdAt: string;
  updatedAt: string;
}

export default CategoryType;
