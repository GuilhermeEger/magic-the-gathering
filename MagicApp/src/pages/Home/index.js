import React, { useState, useEffect } from 'react';
const mtg = require('mtgsdk');

function Home() {

    useEffect(() => {
        mtg.card.find(3)
        .then(result => {
            console.log(result.card.name) // "Black Lotus"
        })
      });

    return (
      <div style={{height:'100%'}}>
        <div id ='header' style={{height:50, width:'100%', background:'#53eddb',}}>

        </div>

        <div id='corpo' style={{height:'calc(100% - 100px)'}}>

            <div style={{padding:10, height:50, border:'1px solid black', position:'absolute', top:'50%', left:'50%', cursor:'pointer'}}>Mostrar cartas</div>


        </div>

        <div id='footer' style={{height:50, width:'100%', background:'#53eddb'}}>

        </div>
      </div>
    );
  }
  
  export default Home;
  