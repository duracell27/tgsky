'use client'
import Container from '@/app/components/Container';
import Departments from '@/app/components/Departments';
import Header from '@/app/components/Header';
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

  
  if (!floor) {
    return <Container>
    <p>No floor</p>
  </Container>;
  }

  return (
    <Container>
        <Header gold={userData.coins} usd={userData.usd}/>
        <Departments departments={floor.departments} floorType={floor.floorType} floorOrdinal={floor.floorTypeOrdinal} language={language}/>
    </Container>
  );
}

export default FloorPage;
