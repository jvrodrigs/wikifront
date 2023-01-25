import { InstagramLogo, TwitterLogo, YoutubeLogo } from "phosphor-react";
import { Brand, Container, FooterContainer, Grid, SectionContainer, Social } from "./styles";
import wiki from "../../assets/wiki3.png";

export function Footer() {
    return(
        <FooterContainer>
            <SectionContainer>
                <Container>
                    <Grid>
                        <Brand>
                            <p>© 2023</p>
                            <p>Todos os direitos reservados.</p>
                        </Brand>
                        <Social>
                            <a href="#">
                                <InstagramLogo size={30} color="white"/>
                            </a>
                            <a href="#">
                                <TwitterLogo size={30} color="white"/>
                            </a>
                            <a href="#">
                                <YoutubeLogo size={30} color="white"/>
                            </a>
                        </Social>
                    </Grid>
                </Container>
            </SectionContainer>
        </FooterContainer>
    )
}