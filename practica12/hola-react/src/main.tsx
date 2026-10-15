import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container!);

const Titulo = React.createElement('h1', null, 'Hola mundo');

root.render(Titulo);