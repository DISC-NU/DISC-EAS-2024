import React, { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import '../styles/ItemDetails.css';

function ItemDetails( { receiveLitter, receiveDogFoodDry, receiveCatFoodDry, 
  changeAnimal, changeWet, changeDry, changePate, changeNonPate, changeFood, changeHygiene}) {
  
  // Cat
  const [catSelected, setCatSelected] = useState(false);
  const handleCatSelected = (event) => {
    setCatSelected(event.target.checked);
    setDogDisabled(event.target.checked);
    //Remove cat as animal when box is unchecked
    if(event.target.checked){
      changeAnimal("cat");
    }
    else{
      changeAnimal(null);
    }
    
  }
  const [dogDisabled, setDogDisabled] = useState(false);

  // Dog
  const [dogSelected, setDogSelected] = useState(false);
  const handleDogSelected = (event) => {
    setDogSelected(event.target.checked);
    setCatDisabled(event.target.checked);
    //Remove dog as animal if box is unchecked
    if(event.target.checked){
      changeAnimal("dog");
    }
    else{
      changeAnimal(null);
    }
  }
  const [catDisabled, setCatDisabled] = useState(false);

  // Cat Food
  const [catFoodSelected, setCatFoodSelected] = useState(false);
  const handleCatFoodSelected = (event) => {
    setCatFoodSelected(event.target.checked);
    setLitterDisabled(event.target.checked);
    //Remove Food as 1 if unchecked
    if(event.target.checked){
      changeFood(1);
    }
    else{
      changeFood(0);
    }
  }
  const [litterDisabled, setLitterDisabled] = useState(false);

  // Cat Litter
  const [litterSelected, setLitterSelected] = useState(false);
  const handleLitterSelected = (event) => {
    setLitterSelected(event.target.checked);
    setCatFoodDisabled(event.target.checked);
    receiveLitter(event.target.checked);
    //Change main field states
    changeAnimal("cat");
    changeWet(0);
    changeDry(0);
    changePate(0);
    changeNonPate(0);    
    changeFood(0);
    changeHygiene(1);
    //Remove litter state if unchecked
    if(!event.target.checked){
      changeHygiene(null);
    }
  }
  
  const [catFoodDisabled, setCatFoodDisabled] = useState(false);

  // Dog Food
  const [dogFoodSelected, setDogFoodSelected] = useState(false);
  const handleDogFoodSelected = (event) => {
    setDogFoodSelected(event.target.checked);
    setPeepadsDisabled(event.target.checked);
    //Remove Food as 1 if unchecked
    if(event.target.checked){
      changeFood(1);
    }
    else{
      changeFood(0);
    }
  }
  const [peepadsDisabled, setPeepadsDisabled] = useState(false);

  // Dog Peepads
  const [peepadsSelected, setPeepadsSelected] = useState(false);
  const handlePeepadsSelected = (event) => {
    setPeepadsSelected(event.target.checked);
    setDogFoodDisabled(event.target.checked);
    //Change main field states
    changeAnimal("dog");
    changeWet(0);
    changeDry(0);
    changePate(0);
    changeNonPate(0);    
    changeFood(0);
    changeHygiene(1);
    //Remove hygiene option if unchecked
    if(!event.target.checked){
      changeHygiene(0);
    }
  }
  const [dogFoodDisabled, setDogFoodDisabled] = useState(false);

  // Cat Food Wet
  const [catWetS, setCatWetS] = useState(false);
  const handleCatWetS = (event) => {
    setCatWetS(event.target.checked);
    setCatDryD(event.target.checked);

    //Change main field states
    changeAnimal("cat");
    changeWet(1);
    changeDry(0);
    changePate(0);
    changeNonPate(0);    
    changeFood(1);
    changeHygiene(0);

    //Remove Dry state if unchecked
    if(!event.target.checked){
      changeWet(0);
    }
  }
  const [catDryD, setCatDryD] = useState(false);

  // Cat Food Dry
  const [catDryS, setCatDryS] = useState(false);
  const handleCatDryS = (event) => {
    setCatDryS(event.target.checked);
    setCatWetD(event.target.checked);
    receiveCatFoodDry(event.target.checked);

    //Change main field states
    changeAnimal("cat");
    changeWet(0);
    changeDry(1);
    changePate(0);
    changeNonPate(0);    
    changeFood(1);
    changeHygiene(0);

    //Remove Dry state if unchecked
    if(!event.target.checked){
      changeDry(0);
    }
  }
  
  const [catWetD, setCatWetD] = useState(false);

  // Dog Food Wet
  const [dogWetS, setDogWetS] = useState(false);
  const handleDogWetS = (event) => {
    setDogWetS(event.target.checked);
    setDogDryD(event.target.checked);

    //Change main field states
    changeAnimal("dog");
    changeWet(1);
    changeDry(0);
    changePate(0);
    changeNonPate(0);
    changeFood(1);
    changeHygiene(0);

    if(!event.target.checked){
      changeWet(0);
    }
  }
  const [dogDryD, setDogDryD] = useState(false);

  // Dog Food Dry
  const [dogDryS, setDogDryS] = useState(false);
  const handleDogDryS = (event) => {
    setDogDryS(event.target.checked);
    setDogWetD(event.target.checked);
    receiveDogFoodDry(event.target.checked);

    //Change main field states
    changeAnimal("dog");
    changeWet(0);
    changeDry(1);
    changePate(0);
    changeNonPate(0);
    changeFood(1);
    changeHygiene(0);
    if(!event.target.checked){
      changeDry(0);
    }
  }
  const [dogWetD, setDogWetD] = useState(false);

  // Cat Food Wet Pate
  const [pateS, setPateS] = useState(false);
  const handlePateS = (event) => {
    setPateS(event.target.checked);
    setNonPateD(event.target.checked);

    //Change main field states
    changeAnimal("cat");
    changeWet(1);
    changeDry(0);
    changePate(1);
    changeNonPate(0);
    changeFood(1);
    changeHygiene(0);

    if(!event.target.checked){
      changePate(0);
    }
  }
  const [nonPateD, setNonPateD] = useState(false);

  // Cat Food Wet Non-Pate
  const [nonPateS, setNonPateS] = useState(false);
  const handleNonPateS = (event) => {
    setNonPateS(event.target.checked);
    setPateD(event.target.checked);

    //Change main field states
    changeAnimal("cat");
    changeWet(1);
    changeDry(0);
    changePate(0);
    changeNonPate(1);
    changeFood(1);
    changeHygiene(0);

    if(!event.target.checked){
      changeNonPate(0);
    }
  }
  const [pateD, setPateD] = useState(false);
  
  return (
    <div className='itemdetails'>
      <div className='animal'>
        <FormControlLabel className='cat' control={<Checkbox disabled={catDisabled} checked={catSelected} onChange={handleCatSelected}/>} label="Cat" />
        <FormControlLabel className='dog' control={<Checkbox disabled={dogDisabled} checked={dogSelected} onChange={handleDogSelected}/>} label="Dog" />
      </div>
      {
        catSelected && (
          <div className='product'>
            <FormControlLabel className='food' control={<Checkbox disabled={catFoodDisabled} checked={catFoodSelected} onChange={handleCatFoodSelected} />} label="Food" />
            <FormControlLabel className='litter' control={<Checkbox disabled={litterDisabled} checked={litterSelected} onChange={handleLitterSelected} />} label="Litter" />
          </div>
        )
      }
      {
        dogSelected && (
          <div className='product'>
            <FormControlLabel className='food' control={<Checkbox disabled={dogFoodDisabled} checked={dogFoodSelected} onChange={handleDogFoodSelected} />} label="Food" />
            <FormControlLabel className='peepads' control={<Checkbox disabled={peepadsDisabled} checked={peepadsSelected} onChange={handlePeepadsSelected} />} label="PeePads" />
          </div>
        )
      }
      {
        catFoodSelected && (
            <div className='foodtype'>
                <FormControlLabel className='wet' control={<Checkbox disabled={catWetD} checked={catWetS} onChange={handleCatWetS} />} label="Wet" />
                <FormControlLabel className='dry' control={<Checkbox disabled={catDryD} checked={catDryS} onChange={handleCatDryS} />} label="Dry" />
            </div>
        )
      }
      {
        dogFoodSelected && (
            <div className='foodtype'>
                <FormControlLabel className='wet' control={<Checkbox disabled={dogWetD} checked={dogWetS} onChange={handleDogWetS} />} label="Wet" />
                <FormControlLabel className='dry' control={<Checkbox disabled={dogDryD} checked={dogDryS} onChange={handleDogDryS} />} label="Dry" />
            </div>
        )
      }
      {
        catWetS && (
          <div className='catfood'>
            <FormControlLabel className='pate' control={<Checkbox disabled={pateD} checked={pateS} onChange={handlePateS} />} label="Pate" />
            <FormControlLabel className='nonpate' control={<Checkbox disabled={nonPateD} checked={nonPateS} onChange={handleNonPateS} />} label="Non-Pate" />
          </div>
        )
      }
    </div>
  )
}
export default ItemDetails
