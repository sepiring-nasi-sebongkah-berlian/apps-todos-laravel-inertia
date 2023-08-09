const CustomSideBar = () => {
  return (
    <>
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <ul className="menu h-full w-80 bg-base-200 p-4">
          {/* Sidebar content here */}
          <li>
            <a>Login</a>
          </li>
          <li>
            <a>Register</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default CustomSideBar;
