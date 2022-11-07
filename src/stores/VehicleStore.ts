import { VehicleDataInterface, VehicleInterface } from "../models/Vehicles";
import { createContext } from "react";
import { makeObservable, observable, action, computed } from "mobx";
import axios from "axios";


class VehiclesDataStore {
  vehiclesData: VehicleDataInterface = {} as VehicleDataInterface;
  selectedVehicle: VehicleInterface | null = null;

  

  constructor() {
    makeObservable(this, {
      vehiclesData: observable,
      selectedVehicle: observable,
      GetVehiclesData: action,
      info: computed,
    });

    this.GetVehiclesData('https://swapi.dev/api/vehicles/?format=json');
  }
  

  GetVehiclesData = async (url: string) => {
    try {
      this.vehiclesData = (await axios.get(url)).data;
      window.scrollTo(0, 0);
    } catch (e) {
      console.log(e);
    }
  };

  SetSelectedVehicle = (vehicle: VehicleInterface) => {
    if (!vehicle ){
        return;
    }
    if (vehicle.cost_in_credits == "unknown"){
      this.selectedVehicle = null;
      alert('Impossível comprar um veículo com valor indeterminado')
      return
    }
    if (vehicle){
      this.selectedVehicle = vehicle;
    }
  }

  get info() {
    return console.log(this.vehiclesData);
  }
}

export default createContext(new VehiclesDataStore)