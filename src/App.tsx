import React, { useState, useRef } from 'react';

import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import PrimeReact from 'primereact/api';

import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

import logo from './logo.svg';
import './App.css';

function App() {
  const [text, setText] = useState('');
  const toastRef = useRef<any>();

  // active ripple effect
  PrimeReact.ripple = true;

  const onFormSubmit = (e : any) => {
    if (text) {
      toastRef.current.show({ severity: 'info', summary: text, life: 3000 });
    }

    // clear
    setText('');

    e.preventDefault();
  }

  return (
    <div className="App">

      <Toast ref={toastRef} />

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <form className="flex justify-content-center pt-6" onSubmit={onFormSubmit}>
        <InputText value={text} onChange={(e : any ) => setText(e.target.value)} />
        <Button type="submit" label="Submit" icon="pi pi-check" className="pl-2"/>
      </form>
    </div>
  );
}

export default App;
