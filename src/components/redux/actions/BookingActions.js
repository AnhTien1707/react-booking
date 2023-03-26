import { DAT_GHE, HUY_GHE, THANH_TOAN } from "../types/BookingTypes"

export const DatGheAction = (ghe) =>{
    return {
        type :DAT_GHE,
        ghe
    }
}
export const HuyGheAction = (ghe) => {
    return {
        type :HUY_GHE,
        ghe
    }
}
export const ThanhToanAction = () =>{
    return {
        type : THANH_TOAN,
       
    }
}