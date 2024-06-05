import { useState } from 'react';
import { campsites } from "../campData";




function Campsites () {
    const [isFlipped, setIsFlipped] = useState([]);

const handleClick = (index) => {
    if(isFlipped.includes(index)){
        setIsFlipped(isFlipped.filter(item => item !== index));
    }else{
        setIsFlipped([...isFlipped, index])
    }
    
};
 return (
    <div className="card-grid">
        {campsites.map((item, index)=> (
            <div key={index} className={`card ${isFlipped.includes(index) ? "isFlipped" : ""}`}>
                <div className="card-front" onClick={() => handleClick(index)}>
                    <img className="card-image" src={item.img} alt="image" />
                </div>
                <div className="card-back" onClick={() => handleClick(index)}>
                    <p>{item.name}</p>
                    <p>{item.description}</p>
                </div>
                </div>
        ))}
    </div>
 )
}
 export default Campsites;
/*return (
  <>
 
    <div className={`card ${isFlipped ? "isFlipped" : ""}`}> 
    <div className="card-grid">
        <div className="card-front" onClick={()=> setIsFlipped(!isFlipped)}>
          
            {
                campsites.map((item, index)=>{
                    console.log(campsites)
                    return(
                        <div key={index}>
                            <div onClick={()=>handleClick}>
                                <img src={item.img} alt="image" style={{objectFit: 'cover'}}/>
                            </div>
                        </div>
                        
                    )
                })
            }
            </div>
            </div>
        </div>

        <div className="card-grid">
        <div className="card-back" onClick={() => setIsFlipped(!isFlipped)}>
       
            <div onClick={() => handleClick}><p>Campsite information</p></div>
        </div>
        </div>
 </>
)}*/

