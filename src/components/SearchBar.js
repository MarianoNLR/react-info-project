import React from 'react'
import {useState} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function SearchBar(props) {
    const [filter, setFilter] = useState('')
    const [canSearch, setCanSearch] = useState(false);

    const handleSearch = (event) => {
        setFilter(event.target.value);
        event.target.value.length >= 3 ? setCanSearch(true) : setCanSearch(false)
    }

    const checkEnterKey = (e) =>{
        if(e.key === 'Enter' && canSearch){
            props.changeValue(filter);
        }
    }

    return(
            <InputGroup className="mb-3" style={{marginTop: '20px'}}>
                        <Form.Control
                        placeholder="Search..."
                        aria-label="Search"
                        aria-describedby="basic-addon2"
                        onChange={handleSearch}
                        onKeyDown={checkEnterKey}
                        />
                        <Button style={{backgroundColor: '#20232a'}} variant="secondary" id="button-addon2" onClick={()=> props.changeValue(filter)} disabled={!canSearch}>
                        🔍︎
                        </Button>
                </InputGroup> 
    )

}

export default SearchBar