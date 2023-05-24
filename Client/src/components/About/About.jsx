import { Link } from "react-router-dom";
import { Container, WrapperDiv , AboutWrap, Image, AboutWrapText, TextLink, Text } from "./AboutElement";

const About = () => {
  return (
    <Container id="about" className='about'>
      <WrapperDiv>
      <AboutWrap>
        <Image src={"https://jonaochoa.vercel.app/static/media/jonacode.3b5e728e432e6b1e1dae.jpg"}
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
