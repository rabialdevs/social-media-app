import { useState } from 'react'
import SignupPage from './Components/SignupPage';
import { Route, Routes } from 'react-router-dom';
import TokenProvider from './context/TokenProvider';


const App=()=> {


  return (
    <div>
      <TokenProvider>
        <Routes>
          <Route path="/" element={<SignupPage />} />
        </Routes>
      </TokenProvider>
    </div>
  );
}

export default App
