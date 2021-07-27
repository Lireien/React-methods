import {useState} from "react";
import {useSelector} from "react-redux";
import styledPopUp from "./styledPopUp";
import ReactDom from "react-dom";

const PopUp = ({children, open}) => {
    const [isOpen, setIsOpen] = useState(false);
    const {value, error, success} = useSelector((state) => state.counter);
    const handleOpenPopup = ({event}) => {
        if (!event) return;
        const { value, error, success } = event;
        const limitError = { error }> 15;
        const limitValue = { value } > 50;
        const endGame = { success }===33;
        if (!limitError && !limitValue && !endGame) return setIsOpen(false);
        if (limitError || limitValue || endGame) return setIsOpen(true);
    }
    const handleClosePopUp = () => setIsOpen(false);
    if (!open) return null;
    return ReactDom.createPortal(
        <styledPopUp className='popUp' open={isOpen} onChange={handleOpenPopup}>
            <button onClick={handleClosePopUp}>Close</button>
            {children}
        </styledPopUp>,
        document.getElementById('portal')
    )

}
export default PopUp;