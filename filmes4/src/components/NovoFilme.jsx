import { useForm } from 'react-hook-form'

export function NovoFilme({filmes, setFilmes}) {
  const { register, handleSubmit } = useForm()

  function salvaFilme(data) {
    const novo = {
      titulo: data.titulo,
      genero: data.genero,
      duracao: data.duracao,
      foto: data.foto,
      sinopse: data.sinopse,
      nomes: [],
      comentarios: [],
      notas: []
    }

    const filmes2 = [novo, ...filmes]  
    setFilmes(filmes2)

    // salva os dados na API
    fetch(`http://localhost:3000/filmes`, {
      method: "POST",
      body: JSON.stringify(novo)
    })

  }

  return (
    <>
      <h2>Formulário de Cadastro de Filmes</h2>
      <form onSubmit={handleSubmit(salvaFilme)}>
        <p>
          <label htmlFor="titulo">Título do Filme:</label>
          <input type="text" id="titulo"
            {...register("titulo")}
            required />
        </p>
        <p>
          <label htmlFor="genero">Gênero:</label>
          <input type="text" id="genero"
            {...register("genero")}
            required />
        </p>
        <p>
          <label htmlFor="foto">URL Foto:</label>
          <input type="text" id="foto"
            {...register("foto")}
            required />
        </p>
        <p>
          <label htmlFor="duracao">Duração(min):</label>
          <input type="number" id="duracao"
            {...register("duracao")}
            required />
        </p>
        <p>
          <label htmlFor="sinopse">Sinopse:</label>
          <textarea id="sinopse"
            {...register("sinopse")}
            required></textarea>
        </p>
        <p>
          <input type="submit" value="Cadastrar" />
          <input type="reset" value="Limpar" />
        </p>
      </form>
    </>
  )
}