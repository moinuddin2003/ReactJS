import logo from './logo.svg';
import './App.css';
import Card from './Components/Card';
// function Header() {
//   return <h1>Hello Bhai Jan</h1>
// }

// export default function Call(props) {
//   return <h1>{props.title}</h1>
// };

function App() {
  return (
    <div>
      <h1>Task: Add three Card elements</h1>
        <Card h2={"First card's h2"} h3={"First card's h3"} />
      <Card h2={"Second card's h2"} h3={"Second card's h3"} />
        <Card h2={"THird card's h2"} h3={"THird card's h3"} />
    </div>
  );
};

export default App;


