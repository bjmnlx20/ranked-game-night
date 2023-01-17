import React, { useState } from 'react'
import Profiles from './profiles';
import { Leaderboard } from './database';
import Navbar from './NavBar';

export default function Board() {

    const [period, setPeriod] = useState(0);
    const [megaData, setMegaData] = useState(Leaderboard);
    const [name, setName] = useState("Ben");
    const [points, setPoints] = useState(0);

  const handleClick = (e) => {
     
    setPeriod(e.target.dataset.id)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let newArr = [...megaData]
    
    newArr = newArr.map( (entry) => {
        let newEntry = {...entry}
        console.log(newEntry.name, {name})

        
        
        if (newEntry.name == name) {
            newEntry.score = parseInt(newEntry.score) + parseInt(points)
            console.log(newEntry)
        }
        return newEntry

    })
    


    setMegaData(newArr)
    // const profile = { name, img };
    // Leaderboard.push(profile)
    // let filter = data.filter(val => {
    //     let userDate = new Date(val.dt);
    //     if (between == 0) return val;
    //     return previous <= userDate && today >= userDate;
    // })
    

    // console.log(Leaderboard);
  };

  return (
    
    
    <div className="board">
    <Navbar></Navbar>
        <div className="create">
            
        <form onSubmit={handleSubmit}>

        <label>Add Points</label>
        <select
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        >
            {megaData.map(
                (entry) =>
                <option value={entry.name}>{entry.name}</option>   
                )}
        </select>
        <input
          type="number"
          required
          value={points}
          onChange={(e) => setPoints(e.target.value)}
        />

        <button>Add</button>
      </form>
      </div>

        
        

        <div className="duration">
            
        </div>
        <Profiles Leaderboard={between(megaData, period)}></Profiles>

    </div>
    
    
  )
}



function between(data, between){
    const today = new Date();
    const previous = new Date(today);
    previous.setDate(previous.getDate() - (between + 1));


    // sort with asending order
    return data.sort((a, b) => {
        if ( a.score === b.score){
            return b.score - a.score;
        } else{
            return b.score - a.score;
        }
    })

}
