
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home.jsx';
import {Box} from '@mui/material'
import DataProvider from './contextAPI/DataProvider.js';
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import { DetailViewData } from './details/DetailViewData.jsx';
import ListingForm from './components/header/Listing.jsx';
import SellerRegistration from './components/home/Seller.jsx';

// components

function App() {
  return (
   <DataProvider>
    <BrowserRouter>
     <Header/> 
     <Box style={{marginTop:58}}>
      <Routes>
     <Route path='/' element={<Home/>}/>
    
     <Route path="/product/:id" element={<DetailViewData/>}/>
     <Route path ="/listing" element = {<ListingForm />}/>
     <Route path ="/seller" element ={<SellerRegistration/>}/>
     </Routes>
     </Box>
    
     </BrowserRouter>
     </DataProvider>
   
    
  );
}

export default App;
