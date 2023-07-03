import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../Services/api";
import './home.css'
//BASE DA URL: https://api.themoviedb.org/3/movie/now_playing?api_key=540e44f53147417276c62d0661e2f51f&language=pt-BR

export default function Home() {
  const [ filmes, setFilmes] = useState([]);
  const [ loading, setLoading] = useState(true)
  useEffect(() => {

    async function loadFilmes(){
      const response = await api.get("https://api.themoviedb.org/3/movie/now_playing?api_key=540e44f53147417276c62d0661e2f51f&language=pt-BR", {
        params: {
          api_key: "540e44f53147417276c62d0661e2f51f",
          language: "pt-BR",
          page: 1
        }
      })

     // console.log(response.data.results.slice(0, 10))
      setFilmes(response.data.results.slice(0, 10))
      setLoading(false)
    }
    
    loadFilmes();

  }, [])

  if(loading){
    return(
      <div className="loading">
        <h2>Carregando filmes...</h2>
      </div>
    )
  }

  return (
    <div>
      <div className="lista-filmes">
        {filmes.map((filme)=>{
          return(
            <article key={filme.id}>
              <strong>{filme.title}</strong>
              <img className="poster-filmes" alt="...carregando" src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`}/>
              <Link to={`/filme/${filme.id}`}>Acessar</Link>
            </article>
          )
        })}
      </div>
      <br/>
      <Link to="/Filme">Filme</Link>
    </div>
  );
}
