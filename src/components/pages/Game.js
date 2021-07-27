import List from "../List";
import {LIST_TYPES} from "../../const";
import StyledSection from "../pages/Page-styles/StyledSection";

const Game = () => {
    return (
        <StyledSection>
            <List title={LIST_TYPES.MUTATING} isLinkable={false}/>
            <List title={LIST_TYPES.MAIN} isLinkable={false}/>
            <List title={LIST_TYPES.NON_MUTATING} isLinkable={false}/>
        </StyledSection>
    );
};
export default Game;
