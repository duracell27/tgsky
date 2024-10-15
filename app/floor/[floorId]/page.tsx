'use client'
import Container from '@/app/components/Container';
import Departments from '@/app/components/Departments';
import Header from '@/app/components/Header';
import Hr from '@/app/components/Hr';
import Menu from '@/app/components/Menu';
import UserStats from '@/app/components/Stats';
import UpFloor from '@/app/components/UpFloor';
import WorkerBonus from '@/app/components/WorkerBonus';
import Workers from '@/app/components/Workers';
import { Floor } from '@/app/models/floor.model';
import { useFloorStore } from '@/app/store/floor';
import { useUserStore } from '@/app/store/user';
import React from 'react';

interface FloorPageProps {
  params: {
    floorId: string;
  };
}

const FloorPage: React.FC<FloorPageProps> = ({ params }) => {
  const { floorId } = params;

  const { floors } = useFloorStore();
  const { language,userData } = useUserStore();

  if (!floors) return "no floors";
  if (!userData) return "no user data";

  const floor = floors.find((floor) => floor._id === floorId);
  console.log(floor);

  
  if (!floor) {
    return <Container>
    <p>No floor</p>
  </Container>;
  }

  return (
    <Container>
        <Header gold={userData.coins} usd={userData.usd}/>
        <Departments departments={floor.departments} floorType={floor.floorType} floorOrdinal={floor.floorTypeOrdinal} language={language}/>
        <WorkerBonus reduceBuy={floor.floorReduceBuy} increaseSell={floor.floorIncreaseSell}/>
        <Workers workers={floor.workers.length>0? floor.workers: [{},{},{}]} floorType={floor.floorType} floorOrdinal={floor.floorTypeOrdinal}/>
        <UpFloor floorId={floor._id} lvl={floor.floorLvl}/>
        <Menu/>
        <Hr/>
      <UserStats name={userData.username ||   `${userData.firstName} ${userData.lastName}`} lvl={userData.lvl}/>
    </Container>
  );
}

export default FloorPage;
