import React from "react";
import { Department } from "../models/floor.model";
import Hr from "./Hr";
import Image from "next/image";
import {
  FloorKeys,
  FloorNames,
  LanguageKeys,
  Languages,
} from "../utils/Language";
import { formatTimeUntilNow, fromSecToTimeString } from "../utils/miniHelps";
import Link from "next/link";
import { useUserStore } from "../store/user";

type Props = {
  departments: Department[];
  floorType: string;
  floorOrdinal: number;
  language: string;
};

const Departments = ({
  departments,
  floorType,
  floorOrdinal,
  language,
}: Props) => {
  const generateButton = (department: Department) => {
    const { language } = useUserStore(); // Отримуємо мову з глобального сховища
    const currentTime = new Date();

        // 1) Якщо статус = 'selling' і timeToSold < час зараз
        if (
            department.status === "selling" &&
            department.timeToSell &&
            new Date(department.timeToSell) < currentTime
          ) {
            return (
              <div className="mb-2">
                  <div className="leading-none flex justify-between mb-1">
                  <span
                    className="textShadow"
                    style={{
                      color:
                        floorType === "products"
                          ? "#0C0"
                          : floorType === "services"
                          ? "#00ffff"
                          : floorType === "recreation"
                          ? "#ffff00"
                          : floorType === "fashion"
                          ? "#B56DFF"
                          : floorType === "electronics"
                          ? "#F0823F"
                          : "",
                    }}
                  >
                    {
                      FloorNames[language as FloorKeys]?.[floorType]?.[floorOrdinal]
                        ?.departmentName[department.ordinal]
                    }
                  </span>
                  <p className="flex gap-1"><Image
                    className=""
                    src={`/img/icons/coin+.png`}
                    width={16}
                    height={16}
                    alt="userPic"
                    style={{ objectFit: "contain" }}
                  /><span className="text-yellowLight">{department.baseSell}</span> </p>
                </div>
                <div className="flex items-center gap-2">
                  <p className="text-gray textShadow text-sm">
                    Tовар проданий!
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Image
                    className=""
                    src={`/img/icons/coin+.png`}
                    width={16}
                    height={16}
                    alt="userPic"
                    style={{ objectFit: "contain" }}
                  />
                  <button
                    className="textShadow text-lg text-violetLink underline leading-none"
                   
                  >
                    Зібрати прибуток
                  </button>
                </div>
              </div>
            );
          }
          // 1.1) Якщо статус = 'delivery' і timeToDelivery > час зараз
          if (
            department.status === "selling" &&
            department.timeToSell &&
            new Date(department.timeToSell) > currentTime
          ) {
            return (
              <div className="mb-2">
                <div className="leading-none mb-1">
                  <span
                    className="textShadow"
                    style={{
                      color:
                        floorType === "products"
                          ? "#0C0"
                          : floorType === "services"
                          ? "#00ffff"
                          : floorType === "recreation"
                          ? "#ffff00"
                          : floorType === "fashion"
                          ? "#B56DFF"
                          : floorType === "electronics"
                          ? "#F0823F"
                          : "",
                    }}
                  >
                    {
                      FloorNames[language as FloorKeys]?.[floorType]?.[floorOrdinal]
                        ?.departmentName[department.ordinal]
                    }
                  </span>
                </div>
                <div className="w-full">
                  <div className="flex justify-between items-center text-whiteGray textShadow text-sm">
                    <div className=" flex items-center gap-1 ">
                      <Image
                        className=""
                        src={`/img/icons/selling.png`}
                        width={16}
                        height={16}
                        alt="userPic"
                        style={{ objectFit: "contain" }}
                      />
                      <span>Товар продається</span>
                    </div>
                    <div className="">
                      {formatTimeUntilNow(department.timeToSell, language)}
                    </div>
                  </div>
                  
                </div>
              </div>
            );
          }

    // 1) Якщо статус = 'selling' і timeToSell < час зараз
    if (
      department.status === "selling" &&
      department.timeToSell &&
      new Date(department.timeToSell) < currentTime
    ) {
      return <button>Зібрати прибуток</button>;
    }

    // 2) Якщо статус = 'delivery' і timeToDelivery < час зараз
    if (
      department.status === "delivery" &&
      department.timeToDelivery &&
      new Date(department.timeToDelivery) < currentTime
    ) {
      return (
        <div className="mb-2">
            <div className="leading-none mb-1">
            <span
              className="textShadow"
              style={{
                color:
                  floorType === "products"
                    ? "#0C0"
                    : floorType === "services"
                    ? "#00ffff"
                    : floorType === "recreation"
                    ? "#ffff00"
                    : floorType === "fashion"
                    ? "#B56DFF"
                    : floorType === "electronics"
                    ? "#F0823F"
                    : "",
              }}
            >
              {
                FloorNames[language as FloorKeys]?.[floorType]?.[floorOrdinal]
                  ?.departmentName[department.ordinal]
              }
            </span>
          </div>
          <div className="flex items-center gap-2">
            <p className="text-gray textShadow text-sm">
              Tовар доставлений!
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Image
              className=""
              src={`/img/icons/delivered.png`}
              width={16}
              height={16}
              alt="userPic"
              style={{ objectFit: "contain" }}
            />
            <button
              className="textShadow text-lg text-violetLink underline leading-none"
             
            >
              Виложити товар
            </button>
          </div>
        </div>
      );
    }
    // 2.1) Якщо статус = 'delivery' і timeToDelivery > час зараз
    if (
      department.status === "delivery" &&
      department.timeToDelivery &&
      new Date(department.timeToDelivery) > currentTime
    ) {
      return (
        <div className="mb-2">
          <div className="leading-none mb-1">
            <span
              className="textShadow"
              style={{
                color:
                  floorType === "products"
                    ? "#0C0"
                    : floorType === "services"
                    ? "#00ffff"
                    : floorType === "recreation"
                    ? "#ffff00"
                    : floorType === "fashion"
                    ? "#B56DFF"
                    : floorType === "electronics"
                    ? "#F0823F"
                    : "",
              }}
            >
              {
                FloorNames[language as FloorKeys]?.[floorType]?.[floorOrdinal]
                  ?.departmentName[department.ordinal]
              }
            </span>
          </div>
          <div className="w-full">
            <div className="flex justify-between items-center text-whiteGray textShadow text-sm">
              <div className=" flex items-center gap-1 ">
                <Image
                  className=""
                  src={`/img/icons/delivery.png`}
                  width={16}
                  height={16}
                  alt="userPic"
                  style={{ objectFit: "contain" }}
                />
                <span>Товар доставляться</span>
              </div>
              <div className="">
                {formatTimeUntilNow(department.timeToDelivery, language)}
              </div>
            </div>
            <div className="">
              <button className="textShadow text-lg text-violetLink underline leading-none flex gap-1 items-end">
                <Image
                  src={"/img/icons/check.png"}
                  width={16}
                  height={16}
                  alt="delivery"
                  style={{ objectFit: "contain" }}
                />
                <span>доставити швидко за</span>
                <Image
                  src={"/img/icons/usd.png"}
                  width={16}
                  height={16}
                  alt="delivery"
                  style={{ objectFit: "contain" }}
                />
                <span>1</span>
              </button>
            </div>
          </div>
        </div>
      );
    }

    // 3) Якщо статус = 'idle'
    if (department.status === "idle") {
      return (
        <div className="mb-2">
          <div className="leading-none mb-1 flex gap-1">
            <span
              className="textShadow"
              style={{
                color:
                  floorType === "products"
                    ? "#0C0"
                    : floorType === "services"
                    ? "#00ffff"
                    : floorType === "recreation"
                    ? "#ffff00"
                    : floorType === "fashion"
                    ? "#B56DFF"
                    : floorType === "electronics"
                    ? "#F0823F"
                    : "",
              }}
            >
              {
                FloorNames[language as FloorKeys]?.[floorType]?.[floorOrdinal]
                  ?.departmentName[department.ordinal]
              }
            </span>
            <Image
              src={"/img/icons/coin+.png"}
              width={16}
              height={16}
              alt="coin"
              style={{ objectFit: "contain" }}
            />
            <span className="text-yellowLight textShadow">
              {department.baseSell}
            </span>
          </div>
          <div className=" flex gap-1 text-whiteGray textShadow text-sm mb-1">
            <Image
              src={"/img/icons/delivery.png"}
              width={16}
              height={16}
              alt="delivery"
              style={{ objectFit: "contain" }}
            />
            <span className="mr-2">
              {fromSecToTimeString(department.deliveryTime, language)}
            </span>
            <Image
              src={"/img/icons/selling.png"}
              width={16}
              height={16}
              alt="cart"
              style={{ objectFit: "contain" }}
            />
            <span>{fromSecToTimeString(department.sellTime, language)}</span>
          </div>
          <div className="flex items-center gap-2">
            <Image
              className=""
              src={`/img/icons/buy.png`}
              width={16}
              height={16}
              alt="userPic"
              style={{ objectFit: "contain" }}
            />
            <button className="textShadow text-lg text-violetLink underline leading-none flex gap-1">
              {Languages[language as LanguageKeys].home.workerLink}
              <Image
                className=""
                src={`/img/icons/coin.png`}
                width={16}
                height={16}
                alt="coin"
                style={{ objectFit: "contain" }}
              />{" "}
              {department.baseBuy}
            </button>
          </div>
        </div>
      );
    }

    // 4) Якщо статус = 'waitForWorker'
    if (department.status === "waitForWorker") {
      return (
        <div className="mb-2">
          <div className="leading-none mb-1">
            <span
              className="textShadow"
              style={{
                color:
                  floorType === "products"
                    ? "#0C0"
                    : floorType === "services"
                    ? "#00ffff"
                    : floorType === "recreation"
                    ? "#ffff00"
                    : floorType === "fashion"
                    ? "#B56DFF"
                    : floorType === "electronics"
                    ? "#F0823F"
                    : "",
              }}
            >
              {
                FloorNames[language as FloorKeys]?.[floorType]?.[floorOrdinal]
                  ?.departmentName[department.ordinal]
              }
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Image
              className=""
              src={`/img/icons/noHuman.png`}
              width={16}
              height={16}
              alt="userPic"
              style={{ objectFit: "contain" }}
            />
            <p className="text-gray textShadow text-sm">
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
            <Link
              className="textShadow text-lg text-violetLink underline leading-none"
              href="/human"
            >
              {Languages[language as LanguageKeys].home.workerLink}
            </Link>
          </div>
        </div>
      );
    }

    // Якщо не знайдено жодного статусу
    return <p>Все працює нормально</p>;
  };
  return (
    <div>
      {departments.map((department) => (
        <div className="mr-2" key={department.ordinal}>
          <div className="my-1 flex items-center gap-2">
            <Image
              src={"/img/floorIcon/cart.png"}
              width={48}
              height={48}
              alt="cart"
              style={{ objectFit: "contain" }}
            />
            <div className="flex-grow">
              <div className="">{generateButton(department)}</div>
            </div>
          </div>
          <Hr />
        </div>
      ))}
    </div>
  );
};

export default Departments;
