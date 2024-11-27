import { useParams } from "react-router-dom"
import { Titulo } from "./components/Titulo"
import { useEffect, useState } from "react"
import './Comentarios.css'

function Comentarios() {
  const { filmeId } = useParams()
  const [comentarios, setComentarios] = useState([])
  const [filme, setFilme] = useState({})

  useEffect(() => {
    async function getFilme() {
      const response = await fetch(`http://localhost:3000/filmes/${filmeId}`)
      const filme2 = await response.json()
      setFilme(filme2)
    }
    getFilme()
  }, [])

  return (
    <>
      <Titulo />
      <h1>Comentários sobre o filme: {filme.titulo}</h1>

      <div className="capaComentarios">
        <img src={filme.foto} alt="Capa" />
        <div>
          <h2>Comentários:</h2>

        </div>
      </div>
    </>
  )
}

export default Comentarios