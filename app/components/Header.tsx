import Image from "next/image";
import React from "react";
import { formatNumberWithSpaces } from "../utils/miniHelps";

type HeaderProps = {
  gold: number;
  usd: number;
};

const Header: React.FC<HeaderProps> = ({ gold, usd }) => {
  return (
    <div className="bg-violetLight flex justify-end text-white textShadow">
      <p className="flex gap-[2px]">
        <Image
          src={"/img/icons/coin.png"}
          width={16}
          height={16}
          alt="gold"
          style={{ objectFit: 'contain' }}
        />
        {formatNumberWithSpaces(gold)}
      </p>
      <p className="flex ml-2 gap-[2px] mr-1">
        <Image
          src={"/img/icons/usd.png"}
          width={16}
          height={16}
          alt="usd"
          style={{ objectFit: 'contain' }}
        />
        {formatNumberWithSpaces(usd)}
      </p>
      
    </div>
  );
};

export default Header;
