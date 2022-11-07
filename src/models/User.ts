export interface UserInterface {
    personal: {
        name: string;
        email: string;
        tel: string;
        registryNumber: string;
    },
    address: {
        cep: string;
        street: string;
        number: string;
        complement: string;
        city: string;
        state: string;
    }
}