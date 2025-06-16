import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 70%;
    box-shadow: 0px 0px 5px whitesmoke;
    background: none;
    height: 50px;
    border-radius: 10px;
    font-size: 1.5rem;

    @media only screen and (max-width:768px) {
        font-size: 1rem;
    }
`

const SearchBar = () => {
    return (
        <Container>
            <ManageSearchIcon style={{
                height: "30px",
                width: "40px",
                color: "#a3a3a3"
            }}
            />
            <input title='in'
                placeholder='search with prompt or name...'
                style={{
                    border: "none",
                    height: "100%",
                    width:"inherit",
                    background: "none",
                    outline: "none",
                    color: "inherit",
                    fontWeight: 500,
                    fontSize: "inherit"
                }}
            />
        </Container>
    )
}

export default SearchBar
