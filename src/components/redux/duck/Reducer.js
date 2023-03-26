import { DAT_GHE, HUY_GHE, THANH_TOAN } from "../types/BookingTypes";

const initialState = {
    ListGheSelect : [
    ]
}


const BookingReducer = (state = initialState , action) =>{
    switch (action.type){
        case DAT_GHE :{
            let ListGheSelectUpdate = [...state.ListGheSelect];
            let index = ListGheSelectUpdate.findIndex((gheSelect) =>
                gheSelect.soGhe === action.ghe.soGhe
            )
            if(index !== -1){
                ListGheSelectUpdate.splice(index,1);
            }else{
                ListGheSelectUpdate.push(action.ghe)
            }
            // Cap Nhat Lai state Render Giao Dien
            state.ListGheSelect = ListGheSelectUpdate;
            return {...state}
        }
        case HUY_GHE :{
            let ListGheSelectUpdate = [...state.ListGheSelect];
            let index = ListGheSelectUpdate.findIndex((gheSelect) =>
                gheSelect.soGhe === action.ghe.soGhe
            )
            if(index !== -1){
                ListGheSelectUpdate.splice(index,1);
            }
            console.log(index)
            // Cap Nhat Lai state Render Giao Dien
            state.ListGheSelect = ListGheSelectUpdate;
            return {...state}
        }
        case THANH_TOAN :{
            let ListGheSelectUpdate = [...state.ListGheSelect];
            console.log(ListGheSelectUpdate)
            let index = ListGheSelectUpdate.findIndex((gheSelect) =>
                gheSelect.daDat === false
            )
            
            console.log(index)
            if(index !== -1){
              ListGheSelectUpdate.map((ghe) => 
                ghe.daDat = true
                
              )
            }
            // Cap Nhat Lai state Render Giao Dien
            
            return {...state ,ListGheSelect : [] , }
        }
      
        default : return {...state}
    }
}
export default BookingReducer;