import { useState } from 'react'
import Brandon from './assets/brandon.jpg'
import './App.css'
import SinglePanel from './assets/SinglePanel/SinglePanel'
import Rizz from './assets/PopupRizz/Rizz'
import Video from './assets/Video.mp4'

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
  const [isRizzOpen, setRizzOpen] = useState(false);
  const openRizz = () => {
    setRizzOpen(true);
  }

  const closeRizz = () => {
    setRizzOpen(false);
  }

  return (
    <>
      <SinglePanel users={users} />
      <div>Secret Button</div>
      <button onClick={() => openRizz()}>OwO</button>
      <Rizz isOpen={isRizzOpen} onClose={closeRizz} content={
        <div>
          <h2>Rim siêu thương otry !!!! </h2>
          <video src={Video} controls></video>
        </div>
      } />
    </>
  )
}

export default App
