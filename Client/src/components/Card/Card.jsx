import { useState, useEffect } from "react";
import {
  Button,
  DivContainer,
  CardWrapper,
  Image,
  TextWrapper,
  Text,
  TextNameLink,
  ButtonFav,
} from "./CardElement.js";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addFav, removeFav } from "../../redux/actions.js";

const Card = ({
  id,
  name,
  status,
  species,
  gender,
  origin,
  image,
  onClose,
  addFav,
  removeFav,
  myFavorites,
}) => {
  const [isFav, setIsFav] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      removeFav(id);
    } else {
      setIsFav(true);
      addFav({ id, name, status, species, gender, origin, image, onClose });
    }
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id && fav.id > 0) {
        setIsFav(true);
      }
    });
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, [myFavorites]);

  
  return (
    <DivContainer>
      {loading ? (
        <>
          <CardWrapper>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Loading_2.gif"
              alt="Cargando..."
            />
          </CardWrapper>
        </>
      ) : (
        <>
          <CardWrapper>
            <ButtonFav onClick={handleFavorite}>
              {isFav ? "❤️" : "🤍"}
            </ButtonFav>
            <Image src={image} alt={name} />
            <Button onClick={() => onClose(id)}>x</Button>
          </CardWrapper>
          <TextWrapper>
            <Link to={`/detail/${id}`}>
              <TextNameLink>Name: {name}</TextNameLink>
            </Link>
            <Text>Status: {status}</Text>
            <Text>Specie: {species}</Text>
            <Text>Gender: {gender}</Text>
            <Text>Origin: {origin}</Text>
          </TextWrapper>
        </>
      )}
    </DivContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => {
      dispatch(addFav(character));
    },
    removeFav: (id) => dispatch(removeFav(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
