import {useEffect, useState} from "react";
import Item from "../Item";
import {StyledH2, StyledRow, StyledUl} from "./StyledForList";
import {listFilter} from "../../helpers";
import Input from "../Input";
import {useSelector} from "react-redux";
import {LIST_TYPES} from "../../const";
import {RootState} from 'typesafe-actions';

interface Props{
    title:string;
    isMovable:boolean;
    isLinkable:boolean;
}

const List = ({title, isMovable, isLinkable}:Props) => {
    const list = useSelector((state: RootState) => state.list);
    const iList = list.filter(listFilter(title));
    const [filter, setFilter] = useState("");
    const listFilterer = (i) => i.name.includes(filter);
    const [filteredList, setFilteredList] = useState(iList.filter(listFilterer));
    const handleFilterChange = ({value}) => {
        setFilter(value);
    };

    useEffect(() => {
        setFilteredList(iList.filter(listFilterer));
    }, [filter, list]);
    const items = filter ? filteredList : iList;

    return (
        <StyledRow data-testid="list-testId">
            <StyledH2>{`${title} ${filteredList.length}/${iList.length}`}</StyledH2>
            <Input value={filter} onChange={handleFilterChange}/>
            <StyledUl>
                {items.map((i) => (
                    <Item key={i.name}
                          item={i}
                          isMain={title === LIST_TYPES.MAIN}
                          isMovable={isMovable}
                          isLinkable={isLinkable}
                          isConstructor={i.name === 'constructor' }
                          />
                ))}
            </StyledUl>
        </StyledRow>
    );
};
export default List;
