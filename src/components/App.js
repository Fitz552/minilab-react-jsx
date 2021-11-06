import "bootstrap/dist/css/bootstrap.min.css";
import Greetings from "./Greeting";
import Profile from "./Profile";
import List from "./ToDoList";
import Face from "./EmotionMeter";

// Não se esqueça de importar os componentes!

function App() {
  return (
    <div className="container mt-5 mb-5 col-6">

      <small>Interpolação de variáveis</small>
      <Greetings userName="Lucas"/>

      <small>Imagens</small>

      <Profile/>
      
      <hr />

      <small>Renderização de listas</small>
      <List/>
      <hr />

      <small>Renderização condicional</small>
      <Face/>
      <hr />
    </div>
  );
}

export default App;
