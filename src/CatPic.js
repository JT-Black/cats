import React from 'react';
import './App.css';

let baseUrl = 'https://api.thecatapi.com/v1/images/search';
let apiKey = '6e5166d6-07ed-4126-8560-bdc8f3080fe8';


function CatPic(){
  const [url, setUrl] = React.useState("")
  function fetchCat() {
    fetch(baseUrl, {headers:{'x-api-key': apiKey}} ).then(res => {
      if(res.ok){
        return res.json();
      }
      throw new Error('Fetch Failed');
    }, networkError => console.log(networkError.message)
    ).then(jsonRes =>{
        setUrl(jsonRes[0].url)
    })
  }

  React.useEffect(()=> {
    fetchCat()
  }, [] )

  return (
    <div>
      
      <div className='container' >
        <div className="pic">
          <img src={url} alt="here kitty kitty!" />
        </div>
      </div>
      <button className=' App button' onClick={fetchCat} >Get Cat!</button>
    </div>
  )
    
  
}

export default CatPic