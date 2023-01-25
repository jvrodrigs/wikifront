import { Container, Logo, Menu, NavContainer, Section, Title, ToggleContainer } from "./styles";
import LogoWiki from "../../assets/wiki1.png";
import { useEffect, useRef, useState } from "react";
import { List, User, X } from "phosphor-react";

export function Header() {
    const [isMenu, setMenu] = useState(false);
    const [isStatusToggle, setStatusToggle] = useState(false);
    return(
        <Container id="header">
            <NavContainer>
                <Logo src={LogoWiki} alt="Logomarca da empresa WikiBuracos" />
                <Menu>
                    <ul>
                        <Section>
                            <Title href="#">Recentes</Title>
                        </Section>
                        <Section>
                            <Title href="#">Mapa</Title>
                        </Section>
                        <Section>
                            <Title href="#">Fotos</Title>
                        </Section>
                        <Section>
                            <i>
                                <User size={20} color={"black"}/>
                            </i>
                        </Section>
                    </ul>
                </Menu>
                <ToggleContainer open={!isStatusToggle} onClick={() => setMenu(!isMenu)}>
                    <List />
                </ToggleContainer>

                <ToggleContainer open={isStatusToggle} onClick={() => setMenu(!isMenu)}>
                    <X />
                </ToggleContainer>
            </NavContainer>
        </Container>
    )
}