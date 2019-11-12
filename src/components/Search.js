import React, { useState } from 'react';

export function Search(props){
    const [form, setForm] = useState('')
    // const [found, setFound] = useState([])
    console.log(props.character);
    

    return (
        <div>
            <form onSubmit={(e) => {
                    e.preventDefault()
                    const search = props.character.filter((item) => {
                        return item.name.toLowerCase().includes(form)
                    })
                    props.setCharacter(search)
                    // setFound(search)
                }} >
                <h3>Search Character</h3>
                <input type='text' name='name' value={form} onChange={(e) => setForm(e.target.value)} ></input>
                <button type='submit'>Search</button>
            </form>
        </div>
    )
        
}