import React, { useState, useEffect } from "react";
import withCapsService from "../../hoc";
import { getCapsName, getSearchItem } from "../../../actions";
import { useDispatch } from "react-redux/es/exports";
import { Link, useHistory } from 'react-router-dom';
import './search-panel.css'

const SearchPanel = ({ capsService }) => {
    const [searchValue, setSearchValue] = useState('')
    const [capsName, setCapsName] = useState([])
    const dispatch = useDispatch()
    const history = useHistory()


    const getCapsInfo = () => {
        return capsService.getAllCaps()
            .then((data) =>
                setCapsName(data)
            )
    }
    useEffect(() => {
        getCapsInfo()
    }, [])

    const onSearchChange = (e) => {
        setSearchValue(e.target.value)
    }

    const onFormSubmit = (e) => {
        e.preventDefault()
        dispatch(getSearchItem(searchValue))
        history.push('/search-res')
        e.target.reset()
        setSearchValue('')
    }



    const filteredCaps = capsName.filter(caps => {
        return caps.brand.name.toLowerCase().includes(searchValue.toLowerCase()) || caps.name.toLowerCase().includes(searchValue.toLowerCase())
    })

    return (
        <div className='input-container'>
            <form className="search-form"
                onSubmit={onFormSubmit}
            >
                <input
                    type='text'
                    onChange={onSearchChange}
                    placeholder='type to search'
                    className='search' />
                <button onClick={() => dispatch(getSearchItem(searchValue))} className='search--btn'><i className="fa-solid fa-magnifying-glass"></i></button>
                <ul className="search-autocomplete">
                    {
                        filteredCaps.map((capsName, id) => {
                            return (
                                searchValue ?
                                    <div key={id}>
                                        <Link onClick={() => setSearchValue('')} to={`/prod-info/${capsName.id}`} style={{ color: "black", textDecoration: 'none' }}>
                                            <li
                                                key={id}
                                                className="search-item"
                                                onClick={() => dispatch(getCapsName(capsName.brand.name))}
                                            >
                                                {capsName.brand.name}<br />
                                                {capsName.name}
                                            </li>
                                        </Link>
                                    </div> : null
                            )
                        })
                    }
                </ul>
            </form>
        </div >
    )
}

export default withCapsService(SearchPanel);