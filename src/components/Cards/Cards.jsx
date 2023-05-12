import Card from "../Card/Card";
import { Container } from "./CardsElements";

const Cards = ({ characters, onClose }) => {

  return (
    <Container>
      {characters?.map(
        ({ id, name, status, species, gender, origin, image }) => (
          <Card
            id={id}
            key={id}
            name={name}
            status={status}
            species={species}
            gender={gender}
            origin={origin.name}
            image={image}
            onClose={onClose}
          />
        )
      )}
    </Container>
  );
};

export default Cards;
