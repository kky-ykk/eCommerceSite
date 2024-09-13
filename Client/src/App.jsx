import './App.css';
import chair from "./assets/chair.svg";

function App() {
  return (
    <>
      <h1>Google Drive Image Example</h1>
      <img 
        src={chair} 
        alt="Google Drive Image" 
        style={{ width: '300px', height: '300px' }} 
      />
    </>
  );
}

export default App;
