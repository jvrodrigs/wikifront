import * as Dialog from '@radix-ui/react-dialog';
import { User, UserPlus } from 'phosphor-react';
import { useNavigate } from 'react-router-dom';
import { ButtonIdentify, ContainerDescription, Content, Overlay, PortalContainer } from './styles';

export function ModalIdentifyUser(){
    const navigate = useNavigate();
    return(
        <PortalContainer>
            <Overlay />
            <Content>
                <p>Que tipo de usuário você é?</p>
                <ContainerDescription>
                    <ButtonIdentify 
                        onClick={() => {navigate('/enter')}}
                    >
                        <User size={30} />
                        <h3>
                            Veterano
                        </h3>
                    </ButtonIdentify>

                    <ButtonIdentify
                        onClick={() => {navigate('/create')}}
                    >
                        <UserPlus size={30} />
                        <h3>
                            Novato
                        </h3>
                    </ButtonIdentify>
                </ContainerDescription>
            </Content>
        </PortalContainer>
    )
}