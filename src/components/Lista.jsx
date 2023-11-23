function Tarefa({item, concluirTarefa, removerTarefa}) {
    return (
        <div className ='tarefa'>
            <span style={{textDecoration: item.isFinalizado ? 'line-through' : ''}}>
                {item.descricao}</span>
            <div className='acoes'>
            <button className='botaoConcluir' onClick={() => concluirTarefa(item.id)}>Concluir</button>
            </div>
        </div>
    )
}
 
export default Tarefa