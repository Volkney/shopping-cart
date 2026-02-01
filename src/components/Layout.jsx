const Layout = ({ children }) => {
  return (
    <div className="min-h-screen grid grid-rows-[auto_1fr_auto]">
      {children}
    </div>
  );
};

export default Layout;
