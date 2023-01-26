import { Header } from "../../components/Header";

import PageNotFound from "../../assets/pagenotfound.svg";
import { Container } from "./styles";
import { useNavigate } from "react-router-dom";

export function PageNotFoundApp(){
    const navigate = useNavigate();
    return(
        <>
            <Header />
            <main>
                <Container>
                    <img src={PageNotFound} alt="" />
                    <h3>Página Inválida!</h3>
                    <button
                        onClick={() => { navigate("/")}}
                    >
                        Voltar
                    </button>
                </Container>
            </main>
        </>
    )
}