import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Grid, Button, Typography, withStyles, Paper, Card, CardHeader, CardContent, CardActions } from '@material-ui/core';

class MainPageInner extends Component {
  render() {
    return (
      <div className={this.props.classes.root}>
        <div className={this.props.classes.topBar}>
          <div className={this.props.classes.topBarContent}>
            <Typography variant="h1" className="text">{this.props.config.title}</Typography>
            <Typography variant="h6" className="text">{this.props.config.subTitle}</Typography>
            <Link to="/docs/get-started" style={{ textDecoration: 'none' }}>
              <Button className={this.props.classes.topBarButton}>Get Started</Button>
            </Link>
          </div>
        </div>
        <div className={this.props.classes.features}>
          <Grid container spacing={0}>
            {this.props.data.features.map(feature => (
              <Grid item xs={12} sm={6} md={4} lg={3} className={this.props.classes.feature}>
                <Paper className={this.props.classes.featureContent}>
                  <Typography variant="h6" className="title">{feature.title}</Typography>
                  <Typography variant="subheading" className="text">{feature.text}</Typography>
                  {feature.button &&
                    <div className={this.props.classes.featureActions}>
                      <Link to={feature.button.path} style={{ textDecoration: 'none' }}>
                        <Button className={this.props.classes.featureButton} color="primary">{feature.button.text}</Button>
                      </Link>
                    </div>
                  }

                </Paper>


              </Grid>
            ))}

          </Grid>
        </div>
      </div>
    );
  }
}

const styles = theme => ({
  root: {
    width: '100%',
  },
  topBar: {
    display: 'table',
    width: '100%',
    height: 400,
    backgroundColor: theme.palette.primary.main,
  },
  topBarContent: {
    display: 'table-cell',
    verticalAlign: 'middle',
    textAlign: 'center',
    '& .text': {
      color: 'white',
      marginBottom: 10,
    }
  },
  topBarButton: {
    width: 150,
    color: '#FFFFFF99',
    textTransform: 'none',
    border: '1px solid #FFFFFF99',
    transition: 'all ease 300ms',
    '&:hover': {
      color: '#FFF',
      backgroundColor: '#DDDDDD22',
    },
  },
  features: {
    margin: '10px 0px',
  },
  feature: {
    padding: '12px 5px',
  },
  featureContent: {
    display: 'flex',
    flexDirection: 'column',
    padding: 10,
    height: '100%',
    backgroundColor: 'white',
    '& .title': {
      color: '#65819D',
      padding: 5,
    },
    '& .text': {
      color: '#65819D',
      padding: '5px 5px 0',
      flex: 1
    }
  },
  featureActions: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  featureButton: {
    textTransform: 'none',
  }
});

const MainPage = withStyles(styles, { withTheme: true })(MainPageInner);
export default MainPage;