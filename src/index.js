import React from 'react';
import {createRoot} from 'react-dom/client';

// import HooksApp from './HooksApp';
// import CounterApp from './components/01-useState/CounterApp';
// import CounterWithCustomHook from './components/01-useState/CounterWithCustomHook';
// import SimpleForm from './components/02-useEffect/SimpleForm';
import FormWithCustomHook from './components/02-useEffect/FormWithCustomHook';



const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <FormWithCustomHook />
);
