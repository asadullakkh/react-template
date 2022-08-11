interface Props {
  children: any;
}

const Layout = (prop: Props) => {
  return (
    <>
      <main>{prop.children}</main>
    </>
  );
};

export default Layout;
