import React from 'react';
import { Link } from 'react-router-dom';

import classes from './../About.module.css';

const ServerAbout = () => {
  return (
    <>
      <div className="jumbotron">
        <h1 data-cy='server-about-title'>Hi, Again!</h1>
        <h2 data-cy='server-about-subtitle'>Welcome to the About section for BPMN Server (Middleware)</h2>

        <div className={classes.info}>
          <p>🌟 This application aims to create a <em>Middleware or Backend for Frontend</em> for enriching a Business Process Model and Notation XML</p>

          <p>💥 This application uses the power of <em>Node.js</em> and <em>Express.js</em> to do most of the heavy-lifting for enriching your BPMN Model so that your Frontend remains light and fast!</p>

          <p>🎮 The <em>bpmn-server</em> middleware has the following key components:</p>

          <ul className={classes.list}>
            <li className={classes['list-item']}>Route (A place where your endpoint(s) are defined)</li>
            <li className={classes['list-item']}>Controller (A component which works closely with the service to understand the user request and return the correct model diagram)</li>
            <li className={classes['list-item']}>service (A place where all the heavy-lifting and enrichment is done!)</li>
          </ul>
        </div>

        <div className={classes.info}>
          <p>🚧 The <em>Middleware</em> uses the Express.js library for your BFF application but also makes use of the following libraries: </p>

          <ul className={classes.list}>
            <li className={classes['list-item']}>BPMN Moddle (A library which lets you parse the BPMN XML data and enrich or modify it if required)</li>
            <li className={classes['list-item']}>CORS (A middleware wrapper that allows CORS with various options)</li>
          </ul>
        </div>

        <div className={classes.info}>
          <p>⚡️ Some more information about what happens over here at the Middleware: </p>

          <ul className={classes.list}>
            <li className={classes['list-item']}>The <em>bpmn-routes</em> lists the endpoint(s) available to the frontend for usage</li>
            <li className={classes['list-item']}>The <em>bpmn-controller</em> has a single async function titled <em>getBPMNDiagram</em> to fetch (in this instance) a mock BPMN diagram XML and JSON with data for enrichment for the BPMN </li>
            <li className={classes['list-item']}>The <em>bpmn-service</em> has several functions to obtain the source diagram data and enrich that using mock JSON or dynamic data in O(N) time</li>
            <li className={classes['list-item']}>The <em>setup-helper</em> is a shared resource with several utility functions for map and array operations</li>
          </ul>
        </div>

        <div className={classes.info}>
          <Link to="" className="btn btn-primary btn-lg" data-cy='redirect-to-frontend-about'>
            Learn More about the BPMN Frontend here
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

export default ServerAbout;