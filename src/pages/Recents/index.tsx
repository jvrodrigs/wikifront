import { Header } from "../../components/Header";
import { ButtonCustom, Buttons, CarouselCtn, Container} from "./styles";
import { useRef, useState } from "react";
import { CaretDoubleLeft, CaretDoubleRight } from "phosphor-react";
import { ItemCarousel } from "../../components/ItemCarousel";
import { Line } from "../../components/DividerLine";

export function Recents (){
    const carousel = useRef<HTMLDivElement | null>(null);

    const [Items, setItems] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    
    const handleLeftClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        if(carousel.current != null) carousel.current.scrollLeft -= carousel.current.offsetWidth;
    };

    const handleRightClick = (event: React.MouseEvent<HTMLButtonElement>)=> {
        event.preventDefault();
        if(carousel.current != null) carousel.current.scrollLeft += carousel.current.offsetWidth;
    };

    return(
        <>
            <Header />
            <main>
                <Line side={true} />
                <Container>
                    <CarouselCtn ref={carousel}>
                        {Items.map( (i) => (
                           <ItemCarousel key={i} info={i.toString()}/>
                        ))}
                    </CarouselCtn>
                </Container>
                <Buttons>
                    <ButtonCustom onClick={handleLeftClick}>
                        <CaretDoubleLeft size={24}/>
                    </ButtonCustom>

                    <ButtonCustom onClick={handleRightClick}>
                        <CaretDoubleRight size={24}/>
                    </ButtonCustom>
                </Buttons>
            </main>
        </>
    )
}