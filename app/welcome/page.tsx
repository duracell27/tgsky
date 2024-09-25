"use client";
import React, { useEffect } from "react";
import { LanguageKeys, Languages } from "../utils/Language";
import Container from "../components/Container";
import { useUserStore } from "../store/user";
import { useRouter } from "next/navigation";
import WebApp from "@twa-dev/sdk";

const WelcomePage = () => {
  const { tgId, setTgId, userData, setUserData, language, setLanguage } =
    useUserStore();
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const userId = WebApp.initDataUnsafe.user?.id;

      const firstName = WebApp.initDataUnsafe.user?.first_name || "";
      const lastName = WebApp.initDataUnsafe.user?.last_name || "";
      const username = WebApp.initDataUnsafe.user?.username || "";
      const languageCode = WebApp.initDataUnsafe.user?.language_code || "en";

      if (userId !== undefined) {
       

        setTgId(userId || null);
        setUserData({ firstName, lastName, username, languageCode });
        setLanguage(languageCode);
      }else{
        // FAKE DATA
        setTgId(46412059);
        setUserData({ firstName:"Володимир", lastName: "Шмідт", username: 'volodymyr_shmidt', languageCode: "uk" });
        setLanguage('uk');
      }
    }
  }, [tgId, setTgId, router, setUserData, setLanguage]);

  return (
    <Container>
      <div className="flex flex-col gap-4 items-center text-white ">
      <div className="text-center">
        {Languages[language as LanguageKeys].welcomePage.title}
      </div>
      <div className=" text-white">
        {Languages[language as LanguageKeys].welcomePage.welcomeUser}{" "}
        <span className="font-bold">{userData?.username || userData?.firstName}</span>
      </div>
      <button
        onClick={() => {
          router.push("/");
        }}
        className="buttonPrimary"
      >
        {Languages[language as LanguageKeys].welcomePage.buttonText}
      </button>
      <div className="text-center">
        {Languages[language as LanguageKeys].welcomePage.subTitle}
      </div></div>
    </Container>
  );
};

export default WelcomePage;
