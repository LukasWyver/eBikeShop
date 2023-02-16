import React from 'react';
import { Box, Image, Text } from 'native-base';
import { TouchableOpacity } from 'react-native';
import { CardProps } from '../../screens/Home';
import { formatCurrency } from '../../utils/formatCurrency';
import { CardTextAlpha50 } from '../atoms/CardTextAlpha50';

export function Card({
  id, image, model, title, price
}: CardProps) {
  return (
    <TouchableOpacity style={{ padding: 5, width: '50%', height: 240, opacity: 0.9 }} onPress={() => { }} activeOpacity={.8}>
      <Box rounded="20px" p="4" flex="1" shadow="5" bg="primary.50:alpha.9" alignItems="center">
        <Box>
          <Image src={image} alt="image" w="121px" h="80px" resizeMode="contain" />

          <Box mt="17px">
            <CardTextAlpha50 text={title} />
            <Text fontSize="md" bold color="white">{model}</Text>
            <CardTextAlpha50 text={formatCurrency(price)} />
          </Box>
        </Box>
      </Box>
    </TouchableOpacity>
  );
}