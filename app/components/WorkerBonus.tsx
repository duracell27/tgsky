import React from "react";
import Container from "./Container";
import Image from "next/image";
import Hr from "./Hr";

type Props = {
  reduceBuy: number;
  increaseSell: number;
};

const WorkerBonus = ({ reduceBuy, increaseSell }: Props) => {
  return (
    <Container>
      <div className="flex flex-col gap-1 items-center mb-1">
        <p className="textShadow text-whiteGray">Бонуси працівників</p>
        <div className="flex justify-center gap-2 textShadow">
          <div className="flex items-center">
            <Image
              className=""
              src={`/img/icons/buy.png`}
              width={16}
              height={16}
              alt="userPic"
              style={{ objectFit: "contain" }}
            />
            <span className="text-typeGreen">-{reduceBuy}%</span>
          </div>
          <div className="flex items-center">
            <Image
              className=""
              src={`/img/icons/coin+.png`}
              width={16}
              height={16}
              alt="userPic"
              style={{ objectFit: "contain" }}
            />
            <span className="text-typeBlue">+{increaseSell}%</span>
          </div>
        </div>
      </div>
      <Hr/>
    </Container>
  );
};

export default WorkerBonus;
