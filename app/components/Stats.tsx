import Image from "next/image";
import React from "react";
import { useUserStore } from "../store/user";
import { LanguageKeys, Languages } from "../utils/Language";

type UserStatsProps = {
  name: string;
  lvl: number;
};

const UserStats: React.FC<UserStatsProps> = ({ name, lvl }) => {
  const { language } = useUserStore();
  return (
    <div className="flex justify-center my-1">
      <div className="flex gap-1 textShadow text-white font-semibold">
               
        <Image src={"/img/icons/user.png"} width={16} height={16} alt="user" style={{ objectFit: 'contain' }} />
        {name}
        <Image src={"/img/icons/exp.png"} width={16} height={16} alt="exp" style={{ objectFit: 'contain' }} />
        {lvl} {" "}
        {Languages[language as LanguageKeys].userStats.lvl}
      </div>
    </div>
  );
};

export default UserStats;
