import { useEffect, useRef, useState } from "react";

function App() {
  const [name, setName] = useState("");
  const renderCount = useRef(1);
  const inputRef = useRef();

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
    console.log("renderizé");
    console.log(inputRef);
  });

  return (
    <div className="App">
      <h1>CRUD-Node</h1>
      <h2>Subtitulo</h2>
      <input ref={inputRef} />
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <div>My name is {name}</div>
      <div>I rendered {renderCount.current} times</div>
      <button onClick={() => inputRef.current.focus()}>Focus</button>
    </div>
  );
}

export default App;
