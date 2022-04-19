import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Logo from './Highlogo.png';
import productABC from './productABC.svg';
import SearchButton from './SearchButton';
import Refreshing from './Refreshing';
import EndFoot from './EndFoot';
import Predict from './Predict';
import AnalyticsView from './AnalyticsView';
import Editing from './Editing';
import Deleting from './Deleting';
import Adding from './Adding';
import HRCTable from './HRCTable';

import DataGridInternn from './DatGridInternn';
import AdvanceSearching from './AdvanceSearching';
import RefreshOne from './Refreshing';
import Refetch from './Refetch';



const grid1 = <>
    <img  src = {productABC} alt='High Radius Logo'></img>
    <div id='abc'><img style={{height:'43px'}}  src = {Logo} alt='High Radius Logo'></img></div>
</>

const grid2 = <>
  <div id = "grid21">
      <Predict/>
      <AnalyticsView />
      <AdvanceSearching/>
      <Refetch/>
  </div>
  <div>
      <SearchButton/>
  </div>
  <div id = "grid21">
      <Adding/>
      <Editing/>
      <Deleting/>
  </div>
</>

// const grid3 = <DataGridInternn/>
const grid3 = <HRCTable/>
const grid4 = <EndFoot/>


ReactDOM.render(grid1, document.getElementById('grid1'));
ReactDOM.render(grid2, document.getElementById('grid2'));
ReactDOM.render(grid3, document.getElementById('grid3'));
ReactDOM.render(grid4, document.getElementById('grid4'));

