import { ItemContainer, InfoContainer, ImageContainer, NameInfo } from "./styles";

interface ICarouselProps {
    info: string;
}

export function ItemCarousel({ info }: ICarouselProps) {
    return(
        <ItemContainer>
            <ImageContainer>
                <img src="https://images.unsplash.com/photo-1494783367193-149034c05e8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />
            </ImageContainer>
            <InfoContainer>
                <NameInfo>Nome {info}</NameInfo>
            </InfoContainer>
        </ItemContainer>
    )
}