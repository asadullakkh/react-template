interface Props {
  children: React.ReactNode;
}

const Layout = (props: Props) => {
  return (
    <>
      <h1>It is Default Layout</h1>
      <main>{props.children}</main>
    </>
  );
};

export default Layout;
