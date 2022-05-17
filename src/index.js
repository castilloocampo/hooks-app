import React from 'react';
import {createRoot} from 'react-dom/client';

// import HooksApp from './HooksApp';
// import CounterApp from './components/01-useState/CounterApp';
import CounterWithCustomHook from './components/01-useState/CounterWithCustomHook';


const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <CounterWithCustomHook />
);

