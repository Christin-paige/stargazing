import Carousel from 'react-bootstrap/Carousel';
import images from '../images/lituptent.jpg';
import images2 from '../images/bus.jpg'
import images3 from '../images/fire.jpg'

function Camping() {
  return (
    <Carousel className="carousel">
      <Carousel.Item>
        <img className="campingImages" src={images} />
        <Carousel.Caption>
          <h1>Solo</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="campingImages" src={images2}/>
        <Carousel.Caption>
          <h1>With Friends</h1>
        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="campingImages" src={images3} />
        <Carousel.Caption>
          <h1>By the Fire</h1>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Camping;







//    export default Carosel
   // const [data, setData] = useState(['']);
    //const [index, setIndex] = useState(0)
    //function handleClick() {
      //  setIndex(index + 1)
    //}
    //useEffect(() => {
    //fetch("https://developer.nps.gov/api/v1/parks?parkCode=?&api_key=qEcFWL0daD1Ht19yi85GQSFeexCpkJGCQTzwvs6V")
      //      .then(res => res.json())
        //    .then((data)=> {
          //      console.log(data);
            //    setData(data)
               
    //})
    //.catch((err) => {
      //  console.log(err.message);

    //})

     //}, [])
   //  return (
     // <>
      //<button onClick={handleClick}>
       // Next 
        //</button>
        //<h2>
         //   <i>{data.fullName}</i>
        //</h2>
        //<h3>
          //  ({index + 1})
        //</h3>
        //</>     
   //  )
//}



