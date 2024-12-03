import { useForm } from 'react-hook-form';

export function NovaPlanta({ plantas, setPlanta }) {
  const { register, handleSubmit, reset, setFocus } = useForm();

  function salvaPlanta(data) {
    const novo = {
      nome: data.nome,
      luz: data.luz,
      rega: data.rega,
      foto: data.foto,
      cuidado: data.cuidado,
      tamanho: data.tamanho
    };

    const novaListaPlantas = [novo, ...plantas];
    setPlanta(novaListaPlantas);
    localStorage.setItem("planta", JSON.stringify(novaListaPlantas));

    reset(); // Limpa o formulário após o cadastro
    // setFocus("nome"); // Foca no campo "nome" logo após limpar
    setTimeout(() => setFocus("nome"), 0); // Aguarda o reset antes de focar
  }


  function limpar() {
    reset();
    setTimeout(() => setFocus("nome"), 0); // Aguarda o reset antes de focar
  }

  return (
    <div className='modal'>
      <h2 className='nomeForm'>Formulário das Plantas</h2>
      <form onSubmit={handleSubmit(salvaPlanta)}>
        <p>
          <label htmlFor="nome">Nome da planta:<br /></label>
          <input type="text" id="nome" {...register("nome")} required />
        </p>
        <p>
          <label htmlFor="luz">Luz necessária:<br /></label>
          <select name="luz" id="luz" {...register("luz")} required>
            <option value="Sol Pleno">Sol Pleno</option>
            <option value="Luz Indireta">Luz Indireta</option>
            <option value="Sombra">Sombra</option>
          </select>
        </p>
        <p>
          <label htmlFor="rega">Frequência de rega:<br /></label>
          <select name="rega" id="rega" {...register("rega")} required>
            <option value="Baixa">Baixa (Semanalmente/Mensalmente)</option>
            <option value="Média">Média (2 a 3 dias)</option>
            <option value="Alta">Alta (Diariamente)</option>
          </select>
        </p>
        <p>
          <label htmlFor="foto">URL foto:<br /></label>
          <input type="text" id="foto" {...register("foto")} />
        </p>
        <p>
          <label htmlFor="tamanho">Tamanho:<br /></label>
          <select name="tamanho" id="tamanho" {...register("tamanho")} required>
            <option value="Pequena">Pequena</option>
            <option value="Médio">Médio</option>
            <option value="Grande">Grande</option>
          </select>
        </p>
        <p>
          <label htmlFor="cuidado">Nível de cuidado:<br /></label>
          <select name="cuidado" id="cuidado" {...register("cuidado")} required>
            <option value="Fácil">Fácil</option>
            <option value="Médio">Médio</option>
            <option value="Difícil">Difícil</option>
          </select>
        </p>
        <p className='butoes'>
          <input type="submit" value="Cadastrar" className='but1' />
          <button type="button" onClick={limpar} className='but2'>Limpar</button>
        </p>
      </form>
    </div>
  );
}
