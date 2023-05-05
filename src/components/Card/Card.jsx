import { Button, DivContainer, CardWrapper, Image, TextWrapper, Text } from "./CardElement.js";
import { Link } from "react-router-dom";

const Card = ({
  id,
  name,
  status,
  species,
  gender,
  origin,
  image,
  onClose 
}) => {
  return (
    <DivContainer>
      <CardWrapper>
        <Image src={image} alt={name} />
        <Button onClick={()=>onClose(id)}>x</Button>
      </CardWrapper>
      <TextWrapper>  
        <Link to={`/detail/${id}`}>
        <Text>Name: {name}</Text>
        </Link>
        
        <Text>Status: {status}</Text>
        <Text>Specie: {species}</Text>
        <Text>Gender: {gender}</Text>
        <Text>Origin: {origin}</Text>
      </TextWrapper>
    </DivContainer>
  );
};

export default Card;
