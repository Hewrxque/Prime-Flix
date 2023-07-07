import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../../Services/api";
import "./filme.css"
export default function Filme() {
  const { id } = useParams();
  const [filme, setFilme] = useState(true)
  const [loading, setLoading] = useState({})
  useEffect(() => {
    async function loadFilme() {
      await api.get(
        `https://api.themoviedb.org/3/movie/ ${id}`,
        {
          params: {
            api_key: "540e44f53147417276c62d0661e2f51f",
            language: "pt-BR",
          },
        })
        .then((response) => {
          setFilme(response.data);
          setLoading(false);
        })
        .catch(() => {
          console.log("Filme nao encontrado")
        })
    }
    loadFilme();

    return() => {
      console.log("Componente desmontado")
    }
  }, []);


  if(loading){
    return(
      <div>
        <h1 className="filme-info">
          Carregando Detalhes...
        </h1>
      </div>
    )
  }
  return (
    <div className="filme-info">
      <h1>
      {filme.title}
      </h1>
      <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title}/>
      <h3>Sinopse</h3>
      <span>{filme.overview}</span>
      <strong>Avaliaçao: {filme.vote_average} /10</strong>
    </div>
  );
}
