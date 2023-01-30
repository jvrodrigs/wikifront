import { Header } from "../../components/Header";
import { ButtonContainer, Card, Cards, Container, Grid, GridContainer, ImageContainer, SectionContainer, TextContainer } from "./styles";
import land from "../../assets/lanscape.svg";
import { Line } from "../../components/DividerLine";
import { Barricade, Camera, WifiHigh } from "phosphor-react";
import { Footer } from "../../components/Footer";
import { Recents } from "../../components/Recents";

export function Page() {
    return(
        <>
            <Header />
            <main>
                <SectionContainer section="info">
                    <Container id="info">
                        <GridContainer>
                            <ImageContainer>
                                <img src={land} />
                            </ImageContainer>
                            <TextContainer>
                                <h2>Com poucas informações, há grandes mudanças.</h2>
                                <p>
                                    Lorem ipsum dolor sit amet. Qui commodi suscipit quo voluptate corporis ut possimus sint et natus consequuntur non aliquam dolores vel reprehenderit excepturi. 
                                    Et tenetur facere non error amet aut quisquam dolor et sint possimus.
                                </p>
                                <ButtonContainer type="button" href="#">
                                    Informe aqui!
                                </ButtonContainer>
                            </TextContainer>
                        </GridContainer>
                    </Container>
                </SectionContainer>

                <Line side={true} />

                <SectionContainer>
                    <Container>
                        <Grid>
                           <header>
                                <h3>Como faço para informar?</h3>
                                <p>Com a chegada no mercado, a <strong>WikiBuracos</strong> tem o objetivo de fazer com que pessoas se ajudem, informando aonde pode está ocorrendo manutenções de infraestrutura urbana, buracos, construções e etc..</p>
                           </header>
                        </Grid>
                        <Cards>
                            <Card>
                                <i>
                                    <Barricade  size={50}/>
                                </i>
                                <h3>Identificou um problema </h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. At, sapiente similique voluptatibus eligendi quidem repellendus ducimus, eveniet expedita molestiae quis quae obcaecati sequi deserunt ab dolore dolor quaerat aliquam debitis.
                                </p>
                            </Card>

                            <Card>
                                <i>
                                    <Camera size={50}/>
                                </i>
                                <h3>Tire uma foto</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. At, sapiente similique voluptatibus eligendi quidem repellendus ducimus, eveniet expedita molestiae quis quae obcaecati sequi deserunt ab dolore dolor quaerat aliquam debitis.
                                </p>
                            </Card>

                            <Card>
                                <i>
                                    <WifiHigh size={50}/>
                                </i>
                                <h3>Use o nosso site</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. At, sapiente similique voluptatibus eligendi quidem repellendus ducimus, eveniet expedita molestiae quis quae obcaecati sequi deserunt ab dolore dolor quaerat aliquam debitis.
                                </p>
                            </Card>
                        </Cards>
                    </Container>
                </SectionContainer>
                
                <Line side={false} />

                <SectionContainer>
                   <Container>
                        <Grid>
                            <header>
                                <h3>Mais Recentes</h3>
                                <p>Estas publicaçãoes foram feitas por nossos usuários do dia-a-dia. Com elas, você pode ver um pouco do que queremos entregar a todos!</p>
                            </header>
                        </Grid>
                        <Recents />
                   </Container>
                </SectionContainer>

            </main>
            <Footer />
        </>
    )
}