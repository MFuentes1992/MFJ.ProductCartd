import React from 'react'
import { BrowserRouter as Router, Routes, NavLink, Route } from 'react-router-dom'
import { ShoppingPage } from '../pages/ShoppingPage'


export const AppRoutes = () => {
  return (
    <>
        <Router>
            <Routes>
                <Route path="/" element={<>Hola mundo</>} />
                <Route path="/shoping-car" element={<ShoppingPage />} />
            </Routes>
        </Router>
    </>
  )
}
