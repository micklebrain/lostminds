import { Link } from "react-router-dom";

import atlanta from './images/atlanta.jpeg';
import chicago from './images/chicago.jpeg';
import denver from './images/denver.jpeg';
import lasvegas from './images/lasvegas.jpeg';
import philadelphia from './images/philadelphia.jpeg';
import sanfrancisco from './images/sanfrancisco.jpeg';
import seattle from './images/seattle.jpeg';
import toronto from './images/toronto.jpeg';
import newyorkcity from './images/newyorkcity.jpeg';
import washingtonDC from './images/washingtonDC.jpg';

function Home() {

  var itinerary = ['Park', 'Club', 'Skydeck'];

  return (
    <div className="App">
      <h1> Links </h1>
      <h1> <a href="https://poshmark.com/closet/micklebrain"> poshmark.com/closet/micklebrain </a> </h1>
      <h1> <a href="https://opensea.io/collection/micklebrain"> NFT Collection </a> </h1>

    </div>
  );
}

export default Home;