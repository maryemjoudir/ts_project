//component props
type LayoutProps = {
  children: React.ReactNode;
};
function Layout(props: LayoutProps) {
  return (
    <div>
      <h1>Welcome Layout</h1>
      {props.children}
    </div>
  );
}

export default Layout;
