import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  DetailContainer,
  DetailContent,
  DetailContentImg,
  Img,
  Subtitle,
  Title,
} from "./DetailElements";

const Detail = () => {
  const [character, setCharacter] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios(`https://rickandmorty-m2y1.onrender.com/rickandmorty/character/${id}`).then(
      ({ data }) => {
        if (data && data.name && data.id && data.gender) {
          const isCharacterExists = character.id === data.id;
          if (!isCharacterExists) {
            setCharacter(data);
          }
        } else {
          alert("No hay personajes con ese ID");
        }
      }
    );
    return setCharacter({});
  }, [id]);

  return (
    <DetailContainer>
      <DetailContent>
        <Title>{character?.name}</Title>
        <Subtitle>STATUS | {character?.status}</Subtitle>
        <Subtitle>SPECIES | {character?.species}</Subtitle>
        <Subtitle>GENDER | {character?.gender}</Subtitle>
        <Subtitle>ORIGIN | {character?.origin?.name}</Subtitle>
      </DetailContent>
      <DetailContentImg>
        <Img src={character.image} alt={character.name} />
      </DetailContentImg>
    </DetailContainer>
  );
};

export default Detail;
