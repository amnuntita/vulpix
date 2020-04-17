import React from 'react';
import './App.css';
import Main from './component/MainComponent'
import {BrowserRouter} from 'react-router-dom';
import {baseUrl} from './shared/BaseUrl.js';

function App() {

  const appList = () => {return (baseUrl+"app_list")};

  return (
    <BrowserRouter>
    <div className="App">
      <Main appList = {appList} />
    </div>
    </BrowserRouter>
  );
}

export default App;
