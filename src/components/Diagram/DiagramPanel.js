import React from 'react';
import classes from './Diagram.module.css';

const DiagramPanel = () => {
  const ok = `${classes.colorCode} ${classes.ok}`;
  const pending = `${classes.colorCode} ${classes.pending}`;
  const failed = `${classes.colorCode} ${classes.failed}`;

  return (
    <>
      <div className={classes.panel}>
        <div className={classes.legend}>
          <div className={ok}></div>
          <div className={classes.textDescription}>OK</div>
        </div>
        <div className={classes.legend}>
          <div className={pending}></div>
          <div className={classes.textDescription}>PENDING</div>
        </div>
        <div className={classes.legend}>
          <div className={failed}></div>
          <div className={classes.textDescription}>FAILED</div>
        </div>
      </div>
    </>
  );
};

export default DiagramPanel;