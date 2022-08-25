import React from 'react';
import { useState } from 'react';
import '../stylesheets/ComponenteChild.css'

const ComponenteChild = () =>{
    const [count, setCount]=useState(0);
    
    

    const increase = () =>{
        console.log("increase funciona");
        setCount(count+1);
    }

    const decrease = ()=>{ //propuesta de la consigna - funcion que resta a count
        console.log("funcion decrease activada");
        setCount(count-1);
    }

    //Creacion del hook que maneja el objeto name/age
    const [info, setInfo] = useState({
        name: 'javi',
        age: '29'
    });

    const changeInfoAndAddKey = () =>{ //funcion que modifica el estado del objeto info
        setInfo({...info, name:'Javier Emanuel', lastName:'Huebra'});
        document.querySelector('.hook-name-child').style.color='white';
        console.log(info);
    }

    //creacion de hook loading
    const [loading, setLoading] = useState(false);

    //funcion que cambia el estado de loading
    const changeLoading = () =>{
        if(loading==false){
            setLoading(true);
            document.querySelector('.state-loading').style.color='yellowgreen';
        }else{
            setLoading(false);
            document.querySelector('.state-loading').style.color='red';
        }
    }

    //creacion de hook animals
    const [animals, setAnimals] = useState(['Raccoon']);
    
    //funcion que agrega animales al estado
    const addAnimals = () =>{
        setAnimals([...animals, 'Rat', 'Bird', 'Dog', 'Cat', 'Snake']);
        console.log(animals); 
    }
    return(
        <div className='ComponenteChild'>
            <h2>Soy un componente child de PrimerComponente tukiChild</h2>
            <h3>Contador: {count} texto al azar!</h3>
            <button onClick={decrease}>Decrease</button>
            <button onClick={increase}>Increase</button>
            
            <div className='hook-name'>
                <h2>Hook Info con objeto!</h2>
                <div className='hook-name-child'>
                    <h3>info.name: {info.name}</h3>
                    <h3>info.age: {info.age} </h3>
                    <h3>info.lastName: {info.lastName == null ? 'No existe' : info.lastName}</h3>
                </div>
                <button onClick={changeInfoAndAddKey}>Change Info</button>
            </div>
            
            <div className='loading'>
                <h2>Hook Loading change state</h2>
                 <h3>State:<span className='state-loading'>{loading==false ? ' false' : ' true'}</span></h3>
                 <button onClick={changeLoading}>Change Loading</button>   
            </div>
            <div className='Animals'>
                <h2>Animals</h2>
                <h3>El arreglo posee: {animals.length==1 ? animals[0] : 'En consola se muestra la modificacion'}</h3>
                <button onClick={addAnimals}>Add animals</button>
            </div>
        </div>
    );
}

export default ComponenteChild;