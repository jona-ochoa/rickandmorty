import { Link } from "react-router-dom";
import { Container, WrapperDiv , AboutWrap, Image, AboutWrapText, TextLink, Text } from "./AboutElement";
import image from '../../assets/image/jochoa-removebg-preview.png'

const About = () => {
  return (
    <Container id="about" className='about'>
      <WrapperDiv>
      <AboutWrap>
        <Image src={image}
          alt="Jonatan"
        />
      </AboutWrap>
      <AboutWrapText>
        <Text>Nombre: Jonatan Ochoa</Text>
        <Text>Edad: 34 años</Text>
        <Text>Ciudad: Jesús María, Córdoba</Text>
        <Text>Nacionalidad: Argentino</Text>
        <Text>Cohorte: FT-38a</Text>
        <Text>Grupo: N°3</Text>
        <Link to="https://github.com/jona-ochoa">
          <TextLink>Github: jona-ochoa ↗</TextLink>
        </Link>
        <Link to="https://linkedin.com/in/jonaochoa">
          <TextLink>LinkedIn: jonaochoa ↗</TextLink>
        </Link>
      </AboutWrapText>
      </WrapperDiv>
    </Container>
  );
};

export default About;
