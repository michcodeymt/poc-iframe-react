import {useNavigate} from "react-router-dom";
import styled from "styled-components";

const HomeWrapper = styled.div`
  text-align: center;
  padding: 50px;
`;

const Heading = styled.h1`
  font-size: 3rem;
  margin-bottom: 30px;
`;

const Paragraph = styled.p`
  font-size: 1.5rem;
  margin-bottom: 30px;
`;

const Button = styled.button`
  font-size: 1.2rem;
  padding: 10px 20px;
  border-radius: 5px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #0069d9;
  }
`;

export const Home = () => {

    const navigate = useNavigate();

    const goToIframe = () => {
        navigate('/iframe');
    }
    return(
        <HomeWrapper>
            <Heading>Bienvenido a mi sitio web</Heading>
            <Paragraph>Este es el contenido de mi página de inicio.</Paragraph>
            <Button onClick={goToIframe}>Navegar al iFrame</Button>
        </HomeWrapper>
    )
}
