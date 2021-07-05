import React, { useState, useEffect } from 'react';

import axios from 'axios';
import ReactBpmn from 'react-bpmn';

import DiagramPanel from './DiagramPanel';
import classes from './Diagram.module.css';

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
      <h2><pre data-cy='diagram-title'>Business Process Model and Notation</pre></h2>
      <ReactBpmn diagramXML={diagramData} />

      <div className={classes['panel-container']}>
        <DiagramPanel />
      </div>
    </>
  );
};

export default Diagram;