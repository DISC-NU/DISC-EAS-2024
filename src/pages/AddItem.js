import React, { useState } from 'react';
import PageInfo from '../components/PageInfo';
import Footer from '../components/Footer';
import '../styles/AddItem.css';
import HelpModal from '../components/HelpButton';

function AddItem() {
  // const [serialNumber, setSerialNumber] = useState('')
  // const [quantity, setQuantity] = useState('')
  // const [pounds, setPounds] = useState('')
  // const [catSelected, setcatSelected] = useState(false) 
  // const [dogSelected, setDogSelected] = useState(false)
  // const [catFoodSelected, setCatFoodSelected] = useState(false)
  // const [dogFoodSelected, setdogFoodSelected] = useState(false)
  // const [catWetS, setcatWetS] = useState(false)
  // const [catDryS, setcatDryS] = useState(false)
  // const [pateS, setPateS] = useState(false)
  // const [nonpateS, setNonPateS] = useState(false)
  // Cat
  const [catSelected, setCatSelected] = useState(false);
  const handleCatSelected = (event) => {
    setCatSelected(event.target.checked);
    setDogDisabled(event.target.checked);
  }
  const [dogDisabled, setDogDisabled] = useState(false);

  // Dog
  const [dogSelected, setDogSelected] = useState(false);
  const handleDogSelected = (event) => {
    setDogSelected(event.target.checked);
    setCatDisabled(event.target.checked);
  }
  const [catDisabled, setCatDisabled] = useState(false);

  // Cat Food
  const [catFoodSelected, setCatFoodSelected] = useState(false);
  const handleCatFoodSelected = (event) => {
    setCatFoodSelected(event.target.checked);
    setLitterDisabled(event.target.checked);
  }
  const [litterDisabled, setLitterDisabled] = useState(false);

  // Cat Litter
  const [litterSelected, setLitterSelected] = useState(false);
  const handleLitterSelected = (event) => {
    setLitterSelected(event.target.checked);
    setCatFoodDisabled(event.target.checked);
  }
  receiveLitter(litterSelected);
  const [catFoodDisabled, setCatFoodDisabled] = useState(false);

  // Dog Food
  const [dogFoodSelected, setDogFoodSelected] = useState(false);
  const handleDogFoodSelected = (event) => {
    setDogFoodSelected(event.target.checked);
    setPeepadsDisabled(event.target.checked);
  }
  const [peepadsDisabled, setPeepadsDisabled] = useState(false);

  // Dog Peepads
  const [peepadsSelected, setPeepadsSelected] = useState(false);
  const handlePeepadsSelected = (event) => {
    setPeepadsSelected(event.target.checked);
    setDogFoodDisabled(event.target.checked);
  }
  const [dogFoodDisabled, setDogFoodDisabled] = useState(false);

  // Cat Food Wet
  const [catWetS, setCatWetS] = useState(false);
  const handleCatWetS = (event) => {
    setCatWetS(event.target.checked);
    setCatDryD(event.target.checked);
  }
  const [catDryD, setCatDryD] = useState(false);

  // Cat Food Dry
  const [catDryS, setCatDryS] = useState(false);
  const handleCatDryS = (event) => {
    setCatDryS(event.target.checked);
    setCatWetD(event.target.checked);
  }
  receiveCatFoodDry(catDryS);
  const [catWetD, setCatWetD] = useState(false);

  // Dog Food Wet
  const [dogWetS, setDogWetS] = useState(false);
  const handleDogWetS = (event) => {
    setDogWetS(event.target.checked);
    setDogDryD(event.target.checked);
  }
  const [dogDryD, setDogDryD] = useState(false);

  // Dog Food Dry
  const [dogDryS, setDogDryS] = useState(false);
  const handleDogDryS = (event) => {
    setDogDryS(event.target.checked);
    setDogWetD(event.target.checked);
  }
  receiveDogFoodDry(dogDryS);
  const [dogWetD, setDogWetD] = useState(false);

  // Cat Food Wet Pate
  const [pateS, setPateS] = useState(false);
  const handlePateS = (event) => {
    setPateS(event.target.checked);
    setNonPateD(event.target.checked);
  }
  const [nonPateD, setNonPateD] = useState(false);

  // Cat Food Wet Non-Pate
  const [nonPateS, setNonPateS] = useState(false);
  const handleNonPateS = (event) => {
    setNonPateS(event.target.checked);
    setPateD(event.target.checked);
  }
  const [pateD, setPateD] = useState(false);

  const [serialNumber, setSerialNumber] = useState('');
  const [quantity, setQuantity] = useState('');
  const [pounds, setPounds] = useState('');
  const [receivedLitter, setReceivedLitter] = useState(false);

  const handleLitterReceived = (value) => {
    setReceivedLitter(value);
  };

  const [receivedCD, setReceivedCD] = useState(false);

  const handleCatDryReceived = (value) => {
    setReceivedCD(value);
  };

  const [receivedDD, setReceivedDD] = useState(false);

  const handleDogDryReceived = (value) => {
    setReceivedDD(value);
  };
  
  const [buttonText, setButtonText] = useState('ADD');
  const [btnDisable, setBtnDisable] = useState(false);

  const [test, setTest] = useState(false);

  const handleSubmit = async () => {
    setTest(true);
    // const now = new Date();
    // const data = {
    //   "serial": serialNumber,
    //   "animal": "cat" if catSelected else "dog",
    //   "pounds": pounds,
    //   "wet": catWetS if catSelected else dogWetS,
    //   "dry": catDryS if catSelected else dogDryS,
    //   "pate": pateS,
    //   "nonpate": nonpateS,
    //   "quantity": quantity,
    //   "transdate": '${now.getMonth()}/${now.getDate()}/${now.getFullYear()}'
    // };
  
    // const api = "https://yzi5m26nwj.execute-api.us-west-2.amazonaws.com/beta/add-item-and-transaction"
  
    // try {
    //   const res = await fetch(api, {
    //     method:"POST",
    //     body: JSON.stringify(data),
    //     headers: {
    //         "Content-type": "application/json; charset=UTF-8"
    //       }
    //   });

    //   console.log("Successfully added new item or transaction");
    //   setButtonText('ADDED');
    //   setBtnDisable(true);
    // }
    // catch(error){  
    //   console.log("Error occured adding new item! Status code: ", error.status);
    //   console.log("Error message: ", error.message);
    // }
    setButtonText('ADDED');
    setBtnDisable(true);
    
  }
  
  
  const handleClick = () => {
    window.location.reload();
  };

  return (
    <div className='additem'>
      <h1 className='additemtitle'>ADD ITEM</h1>
      <PageInfo
        className='pageinfo' rcfd={handleCatDryReceived} rdfd={handleDogDryReceived} rcl={handleLitterReceived} cat={handleCatSelected} dog={handleDogSelected} cf={handleCatFoodSelected} df={handleDogFoodSelected} cl={handleLitterSelected} dp={handlePeepadsSelected} cdf={handleCatDryS} ddf={handleDogDryS} cwf={handleCatWetS} dwf={handleDogWetS} cp={handlePateS} cnp={handleNonPateS}/>
      <div>
        <button className='addbutton' onClick={handleSubmit} disabled={btnDisable}>{buttonText}</button>
      </div>
      <div>
        <button type="button" onClick={handleClick} className='addanotheritembutton'>ADD ANOTHER ITEM</button>
      </div>
      <div className='help-button-placement'>
        <HelpModal />
      </div>
      { test && 
        <div>test</div>
      }
      <Footer />
    </div>
  )
}

export default AddItem
