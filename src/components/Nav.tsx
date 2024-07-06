import { Dispatch, SetStateAction } from "react";

import logo from "../assets/logo.svg";
import search_icon from "../assets/search.svg";
import bell from "../assets/bell.svg";
import user from "../assets/user.svg";
import arrow_down from "../assets/arrow_down.svg";

interface NavProps {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
}

const Nav = ({ search, setSearch }: NavProps) => {
  return (
    <div className=" w-full bg-yellow-20 bg-white flex justify-between">
      <div className="max-w-[1440px] px-4 lg:px-8 min-w-[720px w-full mx-auto flex justify-between">
        <div className="flex flex1 bg-green-30">
          <img src={logo} alt="logo" className="border-r pr-8 py-5 mr-14" />
          <div className="relative   my-auto  bg-green-10 ">
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by name..."
              className="bg-fuchsia-20 w-full h-full px-5 border focus:border-[#0341A7] pr-14 py-3 rounded-[7px] indent-8 focus:outline-none focus:ring-2 focus:ring-[#0341A7]"
            />
            <img
              src={search_icon}
              alt="search"
              className="absolute top-4 left-4 "
            />
          </div>
        </div>
        <div className="flex justify-end lg:flex1 bg-green-5 w-fit  my-auto h-fit space-x-2 cursor-not-allowed ">
          <img
            src={bell}
            alt="logo"
            className="size-8 aspect-square rounded-full"
          />
          <img
            src={user}
            alt="logo"
            className="size-9 aspect-square rounded-full"
          />
          <p className="my-auto font-medium text-[#45464B] ">Deko</p>
          <img
            src={arrow_down}
            alt="logo"
            className="w-2 h-3 my-auto aspect-square rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
