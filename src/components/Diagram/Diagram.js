import React, { useState, useEffect } from 'react';

import axios from 'axios';
import ReactBpnm from 'react-bpmn';

const Diagram = () => {
  const [diagramData, setDiagramData] = useState(null);

  useEffect(() => {
    async function fetchDiagram() {
      const response = await axios.get('http://localhost:3001/bpmn/diagram');
      const data = await response.data;

      setDiagramData(data);
    }

    fetchDiagram();
  }, []);

  return (
    <>
      <h1>Hello, There!</h1>
      <ReactBpnm diagramXML={diagramData} />
    </>
  );
};

export default Diagram;