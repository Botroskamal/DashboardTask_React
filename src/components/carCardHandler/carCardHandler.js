import { cardsData } from "../../constants/CardsData";
import { useSelector } from "react-redux";

const carCardHandler = () => {
    const carStatus = useSelector(state => state.Filter.carStatus);
    const manufacturer = useSelector(state => state.Filter.manufacturer);
    const searchValue = useSelector(state => state.search.name);

    const filteredCards = cardsData.filter(card => card.status == carStatus && card.manufacturer == manufacturer && card.name.includes(searchValue));

    return filteredCards;
}

export default carCardHandler;