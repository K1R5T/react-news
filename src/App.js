import React, { Component } from 'react';
import Card from './component/Card';
import './App.css';

class App extends Component {

state = {
  Cards:[
    {src: require('./img/news1.jpg'), content:'Flooding not over yet!'},
    {src:require('./img/news2.jpg'), content:'All you need to know on the coronavirus'},
    {src:require('./img/news3.jpeg'), content:'Criminals on CCTV: Scammers caught red-handed'},
    {src:require('./img/news4.jpeg'), content:'Australian night sky on show in starlapse'},
    {src:require('./img/news5.jpg'), content:'My toy walrus waited 25 years in the Arctic'},
  ],
  Cards2:[
    {src:require('./img/news6.jpg'), content:'The boss who put everyone on 70K'},
    {src:require('./img/news7.jpg'), content:'Driver killed by police after making gun threats'},
    {src:require('./img/news8.jpg'), content:'Man admits affray after footballers death'},
    {src:require('./img/news9.jpeg'), content:'Farewell tributes paid to much loved traffic waving man from Dorset'},
    {src:require('./img/news10.jpg'), content:'New autism awareness card to help with police incidents'},
    ]
  }

  render() {
    const eachCard = this.state.Cards.map ((Cards,index) => {
     return <Card src={Cards.src} content = {Cards.content} key = {index} />
    })
    const eachCard2 = this.state.Cards2.map ((Cards2, index) => {
      return <Card src={Cards2.src} content = {Cards2.content} key = {index} />
  })


return(  
   <div className="App"> 

    {/* <div className="seeAll">
    <button> See All </button>
    </div> */}

  
   <div className="header1"> 
    <h3>Long Reads</h3> 
    <hr/> 
    <button> See All </button>
   </div>

   <div className="each">
    {eachCard}
    </div>



    <div className="header2"> 
      <h3>Newsbeat</h3> 
      <hr className="hr2"/> 
      <button> See All </button>
      </div>
      <div className="card">
      {eachCard2}
    </div>


    
</div>
    );
  }
}
export default App;
