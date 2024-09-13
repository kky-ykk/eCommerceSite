import './App.css';
import l1 from "./assets/api-tableLamp2.svg";
import l2 from "./assets/api-tableLamp.svg";

function App() {
  return (
    <>
      <h1>Google Drive Image Example</h1>
      <img 
        src={l1}
        alt="Google Drive Image" 
        style={{ width: '300px', height: '300px' }} 
      />
      <img 
        src={l2}
        alt="Google Drive Image" 
        style={{ width: '300px', height: '300px' }} 
      />
    </>
  );
}

export default App;
