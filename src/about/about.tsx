import styled from "styled-components";

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AboutHeading = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const AboutText = styled.p`
  font-size: 1.2rem;
  line-height: 1.5;
  text-align: center;
  max-width: 600px;
`;

export const About = () => {
    return(
        <AboutContainer>
            <AboutHeading>About Us</AboutHeading>
            <AboutText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel
                risus tortor. Sed at quam eu mauris tincidunt porttitor.
            </AboutText>
        </AboutContainer>
    )
}
