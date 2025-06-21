import React from "react"
import ComboBox from "./ComboBox";
import { useNavigate } from "react-router-dom";




const members = [
    {
      id: 1,
      name: 'Ronald',
      addres: 'Masindi'
    },
    {
      id: 2,
      name: 'James',
      addres: 'Hoima'
    },
    {
      id: 3,
      name: 'Paul',
      addres: 'Kampala'
    }
  ]

  const Home = () => {
    const navigate = useNavigate()
    return (
        <div>
          <div>HOME PAGE</div>
          <div><button onClick={() => navigate('/about')}>About us</button></div>
        </div>
      )
    
  };

  export default Home;

