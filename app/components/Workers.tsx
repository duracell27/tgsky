import React from "react";
import Container from "./Container";
import Image from "next/image";
import Link from "next/link";
import Hr from "./Hr";

type Props = {
  workers: [];
  floorType: string;
  floorOrdinal: number;
};

const Workers = ({ workers, floorType, floorOrdinal }: Props) => {
  return (
    <Container>
      <div className="flex justify-center gap-3 my-2">
        {workers.map((worker, index) => {
          if (worker._id) {
            return ('')
          } else {
            return (
              <Link href={'/human'}
                key={index}
                className="w-[80px] bg-violetLight rounded-lg p-2 flex flex-col items-center"
              >
                <div className="bg-violetDark text-violetLink textShadow rounded-md px-1 mb-8">Знайти</div>
                <Image
                  className=""
                  src={`/img/floorIcon/noHuman.png`}
                  width={48}
                  height={48}
                  alt="userPic"
                  style={{ objectFit: "contain" }}
                />
              </Link>
            );
          }
        })}
      </div>
      <Hr/>
    </Container>
  );
};

export default Workers;
