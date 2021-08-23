import React from 'react';
import Resizer from './Resizer';
import './main.css';

class Main extends React.Component{
    render() {
      return (
        <>
        <div className="row" id="text">
          <div className="leftcolumn">
            <div className="card centeredText">
              <h2>CENTERED TEXT</h2>
              <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor 
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                  Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor 
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
            </div>

            <div className="img-card">
            <div className="img-card-left">
            <div className="card">
              <div className="fakeimg" style={{height: '200px'}}>Image</div>
              <h2>TITLE 5</h2>
              <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor 
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
            </div>
            </div>

            <div className="img-card-right">
            <div className="card">
              <div className="fakeimg" style={{height: '200px'}}>Image</div>
              <h2>TITLE 6</h2>
              <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor 
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
            </div>
            </div>

            </div>
            <Resizer />
          </div>

          <div className="rightcolumn">
            <div className="sidebar-card">
              <h2>TITLE 1</h2>
              <div className="sidebar">
              <div className="fakeimg" style={{height: '70px', width: "70px"}}>Image</div>
              <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
              </div>
            </div>

            <div className="sidebar-card">
              <h2>TITLE 2</h2>
              <div className="sidebar">
              <div className="fakeimg" style={{height: '70px', width: "70px"}}>Image</div>
              <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
              </div>
            </div>

            <div className="sidebar-card">
              <h2>TITLE 3</h2>
              <div className="sidebar">
              <div className="fakeimg" style={{height: '70px', width: "70px"}}>Image</div>
              <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
              </div>
            </div>

            <div className="sidebar-card">
              <h2>TITLE 4</h2>
              <div className="sidebar">
              <div className="fakeimg" style={{height: '70px', width: "70px"}}>Image</div>
              <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
              </div>
            </div>

          </div>
        </div>
       </>
      );
    }
  }
  export default Main;
    