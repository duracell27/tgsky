import Link from "next/link";
import React from "react";
import { useUserStore } from "../store/user";
import { LanguageKeys, Languages } from "../utils/Language";
import Image from "next/image";

const Menu: React.FC = () => {
  const { language } = useUserStore();
  return (
    <div className="my-1">
      <Link
        className="buttonLight font-bold text-md py-1 block w-[90%] mx-auto text-center my-2"
        href={"/profile"}
      >
        <Image
          className="inline mr-1"
          src={"/img/icons/user.png"}
          width={16}
          height={16}
          alt="user"
        />
        {Languages[language as LanguageKeys].menuSection.profile}
      </Link>
      <Link
        className="buttonLight font-bold text-md py-1 block w-[90%] mx-auto text-center my-2"
        href={"/city"}
      >
        <Image
          className="inline mr-1"
          src={"/img/icons/city.png"}
          width={16}
          height={16}
          alt="city"
        />
        {Languages[language as LanguageKeys].menuSection.city}
      </Link>
      <div className="">
        <div className="flex justify-between w-[90%] mx-auto gap-3 my-2">
          <Link
            className="buttonLight font-bold text-md py-1 block w-1/2 text-center"
            href={"/shop"}
          >
            <Image
              className="inline mr-1"
              src={"/img/icons/shop.png"}
              width={16}
              height={16}
              alt="shop"
            />
            {Languages[language as LanguageKeys].menuSection.shop}
          </Link>
          <Link
            className="buttonLight font-bold text-md py-1 block w-1/2  text-center"
            href={"/human"}
          >
            <Image
              className="inline mr-1"
              src={"/img/icons/human.png"}
              width={16}
              height={16}
              alt="human"
            />
            {Languages[language as LanguageKeys].menuSection.human}
          </Link>
        </div>
        <div className="flex justify-between w-[90%] mx-auto gap-3 my-2">
          <Link
            className="buttonLight font-bold text-md py-1 block  w-1/2 mx-auto text-center"
            href={"/rating"}
          >
            <Image
              className="inline mr-1"
              src={"/img/icons/rating.png"}
              width={16}
              height={16}
              alt="rating"
            />
            {Languages[language as LanguageKeys].menuSection.rating}
          </Link>
          <Link
            className="buttonLight font-bold text-md py-1 block  w-1/2 mx-auto text-center"
            href={"/payment"}
          >
            <Image
              className="inline mr-1"
              src={"/img/icons/usd.png"}
              width={16}
              height={16}
              alt="usd"
            />
            {Languages[language as LanguageKeys].menuSection.payment}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Menu;
