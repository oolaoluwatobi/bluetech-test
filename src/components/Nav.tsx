import logo from "../assets/logo.svg";
import search_icon from "../assets/search.svg";
import bell from "../assets/bell.svg";
import user from "../assets/user.svg";
import arrow_down from "../assets/arrow_down.svg";
import { useProductContext } from "../contexts/ProductsContext";

const Nav = () => {
  const { search, setSearch } = useProductContext();

  return (
    <div className=" w-full bg-yellow-20 bg-white flex justify-between">
      <div className="max-w-[1440px] px-4 lg:px-8 min-w-[720px w-full mx-auto flex justify-between">
        <div className="flex flex1 bg-green-30">
          <img
            src={logo}
            alt="logo"
            className="border-r w-20 sm:w-40 lg:w-fit pr-2 py-5 lg:pr-8 lg:py-5 mr-4 lg:mr-14"
          />
          <div className="relative   my-auto  bg-green-10 ">
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by ..."
              className="bg-fuchsia-20 w-full h-full px-5 border focus:border-[#0341A7] pr-10 lg:pr-14 py-3 rounded-[7px] indent-8 focus:outline-none focus:ring-2 focus:ring-[#0341A7]"
            />
            <img
              src={search_icon}
              alt="search"
              className="absolute top-4 left-4 "
            />
          </div>
        </div>
        <div className="flex justify-end lg:flex1 bg-green-5 w-fit  my-auto h-fit px-2 space-x-2 cursor-not-allowed ">
          <img
            src={bell}
            alt="notifications"
            className="size-8 aspect-square hidden md:block rounded-full"
          />
          <img
            src={user}
            alt="user"
            className="size-9 aspect-square  hidden md:block rounded-full"
          />
          <p className="my-auto font-medium text-[#45464B] ml-2 md:ml-0 ">
            Deko
          </p>
          <img
            src={arrow_down}
            alt="arrow down"
            className="w-2 h-3 my-auto aspect-square rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
