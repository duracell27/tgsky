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

  console.log("userdata: " + userData);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const userId = WebApp.initDataUnsafe.user?.id;

      const firstName = WebApp.initDataUnsafe.user?.first_name || "";
      const lastName = WebApp.initDataUnsafe.user?.last_name || "";
      const username = WebApp.initDataUnsafe.user?.username || "";
      const languageCode = WebApp.initDataUnsafe.user?.language_code || "en";

      console.log("id: " + userId);
      if (userId !== undefined) {
        console.log("check");

        setTgId(userId || null);
        setUserData({ firstName, lastName, username, languageCode });
        setLanguage(languageCode);
      }
    }
  }, [tgId, setTgId, router, setUserData, setLanguage]);

  return (
    <Container>
      <div className="">
        {Languages[language as LanguageKeys].welcomePage.title}
      </div>
      <div className=" text-white">
        {Languages[language as LanguageKeys].welcomePage.welcomeUser}{" "}
        {userData?.username || userData?.firstName}
      </div>
      <button
        onClick={() => {
          router.push("/");
        }}
        className="bg-white p-2 text-black"
      >
        {Languages[language as LanguageKeys].welcomePage.buttonText}
      </button>
      <div className="">
        {Languages[language as LanguageKeys].welcomePage.subTitle}
      </div>
    </Container>
  );
};

export default WelcomePage;
