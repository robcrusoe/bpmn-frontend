import React from 'react';
import { Link } from 'react-router-dom';

import classes from './../About.module.css';

const FrontendAbout = () => {
  return (
    <>
      <div className="jumbotron">
        <h1 data-cy='frontend-about-title'>Hello, There!</h1>
        <h2 data-cy='frontend-about-subtitle'>Welcome to the About section for BPMN Frontend</h2>

        <div className={classes.info}>
          <p>⭐️ This application aims to create a <em>User Interface</em> for rendering a Business Process Model and Notation and has the following sections:</p>

          <ul className={classes.list}>
            <li className={classes['list-item']}>Frontend (An <em>About</em> section for the User Interface - You're here now!)</li>
            <li className={classes['list-item']}>Server (An <em>About</em> section with some brief information about how the BPMN server works)</li>
            <li className={classes['list-item']}>Diagram (A dashboard to render your Business Process Model and Notation)</li>
          </ul>
        </div>

        <div className={classes.info}>
          <p>🚀 You can navigate between the sections using the tabs displayed on the top of every page.</p>
        </div>

        <div className={classes.info}>
          <p>🚧 The <em>Frontend</em> uses the React library for your single-page application but also makes use of the following libraries: </p>

          <ul className={classes.list}>
            <li className={classes['list-item']}>Bootstrap V4 (For the cool yet simple design that you see)</li>
            <li className={classes['list-item']}>React Router DOM V5 (For seamless routing between pages)</li>
            <li className={classes['list-item']}>Axios (For working with HTTP requests for the BPMN server or middleware)</li>
            <li className={classes['list-item']}>React BPMN (A simple library that works in tandem with the bpmn-js package to help display your diagrams)</li>
          </ul>
        </div>

        <div className={classes.info}>
          <p>⚡️ Some more information about what happens over here at the frontend: </p>

          <ul className={classes.list}>
            <li className={classes['list-item']}>The <em>Diagram Component</em> makes use of the axios library to fetch your enriched BPMN Model from the server</li>
            <li className={classes['list-item']}><em>State Management</em> is achieved by making use of React's in-built useState hook and tree-reconciliation is achieved using the useEffect hook</li>
            <li className={classes['list-item']}>The enriched BPMN model is displayed by making use of the <em>react-bpmn</em> library by passing in the <em>diagramXML</em> as a prop</li>
          </ul>
        </div>

        <div className={classes.info}>
          <Link to="server" className="btn btn-primary btn-lg" data-cy='redirect-to-server-about'>
            Learn More about the BPMN server here
          </Link>
        </div>
        <div className={classes.info}>
          <Link to="diagram" className="btn btn-primary btn-lg" data-cy='redirect-to-diagram'>
            See your enriched BPMN diagram in action here
          </Link>
        </div>
      </div>
    </>
  );
};

export default FrontendAbout;