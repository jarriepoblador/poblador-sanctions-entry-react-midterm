import React, { } from 'react'
import './App.css'

import {BrowserRouter, Routes, Route} from 'react-router-dom'

import ListSanctionPage from "./pages/ListSanctionPage"
import AddSanction from "./pages/AddSanction"
import EditSanction from './pages/EditSanction'

function App() {
  return (
    <div className='vh-100 gradient-custom'>
      <div className='container'>
        <h1 className='page-header text-center'>React-JS and Python Flask CRUD Create, Read, Update, and Delete Mysql-Database</h1>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ListSanctionPage />} />
            <Route path="/sanctionadd" element={<AddSanction />} />
            <Route path="/sanctionupdate/:id/edit" element={<EditSanction />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App
