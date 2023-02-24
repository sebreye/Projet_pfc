import './App.css';
import Choice from './components/Choice/Choice';
import Header from './components/Header/Header';
import Resultat from './components/Resultat/Resultat';
import Rules from './components/Rules/Rules';

function App() {
  return (
    <div className="App">
      <Header/>
      <Choice/>
      <Resultat/>
      <Rules/>
    </div>
  );
}

export default App;
