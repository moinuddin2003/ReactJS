import Btn from "./Components/Btn";

const clickHandler = () => {
  console.log('clicked');
}
    
function App() {
  return (
    <button onClick={clickHandler}>CLick Me</button>
  );
}

export default App;
