import { useState } from 'react'
import Brandon from './assets/brandon.jpg'
import './App.css'
import SinglePanel from './assets/SinglePanel/SinglePanel'

let users = [{
  name: 'John',
  age: 30,
  sex: 'male',
  img: Brandon,
  desc: 'toi dep chai da den'
},{
  name: 'Rim',
  age: 20,
  sex: 'all night',
  img: Brandon,
  desc: 'toi dep chai gioi cook'
},{
  name: 'Dilo',
  age: 20,
  sex: 'male',
  img: Brandon,
  desc: 'toi dep chai do an'
},
{
  name: 'John',
  age: 30,
  sex: 'male',
  img: Brandon,
  desc: 'toi dep chai da den'
},{
  name: 'Rim',
  age: 20,
  sex: 'all night',
  img: Brandon,
  desc: 'toi dep chai da den'
},{
  name: 'Dilo',
  age: 20,
  sex: 'male',
  img: Brandon,
  desc: 'toi dep chai da den'
},
{
  name: 'John',
  age: 30,
  sex: 'male',
  img: Brandon,
  desc: 'toi dep chai da den'
},{
  name: 'Rim',
  age: 20,
  sex: 'all night',
  img: Brandon,
  desc: 'toi dep chai da den'
},{
  name: 'Dilo',
  age: 20,
  sex: 'male',
  img: Brandon,
  desc: 'toi dep chai da den'
}]

function App() {

  return <SinglePanel users={users} />
}

export default App
