import React from 'react';
import './Resizer.css';
import $ from 'jquery';

function Resizer(){
    function resizeText(multiplier) {
        var elem = document.getElementById("text");
        var currentSize = elem.style.fontSize || 1;
        elem.style.fontSize = ( parseFloat(currentSize) + (multiplier * 0.1)) + "em";
        localStorage.setItem('currentSize',currentSize);
    }

    const increase = () => resizeText(1)
    const decrease = () => resizeText(-1)
    
    // window.onload = function(){
    //     var g = localStorage.getItem('currentSize');
    //     document.getElementById("text").style.fontSize = g;
    // }

      $('.close-btn').on('click',function() {
        $('#font-card').children().fadeOut();
      })

return (
    <>
    <div className="font-card" id="font-card">
        <div id="close">
            <button className="close-btn">x</button>
        </div>
        <div className="fontSize">
            <p>FONT SIZE: 100%</p>
            <ul className="resizer">
                <button onClick={decrease} id="decrease"> - </button> {''}
                <button onClick={increase} id="increase"> + </button>
            </ul>
        </div>
    </div>
    </>
  );

}
export default Resizer;