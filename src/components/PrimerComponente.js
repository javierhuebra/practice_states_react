import React from 'react';
import ComponenteChild from './ComponenteChild';
import '../stylesheets/PrimerComponente.css'
function PrimerComponente(){

    return(
        <div className='PrimerComponente'>
            <h1>Primer titulo jejej tuki</h1>
            <h3>Titulos de abajoooo</h3>
            <h3>Titulos de abajoooo</h3>
            
            <ComponenteChild/>
        </div>
    );
}
export default PrimerComponente;