import React from "react";
import styles from "./header.module.scss";
import Image from "next/image";
import classNames from "classnames";
import Link from "next/link";

export default function Header() {
  return (
    <div
      className={classNames({
        [styles.headerCont]: true,
      })}
    >
      <nav className="flex items-center container m-auto gap-8 ">
        <div className="flex gap-12">
          <Image src="brandLogo.svg" alt="brandLogo" width={150} height={75} />
          <div className="flex items-center gap-3 rounded-lg  px-4 bg-white  overflow-hidden min-w-[426px]  max-h-[49px]">
            <input
              className="border-none outline-none  py-1 text-[14px] flex-1"
              placeholder="Search"
            />
            <Image
              src="searchIcon.svg"
              alt="brandLogo"
              width={15}
              height={15}
            />
          </div>
        </div>

        <div className="flex items-center gap-4  ">
          <Link
            className={classNames({
              [styles.navRoutes]: true,
            })}
            href=""
          >
            Home
          </Link>
          <Link
            className={classNames({
              [styles.navRoutes]: true,
            })}
            href=""
          >
            About
          </Link>
          <Link
            className={classNames({
              [styles.navRoutes]: true,
            })}
            href=""
          >
            Contact
          </Link>
          <Link
            className={classNames({
              // [styles.navRoutes]: true,
              relative: true,
            })}
            href=""
          >
            <Image src="cartIcon.svg" alt="cartIcon" width={35} height={35} />
            <span className="min-w-[23px] h-[23px] rounded-full bg-red-500 text-[18px] absolute flex items-center justify-center text-white top-[-10px] right-[-10px] ">
              9
            </span>
          </Link>
       
         
        </div>

        <div className="flex items-center gap-12 flex-1  justify-end">

        <Link
            className={classNames({
              [styles.navRoutes]: true,
              [styles.loginBtn]: true,
            })}
            href=""
          >
            Login
          </Link>
          <Link
            className={classNames({
              [styles.navRoutes]: true,
              [styles.registerBtn]: true,
            })}
            href=""
          >
            Register
          </Link>
        </div>
      </nav>
    </div>
  );
}
