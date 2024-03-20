// import Btn from "./Components/Btn";

// const clickHandler = () => {
//   console.log('clicked');
// }

// function App() {
//   return (
//     <button onClick={clickHandler}>CLick Me</button>
//   );
// }

// export default App;

// Handling events using inline anonymous ES5 functions
function App() {
    return (
        <button onClick={function () { console.log('first - example') }}>
            An anonymous function in ES5
        </button>
    );
}
// export default App;

// Handling events using inline anonymous ES6 functions (arrow functions)
function ES6() {
    return (
        <button onClick={() => console.log('second - example')}>
            An anonymous function in ES6
        </button>
    );
}
// export default ES6;

// Handling events using separate function declarations

function separateFuncDec() {
    function thirdExapmle() {
        console.log('thirdExapmlehe babu');
    }
    return (
        <div className="thirdExample">
            <button onClick={thirdExapmle}>
                Using a eparate funciton declaration
            </button>
        </div>
    );
}

// export default separateFuncDec;

// Handling events using separate function expressions

function separateFuncExp() {
    const fourthExample = () =>
        console.log('fourth example he by using arrow func');
    {
        return (
            <div className="fourthExample">
                <button onClick={fourthExample}>
                    using a separate function expression
                </button>
            </div>
        );
    }
}

export default separateFuncExp;