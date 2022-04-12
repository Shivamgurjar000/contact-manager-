import React from 'react';
import './App.css';
import {Routes,Route,Navigate} from 'react-router-dom';
import NavBar from './comonents/NavBar/NavBar';
import ContactList from './comonents/contact/ContactList';
import AddContact from './comonents/contact/AddContact';
import ViewContact from './comonents/contact/ViewContact';
import EditContact from './comonents/contact/EditContact';
let App =() => {
  return (
    <React.Fragment>
       <NavBar/>
       <Routes>
         <Route path={'/'} element={<Navigate to ={'/contact/list'}/>}/>
         <Route path={'/contact/list'} element={<ContactList/>}/>
         <Route path={'/contact/add'} element={<AddContact/>}/>
         <Route path={'/contact/view/:contactID'} element={<ViewContact/>}/>
         <Route path={'/contact/edit/:contactID'} element={<EditContact/>}/>
         
       </Routes>
    </React.Fragment>
  );
}

export default App;
