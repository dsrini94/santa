import React, { Component } from 'react';

import './heroes.css'

export default class Heroes extends Component {
  render(){

    const imageUrl = [
      { image:'http://pngimg.com/uploads/ironman/ironman_PNG66.png',name:'IronMan'},
      { image:'http://www.pngall.com/wp-content/uploads/2016/04/Thor-Free-Download-PNG.png',name:'Thor'},
      { image:'https://pngimg.com/uploads/hulk/hulk_PNG87.png',name:'Hulk'},
      { image:'http://pluspng.com/img-png/bheem-is-back-yet-again-to-the-forum-vijaya-mall-this-time-with-his-friends-pyari-chutki-and-jaggu-bandar-chhota-bheem-is-an-indian-animated-1896.png',name:'Chota Bheem'},
      { image:'http://purepng.com/public/uploads/large/purepng.com-batmanbatmansuperherocomicdc-comicsbob-kanebat-manbruce-wayne-1701528524639kawni.png',name:'BatMan'},
      { image:'http://pngimg.com/uploads/tom_and_jerry/tom_and_jerry_PNG15.png',name:'Tom'},
      { image:'http://www.pngpix.com/wp-content/uploads/2016/10/PNGPIX-COM-Sachin-Tendulkar-PNG-Transparent-Image-500x680.png',name:'Sachin Tendulkar'},
      { image:'https://www.freeiconspng.com/uploads/cristiano-ronaldo-football-picture-download-31.png',name:'Cristiano Ronaldo'},
      { image:'http://pngimg.com/uploads/spider_man/spider_man_PNG44.png',name:'Spider Man'},
      { image:'https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/6/64/Doctor_Strange_Render.png/revision/latest?cb=20161130041146',name:'Dr. Strange'},
    ]

    return(
      <div className="outerContainer">
        <h1>Selecting your character</h1>
      <div className="heroesContainer">
        {
          imageUrl.map((item,index)=> ( <div >
                                          <img src={item.image} className="characters"/>
                                          <h6>{item.name}</h6>
                                        </div>))
        }
      </div>
    </div>
    );
  }
}
