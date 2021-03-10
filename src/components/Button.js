import React,{useState} from 'react';
import "../App.css"

export const Button = ({label}) => {

    let [nome,setNumero] = useState(label)

    const Ciao = async() => {
        setNumero(prevState => prevState +'o') 
        alert(nome)
    
    }
    return (
        <>
        <button class="ciao" onClick={Ciao}>
           {nome}
        </button>
        </>
    )
}

