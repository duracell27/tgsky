import React from "react";
import Container from "./Container";
import Stars from "./Stars";
import Hr from "./Hr";
import Image from "next/image";

type Props = {
  floorId: string;
  lvl: number;
};

const UpFloor = ({ floorId, lvl }: Props) => {
  return (
    <Container>
      <div className="my-2">
        <div className="flex justify-center gap-1">
          <Stars lvl={lvl} />
        </div>
        <div className="flex justify-center">
          <button className="buttonGreen flex items-center mt-2 gap-1">
            <span>Покращити за</span>
            <Image
              className="mt-1"
              src={`/img/icons/usd.png`}
              width={16}
              height={16}
              alt="userPic"
              style={{ objectFit: "contain" }}
            />
            <span>10</span>
          </button>
        </div>
      </div>

      <Hr />
    </Container>
  );
};

export default UpFloor;
