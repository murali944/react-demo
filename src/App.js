import './App.css';
import {Greet} from './components/Greet';
function App() {
  return (
    <div className="App">
      <Greet name="Murali" heroName="Batman"></Greet>
      <Greet name="Jishaan" heroName="SuperMan"></Greet>
      <p>This is Jishaan Content</p>
      <Greet name="Yekshit" heroName="Iron Man"></Greet>
    
    </div>
  );
}

export default App;
