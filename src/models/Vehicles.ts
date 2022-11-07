export interface VehicleInterface {
    id: number;
    consumables: string;
    name: string;
    model: string;
    manufacturer: string;
    cost_in_credits: string;
    length: string;
    max_atmosphering_speed: string;
    crew: string;
    passengers: string;
    cargo_capacity: string;
    vehicle_class: string;
}

export interface VehicleDataInterface {
    count: number;
    next: string | null;
    previous: string | null;
    results: VehicleInterface[];
}