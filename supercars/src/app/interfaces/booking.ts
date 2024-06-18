import { User } from "./user";
import { Vehicle } from "./vehicle";

export interface Booking {
    user: User
    vehicle: Vehicle
    startDate: Date
    endDate: Date
    price: number
    discount: number
}
