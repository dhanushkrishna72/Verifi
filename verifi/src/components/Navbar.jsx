import React, { useContext } from "react";
import { Search, Moon, Menu, Sun } from "lucide-react";
import { ThemeContext } from "../context/ThemeContext";
import { Link } from "react-router-dom";

const links = [
  "Business",
  "Sports",
  "Entertainment",
  "General",
  "Health",
  "Science",
  "Technology",
];
const Navbar = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };
  return (
    <div className="fixed w-full bg-white dark:bg-pink-800 z-10 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="md:text-2xl text-lg font-bold dark:text-pink-200 text-pink-600 cursor-pointer">
          Verifi
        </div>
        <div className="hidden lg:flex space-x-6">
          {links.map((link) => {
            return (
              <Link
                to={link}
                key={link}
                className="text-pink-300 hover:text-pink-400 transition"
              >
                {link}
              </Link>
            );
          })}
        </div>
        <div className="flex items-center justify-center gap-4">
          <div className="relative bg-gray-50 p-2  rounded-lg">
            <Search
              color="#DB2777"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4"
            />
            <input
              type="text"
              placeholder="Search"
              className="md:pl-10 pl-7 w-36 md:w-64 outline-none focus:outline"
            />
          </div>
          <button
            onClick={toggleTheme}
            className="bg-gray-100 px-3 py-2 rounded-lg cursor-pointer"
          >
            {theme === "light" ? (
              <Moon color="#DB2777" size={26} />
            ) : (
              <Sun color="#e392fe" />
            )}
          </button>
          <button className="md:hidden">
            <Menu color="#e392fe" size={26} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
