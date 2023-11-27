import { useEffect, useState } from "react"
import Modal from "./modal";

export default function Game() {
    const pokemons_json = [
        {
           "id":4,
           "name":"Charmander",
           "type":"Alov",
           "base_experience":62,
           "borderColor": '#E9AA7D',
            "image": 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png'
        },
        {
           "id":7,
           "name":"Squirtle",
           "type":"Su",
           "base_experience":63,
           "borderColor": '#649EB2',
            "image": 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png'
        },
        {
           "id":11,
           "name":"Metapod",
           "type":"Bug",
           "base_experience":72,
           "borderColor": '#8EB359',
            "image": 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/011.png'
        },
        {
           "id":12,
           "name":"Butterfree",
           "type":"Flying",
           "base_experience":178,
           "borderColor": '#EAF3FA',
            "image": 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/012.png'
        },
        {
           "id":25,
           "name":"Pikachu",
           "type":"Electric",
           "base_experience":112,
           "borderColor": '#F3D77B',
            "image": 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png'
        },
        {
           "id":39,
           "name":"Jigglypuff",
           "type":"Normal",
           "base_experience":95,
           "borderColor": '#F1CDD5',
            "image": 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/039.png'
        },
        {
           "id":94,
           "name":"Gengar",
           "type":"Poison",
           "base_experience":225,
           "borderColor": '#7C78A1',
            "image": 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/094.png'
        },
        {
           "id":133,
           "name":"Eevee",
           "type":"Normal",
           "base_experience":65,
           "borderColor": '#C89764',
            "image": 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/133.png'
        }
     ]


     const [resetGame, setResetGame] = useState(false);
     const [pokemons, setPokemons] = useState(pokemons_json);
     const [userPokemon, setUserPokemon] = useState([]);


        const [showModal, setShowModal] = useState(false);
        const [modalMessage, setModalMessage] = useState('');
        const [typeModal, setTypeModal] = useState('');
        const [titleModal, setTitleModal] = useState('')


     useEffect(()=>{
        setPokemons(pokemons_json);
     }, []);
     useEffect(() => {
        if (resetGame) {
            setUserPokemon([]);
            setPokemons(pokemons_json);
            setResetGame(false);
        }
    }, [resetGame]);


     const pokeminSec = (id)=>{
        const clickedPokemonIndex = pokemons.findIndex(pokemon => pokemon.id === id);
        if(userPokemon.length < 4) {
            if (clickedPokemonIndex !== -1) {
                const clickedPokemon = pokemons[clickedPokemonIndex];
                setPokemons(prevPokemons => prevPokemons.filter(pokemon => pokemon.id !== id));
                setUserPokemon(prevUserPokemon => [...prevUserPokemon, clickedPokemon]);
            }
        }
     }

     const pokemonSil = (id) => {
        const clickedUserPokemonIndex = userPokemon.findIndex(pokemon => pokemon.id === id);
        if (clickedUserPokemonIndex !== -1) {
            const clickedUserPokemon = userPokemon[clickedUserPokemonIndex];
            setUserPokemon(prevUserPokemon => prevUserPokemon.filter(pokemon => pokemon.id !== id));
            setPokemons(prevPokemons => [...prevPokemons, clickedUserPokemon]);
        }
    };

    

     useEffect(() => {
    }, [pokemons, userPokemon]);


    const totalUserXP = userPokemon.reduce((total, pokemon) => {
        return total + pokemon.base_experience;
    }, 0);

    const totalRobotXP = pokemons.reduce((total, pokemon) => {
        return total + pokemon.base_experience;
    }, 0);

    const oyunaBashla = ()=>{
       
        console.log("Istifadeci:", totalUserXP)
        console.log("Komp:", totalRobotXP);
        if(userPokemon.length >= 4) {
            if(totalUserXP > totalRobotXP) {
                setModalMessage('Siz qalib gəldiniz!');
                setShowModal(true);
                setTypeModal('win')
                setTitleModal('Siz qalibsiz! :)')

                setTimeout(()=>{
                    setResetGame(true);
                    setShowModal(false);
                }, 2000)
                
            } else if (totalRobotXP > totalUserXP) {
                setModalMessage('Siz məğlub olmuşsunuz!');
                setShowModal(true);
                setTypeModal('lose')
                setTitleModal('Uduzduz :(')
                setTimeout(()=>{
                    setResetGame(true);
                    setShowModal(false);
                }, 2000)

            }
        } else {
            
            setModalMessage('4 əd. personaj seçin');
            setShowModal(true);
            setTypeModal('error')
            setTitleModal('Səhv')

            setShowModal(true);
        }
       
    }


    const closeModal = () => {
        setShowModal(false);
        console.log(showModal)
      };



    return (
        <>
            <div className="flex gameZone justify-between items-start h-full">
                <div className="solTeref">
                    <h2>Ümumi Pokemonlar</h2>
                    <ul className="flex flex-wrap items-around justify-around">
                    
                    
                    {pokemons.map((pokemon, index) => (

                        <li onClick={() => pokeminSec(pokemon.id)} key={index} style={{borderColor: pokemon.borderColor,}} className="bg-gradient-to-t from-colBg-1 to-colBg-2">
                        <div className="type" style={{background: pokemon.borderColor,}}><span>Növ:</span> <p>{pokemon.type}</p></div>
                        <div className="picture">
                            <img src={pokemon.image} alt="" />
                        </div>

                        <div className="name" style={{background: pokemon.borderColor,}}>
                                {pokemon.name}
                        </div>
                        </li>
                    ))}
                </ul>
                </div>
                
                <div className="sagTeref">
                <h2>Sizin Pokemonlar</h2>
                <ul className="flex flex-wrap items-around justify-around">
                    
                {userPokemon.map((pokemon, index) => (
                    <li onClick={() => pokemonSil(pokemon.id)} key={index} style={{borderColor: pokemon.borderColor,}} className="bg-gradient-to-t from-colBg-1 to-colBg-2">
                    <div className="type" style={{background: pokemon.borderColor,}}><span>Növ:</span> <p>{pokemon.type}</p></div>
                    <div className="picture">
                        <img src={pokemon.image} alt="" />
                    </div>

                    <div className="name" style={{background: pokemon.borderColor,}}>
                            {pokemon.name}
                    </div>
                    </li>
                ))}
                </ul>
                </div>
                

            </div>
            
            <div className="fixed_bottom">
            <button onClick={oyunaBashla}>Döyüşə başla</button>
            </div>
            
             <Modal show={showModal} onClose={closeModal} type={typeModal} message={modalMessage} title={titleModal} totalKomp={totalRobotXP} totalUs={totalUserXP} />
        </>
    );
}