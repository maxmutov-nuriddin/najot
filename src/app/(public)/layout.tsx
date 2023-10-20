import { Fragment } from "react";

import PublicFooter from "@/components/footer/public";
import PublicHeader from "@/components/header/public";
import childrenType from "@/types/children";

const PublicLayout = ({ children }: childrenType) => {
  return (
    <Fragment>
      <PublicHeader />
      <main>{children}</main>
      <PublicFooter />
    </Fragment>
  );
};

export default PublicLayout;
