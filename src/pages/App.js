import '../styles/App.css';
import '../threeJS/three.js'
import Canvas from '../components/Canvas'


function App() {
  return (
    <div className="App">
      <Canvas />
      <header className="App-header">
      <section className="section"><br></br>
        <h1 className="header">P1ch1</h1>
        <p className="text">welcome to my little hideout</p>
      </section>
      <section className="section">
        <h2 className="header">My projects</h2>
      </section>
      <section className="section">
        <h2 className="header">Contact me</h2>
      </section>
       
      </header>
    </div>
  );
}

export default App;
