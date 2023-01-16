import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterActions } from '../../store/index-tk';
import './Filter.scss';

const Filter = () => {
    const dispatch = useDispatch();


    const [carStatus, setCarStatus] = useState('All');
    const [carManufacturer, setCarManufacturer] = useState('All');

    const statusChangeHandler = (event) => {
        setCarStatus(event.target.value);
        dispatch(filterActions.filterByStatus(event.target.value));
    }

    const typeChangeHandler = (event) => {
        setCarManufacturer(event.target.value);
        dispatch(filterActions.filterByManufacturer(event.target.value));
    }

    return(
        <div className="filter">
            <div className="filterSpecs">
                <select onChange={statusChangeHandler} className='filter-menu' name="status" id="carStatus">
                    <option value="All">All</option>
                    <option value="New">New</option>
                    <option value="Used">Used</option>
                </select>
                <select onChange={typeChangeHandler} className='filter-menu' name="type" id="carType">
                    <option value="All">All</option>
                    <option value="Toyota">Toyota</option>
                    <option value="BMW">BMW</option>
                    <option value="Mercedes">Mercedes</option>
                    <option value="Bentley">Bentley</option>
                    <option value="Porche">Porche</option>
                </select>
            </div>
            <div className="filterSorting">
                <div>
                    <img src="src/assets/img/nav-bar/menu grid.png" alt="" />
                </div>
                <div>
                    <img src="src/assets/img/nav-bar/filter.png" alt="" />
                </div>
            </div>
        </div>
    );
}

export default Filter;