import React, {useState} from "react";
import ReactDOM from "react-dom";
import axios from 'axios'

import LoginJumbo from "./components/LoginJumbo.jsx"
import Profile from "./components/Profile.jsx"

// Retrieving previous logins in case the user returns back to the landing page
// TODO: Switch to passing a JWT on requests/responses for authentication
const previousLogIn = localStorage.getItem('MoozLogIn');
const previousImage = localStorage.getItem('image')
const previousName = localStorage.getItem('name')

const App = () => {
  
  const [loggedIn, setLoggedIn] = previousLogIn ? useState(true) : useState(false)
  const [name, setName] = previousName ? useState(previousName) : useState('')
  const [image, setImage] = previousImage ? useState(previousImage) : useState('')

  const [foundMatch, setFoundMatch] = useState(false)
  const [matchName, setMatchName] = useState('')
  const [matchImage, setMatchImage] = useState('')

  const responseGoogle = ({profileObj:{name, imageUrl}}) => {
    setName(name)
    setImage(imageUrl)
    setLoggedIn(true)
    localStorage.setItem('MoozLogIn', 'true')
    localStorage.setItem('name', name)
    localStorage.setItem('image', imageUrl)
  }

  const findMatch = () => {
    axios.post('/match').then( ({data}) => {
      setFoundMatch(true)
      setMatchName(data.name)
      setMatchImage(data.image)
    })
  }
  
  return ( 
      <div>
        {!loggedIn && <LoginJumbo responseGoogle={responseGoogle}/>}
        {loggedIn && 
          <div>
            <nav className="navbar navbar-dark bg-primary">
              <span className="navbar-brand mb-0 h1">Mooz</span>
            </nav>
            <div className='feed'>
                <Profile name={name} image={image} findMatch = {findMatch}/>
                {foundMatch && <Profile name={matchName} image={matchImage} />}
            </div>
          </div>
        }
      </div>
  );
}



ReactDOM.render(<App />, document.getElementById("app"));