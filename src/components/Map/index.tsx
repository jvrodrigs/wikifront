import { Barricade } from "phosphor-react";
import { Map, Marker } from "pigeon-maps"
import { useEffect, useState } from "react";

declare type Point = [number, number];

export function MapAndPoints() {
    const [center, setCenter] = useState<Point>();
    const [hue, setHue] = useState(0)
    const color = `hsl(${hue % 360}deg 39% 70%)`;
    const [points, setPoints] = useState([1,2,3,4,5,6,7,8,9]);

    useEffect( () => {
        
        if("geolocation" in navigator){
            navigator.geolocation.getCurrentPosition(local => {
                setCenter([local.coords.latitude, local.coords.longitude]);
            })   
        }

    });

    return(
        <Map
            height={600} 
            center={center}
        >
            {points.map( (p) => {
                return(
                    <Marker key={p}
                        width={50}
                        anchor={center} 
                        color={color} 
                        onClick={() => setHue(hue + 20)} 
                    />
                )
            })}
        </Map>
    )
}