import { Container, Logo, Menu, NavContainer, Section, Title, ToggleContainer } from "./styles";
import LogoWiki from "../../assets/wiki1.png";
import { useState } from "react";
import { List, User, X } from "phosphor-react";

import * as Dialog from '@radix-ui/react-dialog';
import { ModalIdentifyUser } from "../ModalIdentifyUser";

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
                            <Dialog.Root>
                                <Dialog.Trigger asChild>
                                    <i>
                                        <User size={20} color={"black"}/>
                                    </i>
                                </Dialog.Trigger>

                                <ModalIdentifyUser />
                            </Dialog.Root>
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