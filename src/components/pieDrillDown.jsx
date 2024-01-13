import React, { useState, useEffect } from 'react';
import * as d3 from 'd3';
import Dropdown from 'react-dropdown-select';
import data from '../data/snippetSize2000AramisPark.json';

const PiechartDrillDown = () => {
  const [selectedKey, setSelectedKey] = useState(null);
  const [drilldownData, setDrilldownData] = useState(data);
  const [drilldownPath, setDrilldownPath] = useState([]);
  const [nextOptions, setNextOptions] = useState([]);

  useEffect(() => {
    updateChart();
    updateDropdownOptions();
  }, [drilldownData, selectedKey]);

  const updateChart = () => {
    // Code D3.js pour générer le pie chart
    // Utilisez la variable drilldownData pour créer le pie chart en fonction de la clé sélectionnée
    // Assurez-vous d'avoir un conteneur dans votre JSX pour afficher le pie chart, par exemple <div id="piechart-container"></div>
  };

  const updateDropdownOptions = () => {
    if (selectedKey) {
      const nextKeyOptions = Array.from(
        new Set(drilldownData.map((item) => item[selectedKey]))
      ).map((option) => ({ value: option, label: option }));
      setNextOptions(nextKeyOptions);
    }
  };

  const handleDropdownChange = (selected) => {
    if (selected.length > 0) {
      const nextKey = selected[0].value;
      setSelectedKey(nextKey);

      // Mise à jour du chemin de descente
      setDrilldownPath([...drilldownPath, nextKey]);

      // Filtrage des données en fonction de la clé sélectionnée
      const filteredData = drilldownData.filter(
        (item) => item[selectedKey] === nextKey
      );
      setDrilldownData(filteredData);
    }
  };

  return (
    <div>
      <div>
        Chemin : {drilldownPath.join(' > ')}
      </div>
      <div id="piechart-container"></div>
      <Dropdown
        options={nextOptions}
        onChange={handleDropdownChange}
        labelField="label"
        valueField="value"
        placeholder="Choisir la prochaine catégorie"
      />
    </div>
  );
};

export default PiechartDrillDown;
