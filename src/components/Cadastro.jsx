import { useState } from "react"
 
function Cadastro({addTarefa}) {
    const [descricao, setDescricao] = useState('');
   
    const enviarDados = (e) => {
        e.preventDefault();
        //alert("Descrição: " + descricao);
       
        if(!descricao) return;
       
        addTarefa(descricao)
        setDescricao('');
    }
 
 
 
    return (
        <>
        <div className="cadastrar">
            <form onSubmit={enviarDados}>
            <input type="text" value={descricao}
            onChange={(e) => setDescricao(e.target.value)} placeholder="Informe a descrição da Tarefa"></input>
            <button className="botaoCadastrar" type="submit" >Cadastrar</button>
            </form>
            </div>
        </>
    )
}
 
export default Cadastro