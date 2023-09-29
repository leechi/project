// 여기에 라우터 깔아두기
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Main from './Main'
import DogList from './DogList'
import Join from './Join'
import Login from './Login'
import Header from '../components/Header'

const Body = () => {
  return (
    <body>
      
      <Routes>
        <Route path='/' element={<Main />}></Route>
        <Route path='/doglist' element={<DogList />}></Route>
        <Route path='/join' element={<Join />}></Route>
        <Route path='/login' element={<Login />}></Route>
      </Routes>
    </body>
  )
}

export default Body