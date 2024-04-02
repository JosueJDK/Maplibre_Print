import React, { useState } from 'react';
import {VerticalChart} from './VerticalBarChart';
import Pagination from './Pagination'
import { PieChart } from './PieChart';

const labelsAll = {
    "horario" : ['0 a 6', '6 a 9', '9 a 11', '11 a 13', '13 a 15', '15 a 17', '17 a 19', '19 a 21', '21 a 0'],
    "edad" : ['18 - 19', '20 - 29', '30 - 39', '40 - 49', '50 a 70', '70 a mas'],
    "nse" : ['ALTO', 'MEDIO ALTO', 'MEDIO', 'MEDIO BAJO', 'BAJO'],
    "tipo_dia" : ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'],
    "motivo" : ['A casa', 'A trabajo', 'Otros'],
    "genero" : ['Masculino', 'Femenino'],
  };

const colorsLabels = {
  "horario": "#3498db",
  "edad": "#9b59b6",
  "nse": ["#1abc9c", "#9b59b6", "#34495e", "#e74c3c", "#f39c12"],
  "tipo_dia": "#f1c40f",
  "motivo": "#2ecc71",
  "genero": ["#3498db", "#ff69b4"]

};

const ChartsContainer = ({ dataAPI }) => {
  const [currentPage, setCurrentPage] = useState("horario");
  return (
    <div className="absolute left-0 mx-3 bg-white shadow-lg border border-gray-200 rounded dialog-footer z-50">        
      <Pagination
        setCurrentPage={setCurrentPage}
        labelsAll={labelsAll}
      />
      { currentPage !== "genero" && currentPage !== "nse" ?
        <VerticalChart
          color={colorsLabels[currentPage]}
          labelsAll={labelsAll[currentPage]}
          label={currentPage}
          dataAPI={dataAPI[currentPage]}
          title={currentPage}
        />
      : (
        <PieChart
          color={colorsLabels[currentPage]}
          labelsAll={labelsAll[currentPage]}
          label={currentPage}
          dataAPI={dataAPI[currentPage]}
          title={currentPage}
        />
      )}
    </div>
  );
};

export default ChartsContainer;
