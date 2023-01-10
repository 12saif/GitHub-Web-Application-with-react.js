import React from "react";
import ReactDOM from "react-dom/client";
import { CSSReset, ChakraProvider } from '@chakra-ui/react'
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <CSSReset />
      {/* <TheRestOfYourApplication /> */}
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
