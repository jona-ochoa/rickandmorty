import { Link } from "react-router-dom";
import { Container, AboutWrap, Image, AboutWrapText, TextLink } from "./AboutElement";

const About = () => {
  return (
    <Container id="about" className='about'>
      <AboutWrap>
        <Image          
          src={
            "https://jonaochoa.vercel.app/static/media/jonacode.3b5e728e432e6b1e1dae.jpg"
          }
          alt="Jonatan"
        />
      </AboutWrap>
      <AboutWrapText>
        <h4>Nombre: Jonatan Ochoa</h4>
        <h4>Edad: 34 años</h4>
        <h4>Ciudad: Jesús María, Córdoba</h4>
        <h4>Nacionalidad: Argentino</h4>
        <h4>Cohorte: FT-38a</h4>
        <h4>Grupo: N°3</h4>
        <Link to="https://github.com/jona-ochoa">
          <TextLink>Github: jona-ochoa</TextLink>
        </Link>
        <Link to="https://linkedin.com/in/jonaochoa">
          <TextLink>LinkedIn: jonaochoa</TextLink>
        </Link>
      </AboutWrapText>
    </Container>
  );
};

export default About;
