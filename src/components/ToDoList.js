const tasks = [
    "Fazer compras",
    "Renovar CNH",
    "Pagar contas",
    "Estudar React",
    "Fazer Minilab",
  ];

  function List() {
    return <ul className = "list-group">
        {tasks.map ((task, index) => {
            return <label className = "list-group-item" key={index}> 
                <input className="form-check-input me-1" type="checkbox" value=""></input>
                {task}
            </label> 
        }
        )}
    </ul>
  }


  export default List