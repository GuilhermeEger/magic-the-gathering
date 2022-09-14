import React, { useState, useEffect } from 'react';
import Card from '../../components/Card/Card';

function Home() {

    return (
      <div style={{height:'100%'}}>
        <div id ='header' style={{height:50, width:'100%', background:'#53eddb',}}>

        </div>

        <div id='corpo' style={{height:'calc(100% - 100px)'}}>

            <Card />


        </div>

        <div id='footer' style={{height:50, width:'100%', background:'#53eddb'}}>

        </div>
      </div>
    );
  }
  
  export default Home;
  