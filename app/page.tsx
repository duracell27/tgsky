"use client";
import { useRouter } from "next/navigation";
import Container from "./components/Container";
import { useUserStore } from "./store/user";
import { useEffect } from "react";

export default function Home() {
  const { tgId, userData } = useUserStore();
  const router = useRouter();
  console.log("id: " + tgId);
  useEffect(() => {
    if (!tgId) {
      router.push("/welcome");
    } else {
      router.push("/");
    }
  });

  return (
    <Container>
      <p>Home - {tgId}</p>
      {userData && <p>UserLang: {userData?.languageCode}</p>}
      {userData && <p>UserName: {userData?.username}</p>}
      {userData && <p>UserFullName: {userData?.firstName} {userData?.lastName}</p>}

    </Container>
  );
}
