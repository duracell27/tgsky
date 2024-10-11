import Image from "next/image";
import React from "react";

import { useFloorStore } from "../store/floor";
import { FloorKeys, FloorNames } from "../utils/Language";
import { useUserStore } from "../store/user";

const Floors: React.FC = () => {
  const { floors } = useFloorStore();
  const { language } = useUserStore();
  if (!floors) return "";
  return (
    <div className="my-2">
      {floors.map((floor, index) => (
        <div key={index} className="">
          <div className="flex justify-between bg-violetLight">
            <div
              className="textShadow mx-1"
              style={{
                color:
                  floor.floorType === "products"
                    ? "#0C0"
                    : floor.floorType === "services"
                    ? "#00ffff"
                    : floor.floorType === "recreation"
                    ? "#ffff00"
                    : floor.floorType === "fashion"
                    ? "#B56DFF"
                    : floor.floorType === "electronics"
                    ? "#F0823F"
                    : "",
              }}
            >
              
              {floor.floorNumber}. {FloorNames[language as FloorKeys]?.[floor.floorType]?.[floor.floorTypeOrdinal]?.floorName}
            </div>
            <div className="flex mx-1">
              <Image
                src={"/img/icons/coin.png"}
                width={16}
                height={16}
                alt="statuses"
                style={{ objectFit: "contain" }}
              />
              <Image
                src={"/img/icons/coin.png"}
                width={16}
                height={16}
                alt="statuses"
                style={{ objectFit: "contain" }}
              />
              <Image
                src={"/img/icons/coin.png"}
                width={16}
                height={16}
                alt="statuses"
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Floors;
