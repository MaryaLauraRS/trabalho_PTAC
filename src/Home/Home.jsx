//home
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Home() {
   
    return (
        <div>
            <br/>
            <p class="text-center fs-3 font-family">Vamos avaliar seus livros?</p>

            <Link class="btn btn-outline-secondary" to="/todo">Avalie seus livros</Link>
        </div>

    );
}