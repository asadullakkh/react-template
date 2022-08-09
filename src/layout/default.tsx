import { Header } from "../components/Hader";

interface Props {
  children: any;
}

const Layout = (prop: Props) => {
  return (
    <>
      <Header />
      <main>{prop.children}</main>
    </>
  );
};

export default Layout;
