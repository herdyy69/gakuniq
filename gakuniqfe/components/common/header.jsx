import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineUser,
} from "react-icons/ai";
import { GiSelfLove } from "react-icons/gi";

const Header = () => {
  const [open, setOpen] = useState();
  const [search, setSearch] = useState();
  const [cart, setCart] = useState();
  const [wishlist, setWishlist] = useState();
  const [data, setData] = useState();

  useEffect(() => {
    const inputSearch = () => {
      return (
        <div className="my-5">
          <div className="form-control flex md:hidden">
            <div className="input-group">
              <input
                type="text"
                placeholder="Search…"
                className="input input-bordered w-full bg-white"
              />
              <button className="btn btn-square bg-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-black"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      );
    };

    if (search) {
      setData(inputSearch());
    } else {
      setData("");
      console.log(setData(""));
    }
  }, [search]);

  useEffect(() => {
    if (wishlist) {
      setData("wishlist");
    } else {
      setData("");
      console.log(setData(""));
    }
  }, [wishlist]);

  useEffect(() => {
    if (cart) {
      setData("cart");
    } else {
      setData("");
      console.log(setData(""));
    }
  }, [cart]);

  useEffect(() => {
    const meToo = () => {
      return (
        <div className="my-5">
          <hr className="border-gray-300" />
          <h1 className="h-full text-slate-800 text-2xl">
            AKU CINTA JAVASCRIPT
          </h1>
          <hr className="border-gray-300" />
        </div>
      );
    };

    if (open) {
      setData(meToo());
    } else {
      setData("");
    }
  }, [open]);

  return (
    <div className="navbar bg-white px-7 flex flex-col md:flex-row flex-wrap items-center justify-around md:justify-between">
      <div className="flex flex-row">
        <span className="">
          <Image src="/gakuniq.png" width={50} height={50} alt="Gakuniq" />
        </span>
        <span className="hidden md:block">
          <Image
            src="/gakuniq.png"
            width={50}
            height={50}
            alt="Gakuniq"
            className="hidden md:hidden"
          />
        </span>
      </div>
      <div className="flex flex-col md:hidden">
        <hr className="border-2 border-gray-300 w-48 my-3 rounded-sm" />
      </div>
      <div className="flex flex-row mx-5">
        <ul className="menu menu-horizontal p-0 text-xs text-slate-800 flex flex-row flex-wrap ">
          <li>
            <div className="form-control hidden md:block">
              <div className="input-group">
                <input
                  type="text"
                  placeholder="Search…"
                  className="input input-bordered w-48 bg-white"
                />
                <button className="btn btn-square bg-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-black"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <p
              onClick={() => setSearch(!search)}
              className="flex flex-col md:hidden"
            >
              <span className="text-lg">
                <AiOutlineSearch />{" "}
              </span>
              Cari
            </p>
          </li>
          <li className="hidden md:block">
            <p className="flex flex-col">
              <span className="text-lg">
                <AiOutlineUser />{" "}
              </span>
              Akun
            </p>
          </li>
          <li>
            <p onClick={() => setWishlist(!wishlist)} className="flex flex-col">
              <span className="text-lg">
                <GiSelfLove />{" "}
              </span>
              Wishlist
            </p>
          </li>
          <li>
            <p onClick={() => setCart(!cart)} className="flex flex-col">
              <span className="text-lg">
                <AiOutlineShoppingCart />{" "}
              </span>
              Keranjang
            </p>
          </li>
          <li className="md:hidden">
            <p className="flex flex-col">
              <span className="text-lg">
                <label className="swap swap-rotate">
                  <input type="checkbox" />
                  <span
                    onClick={() => setOpen(!open)}
                    className="swap-off flex flex-col items-center"
                  >
                    <AiOutlineMenu />
                    <span className="text-xs mt-3">Menu</span>
                  </span>
                  <span
                    onClick={() => setOpen(!open)}
                    className="swap-on flex flex-col items-center"
                  >
                    <AiOutlineClose />
                    <span className="text-xs mt-3">Close</span>
                  </span>
                </label>
              </span>
            </p>
          </li>
        </ul>
      </div>
      <div className="flex flex-col items-start justify-start md:hidden">
        <span className="text-2xl font-bold text-center">{data}</span>
      </div>
    </div>
  );
};

export default Header;
