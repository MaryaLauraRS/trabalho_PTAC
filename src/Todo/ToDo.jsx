    import { useEffect, useState } from "react";
    import { Link } from "react-router-dom";

    export default function ToDo() {
        const listaLocalStorage = localStorage.getItem("lista")
        const [atividade,setAtividade] = useState("");
        const [atividade2,setAtividade2] = useState("");
        const [atividade3,setAtividade3] = useState("");
        const [lista,setLista] = useState (listaLocalStorage ? JSON.parse(listaLocalStorage) : []);
        const[id,setId] = useState(Math.random());

        useEffect(() => {localStorage.setItem("lista", JSON.stringify(lista))},[lista]);

        const salvar = (a) => {
            a.preventDefault();
            setLista([...lista, {
                id: id,
                atividade: atividade, 
                atividade2: atividade2,
                atividade3: atividade3,
            }]);
            setId(id+1);
        }
        function Apagar(id) {
            const listaNova = [...lista];
            const newlista= listaNova.filter(a=> a.id !== id)
            return setLista (newlista)
        }
        
        return (
    <div>
        

        <br/><br/>

        <p class="text-center fs-3 font-family">Lista de Livros</p>

        <p class="text-muted fst-italic" >Avalie seus livros lidos</p>

    <center>
            <form onSubmit={salvar}>

        <div class="form-floating w-50">
        <input id="floatingInput" class="form-control border-secondary"  type="text" onChange={(e)=>setAtividade(e.target.value)}/> 
        <label for="floatingInput">Livro</label>
        </div>
        <br/><br/>
        <div class="form-floating w-50">
            <input id="floatingInput" class="form-control border-secondary"  type="text" onChange={(e)=>setAtividade2(e.target.value)}/>
            <label for="floatingInput">Autor</label>
        </div>
        <br/><br/>
        <div class="form-floating w-50">
            <input id="floatingInput" class="form-control border-secondary"  type="text" onChange={(e)=>setAtividade3(e.target.value)}/>
            <label for="floatingInput">Comentário</label>
        </div>
        <br/><br/>

            <button class="btn btn-outline-secondary" > Adicionar </button> 
            </form>   <br/>
        </center> <Link class="text-dark text-dark end-50" to="/">home</Link>
        <br/><br/>
                <div>
               <center>
            {lista.map((atividade) => 
                    <div key={atividade.id}>
                        <span class="card card-body text-center w-25" >
                        <h5 class="card-header">{atividade.atividade} </h5> <br/>
                        <h6  class="card-subtitle mb-2 text-muted fst-italic">Autor: {atividade.atividade2} </h6>
                        <p class="card-text text-break">Comentario: {atividade.atividade3}</p> <Link class="text-dark text-dark end-50" to={`/detalhe/${atividade.id}`}>ver mais</Link> <a href="#" class="btn btn-outline-secondary" onClick={(i)=> i.preventDefault(Apagar(atividade.id))} > X </a>
                        </span>
                        <br/><br/>
                    </div>
                )}
               </center>
                    
                </div>
            
    </div>
        );
    }