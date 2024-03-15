// import logo from './logo.svg';
import './App.css';
import Nav from './Components/Nav';
import Promo from './Components/Promo';
import Footer from './Components/Footer';
import Intro1 from './Components/Intro1';
import Intro2 from './Components/Intro2';
import Intro3 from './Components/Intro3';

function App() {
  return (
    <div>
      <Nav />
      <Intro1 />
      <Intro2 />
      <Intro3 />
      
      <Promo /><Footer />
    </div>
  );
}
// <div className="App">
//   <header className="App-header">
//     <img src={logo} className="App-logo" alt="logo" />
//     <p>
//       Edit <code>src/App.js</code> and save to reload.
//     </p>
//     <a
//       className="App-link"
//       href="https://reactjs.org"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       Learn React
//     </a>
//   </header>
// </div>
//   );
// }

export default App;
