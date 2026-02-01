const Navbar = () => {
  return (
    <ul className="flex justify-between items-center w-full px-2">
      <li className="p-4 font-bold text-2xl">
        <a href="/">The aleph shop</a>
      </li>
      <li className="flex gap-4  p-4 text-sm items-center">
        <section className="flex items-center">
          <a href="/shop">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M16.5 21a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m-8 0a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3M3.71 5.4h15.214c1.378 0 2.373 1.27 1.995 2.548l-1.654 5.6C19.01 14.408 18.196 15 17.27 15H8.112c-.927 0-1.742-.593-1.996-1.452zm0 0L3 3"
              />
            </svg>
          </a>
        </section>
        <a href="/cart" className="">
          GitHub
        </a>
      </li>
    </ul>
  );
};

export default Navbar;
