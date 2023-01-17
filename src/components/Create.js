import { useEffect, useState } from "react";
import Navbar from "./NavBar";
import bboySesame from "./images/bboySesame.png";
import cookieGamer from "./images/cookieGamer.png";
import darthSesame from "./images/darthSesame.png";
import sesameSith from "./images/sesameSith.png";
import elmoDev from "./images/elmoDev.png";
import whyDM from "./images/whyDM.jpg";
import { Leaderboard } from "./database";

const Create = () => {
  const [name, setName] = useState("");

  const [img, setImg] = useState("sesameSith");

  const handleSubmit = (e) => {
    e.preventDefault();
    const profile = { name, img,score:0, location: 'Singapore'};
    Leaderboard.push(profile)
    

    console.log(Leaderboard);
    alert('signed up!')
  };

  return (
    <div className="create">
      <Navbar></Navbar>
      <h2>New Year Championships Join to get a cookie! Win & get double scoop Ben & Jerrys!</h2>
      
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>Choose img:</label>
        <select
          value={img}
          onChange={(e) => {
            setImg(e.target.value);
          }}
        >
          <option value="bboySesame">bboySesame</option>
          <option value="cookieGamer">cookieGamer</option>
          <option value="elmoDev">elmoDev</option>
          <option value="darthSesame">darthSesame</option>
          <option value="sesameSith">sesameSith</option>
          <option value="whyDM">whyDM</option>
        </select>
        <img
          className="IMAGE"
          src={
            img == "bboySesame"
              ? bboySesame
              : img == "elmoDev"
              ? elmoDev
              : img == "cookieGamer" ? cookieGamer : img == "darthSesame" ? darthSesame: img == "whyDM"? whyDM: sesameSith
          }
        ></img>
        <button>Register</button>
      </form>
    </div>
  );
};

export default Create;
