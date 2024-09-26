"use client";
import { useRouter } from "next/navigation";
import Container from "./components/Container";
import { useUserStore } from "./store/user";
import { useEffect } from "react";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Hr from "./components/Hr";
import UserStats from "./components/Stats";

export default function Home() {
  const { tgId, userData } = useUserStore();
  const router = useRouter();
  
  useEffect(() => {
    if (!tgId) {
      router.push("/welcome");
    } else {
      router.push("/");
    }
  },[tgId]);

  if (!tgId || !userData) return ''
 
  return (
    <Container>
      <Header gold={userData.coins} usd={userData.usd}/>
      <Hr/>
      <Menu/>
      <Hr/>
      <UserStats name={userData.username ||   `${userData.firstName} ${userData.lastName}`} lvl={userData.lvl}/>
    </Container>
  );
}
