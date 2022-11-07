import { observer } from "mobx-react";
import { Container } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { StarsContainer, StarsContainerBottom } from "./styles";
import VehicleStore from "../../stores/VehicleStore";
import { useContext } from "react";
import { ShowVehicles } from "../../components/ShowVehicles";
import { PageChange } from "../../components/PageChange";
const Home = () => {
  const vehiclesStore = useContext(VehicleStore);
  const { vehiclesData, GetVehiclesData } = vehiclesStore;

  async function handleChange(type: "previous" | "next") {
    let url: string | null = "";

    type === "previous"
      ? (url = vehiclesData.previous)
      : (url = vehiclesData.next);

    if (!url) {
      return;
    }

    try {
      GetVehiclesData(url);
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <Container>

        <Header />
        <StarsContainer />

        <StarsContainerBottom />

        {vehiclesData != null && (
          <ShowVehicles vehiclesData={vehiclesData.results} />
        )}
        <PageChange
          previousUrl={vehiclesData.previous}
          nextUrl={vehiclesData.next}
          handlePageChangeClick={handleChange}
        />

      <Footer />

    </Container>
  );
};

export default observer(Home);
