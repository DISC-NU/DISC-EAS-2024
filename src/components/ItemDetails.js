import React, { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import '../styles/ItemDetails.css';

function ItemDetails( { receiveLitter, receiveDogFoodDry, receiveCatFoodDry }) {
  
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
