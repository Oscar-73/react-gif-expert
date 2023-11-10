import React from 'react';
import ReactDOM from 'react-dom/client';
import { GifExpertApp } from './GifExpertApp';

// Estilo general
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // Las peticiones Http se realizan dos veces debido al "StrictMode". Lo hace para asegurarse de que funcionan bien.
  // El "StrictMode" solo afecta en builds de desarrollo. En producción se desactiva automáticamente.
  <React.StrictMode>
    <GifExpertApp />
  </React.StrictMode>,
)