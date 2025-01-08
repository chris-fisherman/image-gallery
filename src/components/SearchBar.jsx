/**** REQUIRE STATEMENTS: imports ****/
import React, { useState } from "react";


/**** SEARCH BAR ****/
function SearchBar({ searchText, setTerm }) {
    const [text, setText] = useState("")

    const onSubmit = (e) => {
        e.preventDefault()
        searchText(text)
    }

    return (
        <form className='searchForm' onSubmit={onSubmit}>
            <input 
                className='searchForm-input'
                type="search" 
                name="search"
                placeholder='Pesquise qualquer coisa...'
                onChange={(e) => {setText(e.target.value); setTerm(e.target.value)}}
            />
            <button className='searchForm-button' type="submit">Pesquisar</button>
        </form>
    )
}

export default SearchBar