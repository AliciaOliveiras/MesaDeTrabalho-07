import { useState } from "react";

function Item(props){

    const [numeros, setNumeros] = useState([]);

        function handleClick() {
          setNumeros([...numeros, numeros.length]);
      
        }
        return (
          <div>
            <ul>
                {numeros.map((numero, index) => (
                <li key={index}> O item {numero} foi adicionado a lista!</li>
            ))}
            </ul>
            <button onClick={handleClick}>Clique</button>
          </div>
        );
}

export default Item;
