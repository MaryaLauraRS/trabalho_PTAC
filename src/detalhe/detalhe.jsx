import { useParams } from "react-router-dom";
import Componetes from "../Componentes/componentes";

export default function Detalhe(){
    const { id } = useParams();
    
    const lista = JSON.parse( localStorage.getItem("lista"));

    const produto = lista.filter((objeto) => {
        if(objeto.id == id){
        return objeto;
        }
        return null;
    })

    console.log(produto[0]);

    return(
          <Componetes produtos={produto[0]} />
    )
}