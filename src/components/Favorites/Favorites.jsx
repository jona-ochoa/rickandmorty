import React, { useState } from "react";
import Card from "../Card/Card";
import { connect } from "react-redux";
import {
  FavContainer,
  SelectWrapper,
  Select,
  FavContentCard,
  FavContent,
  SelectOptions,
} from "./FavoritesElement";
import { useDispatch } from "react-redux";
import { orderCards, filterCards } from "../../redux/actions";

const Favorites = ({ myFavorites }) => {
  const [aux, setAux] = useState(false);
  const dispatch = useDispatch();

  const handleOrder = (e) => {
    dispatch(orderCards(e.target.value));
    setAux(true);
  };

  const handleFilter = (e) => {
    dispatch(filterCards(e.target.value));
  };

  return (
    <FavContainer>
      <FavContent>
        <SelectWrapper>
          <Select onChange={handleOrder}>
            <SelectOptions value="A">Ascendente</SelectOptions>
            <SelectOptions value="D">Descendente</SelectOptions>
          </Select>
          <Select onChange={handleFilter}>
            <SelectOptions value="Male">Male</SelectOptions>
            <SelectOptions value="Female">Female</SelectOptions>
            <SelectOptions value="Genderless">Genderless</SelectOptions>
            <SelectOptions value="unknown">unknown</SelectOptions>
          </Select>
        </SelectWrapper>
      </FavContent>
      <FavContentCard>
        {myFavorites?.map((fav) => {
          return (
            <Card
              key={fav.id}
              id={fav.id}
              name={fav.name}
              image={fav.image}
              status={fav.status}
              species={fav.species}
              gender={fav.gender}
              origin={fav?.origin}
              onClose={fav.onClose}
            />
          );
        })}
      </FavContentCard>
    </FavContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, null)(Favorites);
