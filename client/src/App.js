import Countries from './pages/countries'; // Importar el componente de países

import { Routes, Route } from 'react-router-dom';
import CountryInfo from './pages/country';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Countries />} />
      <Route path="/country" element={<CountryInfo />} />
    </Routes>
  );
}
