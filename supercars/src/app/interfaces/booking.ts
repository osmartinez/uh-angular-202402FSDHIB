import { User } from "./user";
import { Vehicle } from "./vehicle";

export interface Booking {
    _id: string
    user: User
    vehicle: Vehicle
    startDate: string
    endDate: string
    price: number
    discount: number
}
