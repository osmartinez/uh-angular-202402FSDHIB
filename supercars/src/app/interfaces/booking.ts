import { User } from "./user";
import { Vehicle } from "./vehicle";

export interface Booking {
    user: User
    vehicle: Vehicle
    startDate: string
    endDate: string
    price: number
    discount: number
}
