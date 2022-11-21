import { Header } from "../atom/layout/Header";
import { Footer } from "../atom/layout/Footer";

export const DefauldLayout = (props) => {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
