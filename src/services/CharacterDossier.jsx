import React from 'react'
import { useState, useEffect } from 'react'

export const CharacterDossier = () => {

    const [characterId, setCharacterId] = useState(1)
    const [character, setCharacter] = useState(null)

    const fetchCharacterData = async (id) => {
        try {
            const response = await fetch (`https://rickandmortyapi.com/api/character/${id}`) 
            const data = await response.json();
            setCharacter(data);
        } catch (error) {
            console.log("Error fetching data")

        }
    
    };

    useEffect(() => {
        fetchCharacterData(characterId);
    }, [characterId]);
  
    return (
    <div style={{border:"1px solid black", padding: "20px", width: "300px", textAlign: "center" }}>

        <h1>
        Character dossier
        </h1>

        <input
            type="number"
            value={characterId}
            onChange={(e) => setCharacterId(Number(e.target.value))}
            />

        {character && (
            <div style={{ marginTop:"20px" }}>
            <img src={character.image} width='200'/>
            <h2> {character.name} </h2>
            <p> Status: {character.status} </p>

            </div>
        )}

    </div>
  )
}
