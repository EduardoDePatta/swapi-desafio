import { VehicleInterface } from "../../models/Vehicles";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react";
import VehicleStore from "../../stores/VehicleStore";
import { useContext } from "react";
import {
  BuyButton,
  Container,
  DetailName,
  Details,
  DetailValue,
  DetailWrapper,
  ItemImg,
  MainInfo,
  Manufacturer,
  Model,
  Name,
} from "./styles";

import img_vehicle from "../../assets/spaceship-1.png";

const VehicleSelected = (selectedVehicle: VehicleInterface) => {
  const navigate = useNavigate();
  const vehicleStore = useContext(VehicleStore);
  const { SetSelectedVehicle } = vehicleStore;

  function handleBuy() {
    SetSelectedVehicle(selectedVehicle);
    window.scrollTo(0, 0);
    navigate("/checkout");
  }

  return (
    <Container onClick={handleBuy}>
      <MainInfo>
        <Name>{selectedVehicle.name}</Name>
        <Model>{selectedVehicle.model}</Model>
        <Manufacturer>{selectedVehicle.manufacturer}</Manufacturer>
      </MainInfo>
    <ItemImg src={img_vehicle} />

      <Details>
        <DetailWrapper>
          <DetailName>Max. Atm. Speed:</DetailName>
          <DetailValue>{selectedVehicle.max_atmosphering_speed}</DetailValue>
        </DetailWrapper>

        <DetailWrapper>
          <DetailName>Length:</DetailName>
          <DetailValue>{selectedVehicle.length}</DetailValue>
        </DetailWrapper>

        <DetailWrapper>
          <DetailName>Crew:</DetailName>
          <DetailValue>{selectedVehicle.crew}</DetailValue>
        </DetailWrapper>

        <DetailWrapper>
          <DetailName>Passengers:</DetailName>
          <DetailValue>{selectedVehicle.passengers}</DetailValue>
        </DetailWrapper>

        <DetailWrapper>
          <DetailName>Cargo Capacity:</DetailName>
          <DetailValue>{selectedVehicle.cargo_capacity}</DetailValue>
        </DetailWrapper>

        <DetailWrapper>
          <DetailName>Consumables:</DetailName>
          <DetailValue>{selectedVehicle.consumables}</DetailValue>
        </DetailWrapper>

        <DetailWrapper>
          <DetailName>Vehicle Class:</DetailName>
          <DetailValue>{selectedVehicle.vehicle_class}</DetailValue>
        </DetailWrapper>
      </Details>

      <BuyButton onClick={handleBuy}>
        Buy Now for <span>$ {selectedVehicle.cost_in_credits}</span>
      </BuyButton>
    </Container>
  );
};

export default observer(VehicleSelected);
