import React, { useEffect, useState } from 'react';
import { Box } from 'native-base';
import { FlatList } from 'react-native';
import { DetailBackground } from '../../atomic/atoms/DetailBackground';
import { MainBanner } from '../../atomic/molecules/MainBanner';
import { Card } from '../../atomic/molecules/Card';
import api from '../../service/api';

export type CardProps = {
  id: string;
  image: string;
  model: string;
  title: string;
  price: number;
}

export default function Home() {
  const [equipments, setEquipments] = useState<CardProps[]>([]);

  useEffect(() => {
    async function getEquipments(){
      try {
        const { data } = await api.get('/equipments')
        setEquipments(data)

      } catch (err) {
        console.log(err)
      }
    }

    getEquipments();
  }, [])


  return (
    <Box flex="1" padding="20px" pt="-10px" position="relative">
        <DetailBackground />
        
        <FlatList 
          numColumns={2}
          data={equipments}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={() => <MainBanner />}
          renderItem={({item: equipment})=> <Card 
            id={equipment.id}
            image={equipment.image}
            model={equipment.model}
            title={equipment.title}
            price={equipment.price}
          />}
        />
         
    </Box>
  );
}