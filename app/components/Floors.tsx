import Image from "next/image";
import React from "react";

import { useFloorStore } from "../store/floor";
import {
  FloorKeys,
  FloorNames,
  LanguageKeys,
  Languages,
} from "../utils/Language";
import { useUserStore } from "../store/user";
import { Floor } from "../models/floor.model";
import Link from "next/link";

const Floors: React.FC = () => {
  const { floors } = useFloorStore();
  const { language } = useUserStore();
  if (!floors) return "";

  const generateFloorDescription = (floor: Floor) => {
    const currentTime = new Date();

    // 1) Якщо є хоч один статус в departments = 'selling' і timeToSell < час зараз
    const sellingDepartment = floor.departments.find(
      (dept) =>
        dept.status === "selling" &&
        dept.timeToSell &&
        new Date(dept.timeToSell) < currentTime
    );
    if (sellingDepartment) {
      return <button>Зібрати прибуток</button>;
    }

    // 2) Якщо є хоч один статус в departments = 'delivery' і timeToDelivery < час зараз
    const deliveryDepartment = floor.departments.find(
      (dept) =>
        dept.status === "delivery" &&
        dept.timeToDelivery &&
        new Date(dept.timeToDelivery) < currentTime
    );
    if (deliveryDepartment) {
      return <button>Виложити товар</button>;
    }

    // 3) Якщо є хоч один статус в departments = 'idle'
    const idleDepartment = floor.departments.find(
      (dept) => dept.status === "idle"
    );
    if (idleDepartment) {
      return <button>Закупити товар</button>;
    }

    // 4) Якщо є хоч один статус в departments = 'waitForWorker'
    const waitForWorkerDepartment = floor.departments.find(
      (dept) => dept.status === "waitForWorker"
    );
    if (waitForWorkerDepartment) {
      return (
        <div className="">
          <div className="flex items-center gap-2">
            <Image
                className=""
                src={`/img/icons/noHuman.png`}
                width={16}
                height={16}
                alt="userPic"
                style={{ objectFit: "contain" }}
              />
            <p className="text-gray text-sm">
              {Languages[language as LanguageKeys].home.workerSub}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Image
                className=""
                src={`/img/icons/human.png`}
                width={16}
                height={16}
                alt="userPic"
                style={{ objectFit: "contain" }}
              />
            <Link className="textShadow text-lg text-violetLink underline leading-none" href="/human">{Languages[language as LanguageKeys].home.workerLink}</Link>
          </div>
        </div>
      );
    }

    // Якщо не знайдено жодного статусу
    return <p>Все працює нормально</p>;
  };
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
              {floor.floorNumber}.{" "}
              {
                FloorNames[language as FloorKeys]?.[floor.floorType]?.[
                  floor.floorTypeOrdinal
                ]?.floorName
              }
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
          <div className="p-1">
            <div className=" flex justify-start gap-2 items-start leading-none">
              <Image
                className="border-2 border-violetBorder rounded-md"
                src={`/img/floorIcon/${floor.floorType}.jpeg`}
                width={48}
                height={48}
                alt="gold"
                style={{ objectFit: "contain" }}
              />
              <div className="font-sm">{generateFloorDescription(floor)}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Floors;
