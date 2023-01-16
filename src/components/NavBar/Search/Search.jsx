import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { carNameActions } from '../../../store/index-tk';

import './Search.scss'

const Search =() => {
    const dispatch = useDispatch();

    const [enteredData, setEnteredData] = useState('');

    const changeHandler = (event) => {
        setEnteredData(event.target.value);
        dispatch(carNameActions.findingCar(event.target.value));
    }

    return (
        <div className="search">
            <img src="src/assets/img/nav-bar/Search.png" alt="Search"></img>
            <form>
                <input onChange={changeHandler} type="text" placeholder="Search or type" value={enteredData}></input>
            </form>
        </div>
    );
};

export default Search;