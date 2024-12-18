import React from 'react';
import { Card, Image, Name, Description } from './ProductCard.styles';

interface ProductCardProps {
  item: {
    name: string;
    description: string;
    image: string;
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ item }) => {
  return (
    <Card>
      <Image src={item.image} alt={item.name} />
      <Name>{item.name}</Name>
      <Description>{item.description}</Description>
    </Card>
  );
};

export default ProductCard;
