import React from "react";
import styles from "../Cards/Cards.module.css";
import CountUp from "react-countup";
import cx from "classnames";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return "Loading...";
  }
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        {/* //infected */}
        <Grid
          item
          component={Card}
          className={cx(styles.test, styles.infected)}
          xs={12}
          md={3}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Infected
            </Typography>
            <Typography varaint="h5">
              <CountUp
                start={0}
                end={confirmed.value}
                duration={2.5}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography varaint="body2">
              Number of active cases of COVID-19
            </Typography>
          </CardContent>
        </Grid>
        {/* //Recover */}
        <Grid
          item
          component={Card}
          className={cx(styles.test, styles.recoveries)}
          xs={12}
          md={3}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Recoveries
            </Typography>
            <Typography varaint="h5">
              <CountUp
                start={0}
                end={recovered.value}
                duration={2.5}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography varaint="body2">
              Number of recoveries of COVID-19
            </Typography>
          </CardContent>
        </Grid>
        {/* //Deaths */}
        <Grid
          item
          component={Card}
          className={cx(styles.test, styles.deaths)}
          xs={12}
          md={3}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Deaths
            </Typography>
            <Typography varaint="h5">
              <CountUp
                start={0}
                end={deaths.value}
                duration={2.5}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography varaint="body2">
              Number of deaths of COVID-19
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
