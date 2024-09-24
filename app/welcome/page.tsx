"use client";
import React, { useEffect } from "react";
import { Languages } from "../utils/Language";
import Container from "../components/Container";
import { useUserStore } from "../store/user";
import { useRouter } from "next/navigation";
import WebApp from "@twa-dev/sdk";

const WelcomePage = () => {
  const { tgId, setTgId } = useUserStore();
  const router = useRouter();

  console.log("id: " + tgId);

  useEffect(() => {
    if(WebApp.initDataUnsafe.user?.id !== undefined){
      setTgId(WebApp.initDataUnsafe.user.id || null);
    }
    
    if (!tgId) {
      router.push("/welcome");
    } else {
      router.push("/");
    }
  });

  
  return (
    <Container>
      <div className="">{Languages["en"].welcomePage.title}</div>
      <div className="">{Languages["en"].welcomePage.welcomeUser} </div>
      <button className="">{Languages["en"].welcomePage.buttonText}</button>
      <div className="">{Languages["en"].welcomePage.subTitle}</div>
    </Container>
  );
};

export default WelcomePage;
