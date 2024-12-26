import React from 'react'
import { Navbar } from '../../ui/components/navbar'
import { Navigate, Route, Routes } from 'react-router-dom'
import { MarvelPage,DcPage, SearchPage, HeroPage } from '../'

const HeroesRoutes = () => {
  return (
    <>
      <Navbar/>
      <div className='container'>
        <Routes>
            <Route path="marvel" element= {<MarvelPage/>}/>
            <Route path="dc" element= {<DcPage/>}/>
            <Route path="search" element= {<SearchPage/>}/>
            <Route path="hero/:id" element= {<HeroPage/>}/>
            <Route path="/" element= {<Navigate to="/marvel" />}/>
        </Routes>
      </div>
    </>
  )
}

export default HeroesRoutes
