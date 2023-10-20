import { Metadata } from "next";
import Account from "@/components/shares/Account";

export const metadata: Metadata = {
  title: "Najot e-commerce | Account",
  description:
    "E-commerce website forever flksdjflad flkfjadslkf adslfjadsl fjlafkjsd",
};

const AccountPage = () => {
  return (
    <div>
      <Account />
    </div>
  );
};

export default AccountPage;
