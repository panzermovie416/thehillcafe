import {
    BrowserRouter as Router
  } from 'react-router-dom';
  import Main from './Component/main';
  
  function App() {
  
    return (
      <Router>
        <div className="poppins-regular">
          <Main />
        </div>
      </Router>
    );
  }
  
  export default App;
  