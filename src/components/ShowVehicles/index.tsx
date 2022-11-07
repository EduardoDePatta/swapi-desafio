import { VehicleInterface } from "../../models/Vehicles";
import VehicleItem from "../VehicleItem";
import { Container } from "./styles";

interface VehicleItemsProps{
    vehiclesData: VehicleInterface[];
}
export const ShowVehicles = ({vehiclesData}: VehicleItemsProps) => {
    return (
        <Container>
            {vehiclesData && 
                vehiclesData.map((item, index) => {
                    return (
                        <VehicleItem key={index} {...item}/>
                    );
                })
            }
        </Container>
    )
}