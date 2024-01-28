import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../store"
import { Popup } from "./Popup";
import { popupActions } from "../store/popupReducer";

export const PopupSystem = () => {
    const popupSlice = useSelector((state : RootState) => state.popup);
    const dispatch = useDispatch();
    return (
        <Popup show={popupSlice.show} onClose={() => {dispatch(popupActions.closePopup())}}>
            <div style={{width : "100%",height : "4rem",backgroundColor : "red",color : "white",display : "flex",justifyContent : "center",alignItems : "center",fontWeight :"bold",fontSize : "36px"}}>
                خطأ
            </div>
            <div style={{paddingInline : "10px"}}>
           {popupSlice.currentElement} 
           </div>
        </Popup>
    )
}