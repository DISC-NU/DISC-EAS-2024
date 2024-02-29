import React from 'react';
import './Home.css';
import Button from 'react-bootstrap/Button';

function SizesExample() {
  return (
    <>
      <div className="mb-2">
        <Button variant="primary" size="lg">
          Large button
        </Button>{' '}
        <Button variant="secondary" size="lg">
          Large button
        </Button>
      </div>
      <div>
        <Button variant="primary" size="sm">
          Small button
        </Button>{' '}
        <Button variant="secondary" size="sm">
          Small button
        </Button>
      </div>
    </>
  );
}

const quoteBoxStyle = {
    // margin: "50px 0 0 50px",
    // padding: "20px",
    // position: "absolute",
    // top: "50%",
    // left: "50%",
    // width: "450px",
    // borderRadius: "8px",
    // zIndex: "1",
    // background: "#fff",
}

const Home = (props) => {
    return (
        
        <div >
            <div className='banner-container' style={quoteBoxStyle}>
                <div className="text-center">
                    <h1 className=" text-6xl">Evanston Animal Shelter</h1>
                    <h4 className="text-4xl">Inventory Management</h4>
                </div>
           </div>
        </div>
    );
};
export default Home;