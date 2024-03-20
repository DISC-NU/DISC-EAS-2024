// Page for checking out items and decreasing the amount of that
// corresponding item in inventory.
import React, { useState } from 'react';
import PageInfo from '../components/PageInfo';
import Footer from '../components/Footer';
import '../styles/Checkout.css';

function Checkout() {
    // const [catdogData, setcatdogData] = useState({
    //     serialNo: '',
    //     quantity: '',
    //     pet: '',
    //     // find a way to automatically retrieve date/time
    // });
    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setcatdogData({
    //         ...catdogData,
    //         [name]: value,
    //     })
    // }
    const handleClick = () => {
        window.location.reload();
      };
    
      const [buttonText, setButtonText] = useState('CHECK OUT');
      const [btnDisable, setBtnDisable] = useState(false);
      function handleBtnClick() {
        setButtonText('CHECKED OUT');
        setBtnDisable(true);
    }
    
    return (
        <div className='checkout'>
            <h1 className='checkouttitle'>CHECK OUT</h1>
            <PageInfo className='pageinfo'/>
            <div>
                <button className='checkoutbutton' onClick={handleBtnClick} disabled={btnDisable}>{buttonText}</button>
            </div>
            <div>
                <button type="button" onClick={handleClick} className='checkoutanotheritembutton'>CHECK OUT ANOTHER ITEM</button>
            </div>
            <Footer />
        </div>
    )
}

export default Checkout;

