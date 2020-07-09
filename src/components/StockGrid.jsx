import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from './Header.jsx'
import CardDataComponent from './CardDataComponent.jsx'
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  grid: {
    width: '100%',
    margin: '0px'
  }
})

);

const tileData = [
  {
    title: 'Image1',
    author: 'author1',
    cols: 2,
  },
  {
    title: 'Image2',
    author: 'author2',
    cols: 2,
  },
  {
    title: 'Image3',
    author: 'author3',
    cols: 2,
  },
  {
    title: 'Image4',
    author: 'author4',
    cols: 2,
  },
  {
    title: 'Image5',
    author: 'author5',
    cols: 2,
  },
  {
    title: 'Image6',
    author: 'author6',
    cols: 2,
  },
];

// class StockGrid extends React.Component {
//
//   constructor(props){
//       super(props);
//       this.state = {
//         stockChartXValues: [],
//         stockChartYValues: [],
//       }
//   }

  function fetchStockData() {
      const API_KEY = '6c900ef7fd0fc0b61b7611f8c06b249c';
      let TICKER = 'AKAM';
      let URL = `https://financialmodelingprep.com/api/v3/key-metrics/${TICKER}?apikey=${API_KEY}`;
      // let URL = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${TICKER}&outputsize=compact&apikey=${API_KEY}`;
      let {stockChartXValues, stockChartYValues} = this.state;

      fetch(URL)
        .then(
          function(response) {
            return response.json();
          }
        )
        .then(
          function(data) {

            // for (var key in data['Time Series (Daily)']) {
            //   stockChartXValues.push(key);
            //   stockChartYValues.push(data['Time Series (Daily)'][key]['1. open']);
            // }

            // console.log(data);
            // console.log(stockChartYValues);
          }
        )
  }

const StockGrid = () => {
    const classes = useStyles();
    return (
      <div>
        <Grid><Header/></Grid>
        <Grid container spacing={3} className={classes.grid}>
          <Grid item xs={12} sm={4}>
            <CardDataComponent/>
          </Grid>
          <Grid item xs={12} sm={4}>
            <CardDataComponent/>
          </Grid>
          <Grid item xs={12} sm={4}>
            <CardDataComponent/>
          </Grid>
          <Grid item xs={12} sm={4}>
            <CardDataComponent/>
          </Grid>
        </Grid>
      </div>
    );
};

export default StockGrid;
