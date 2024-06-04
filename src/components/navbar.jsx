import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import images from '../images/camping.png'


function Navigation() {
  return (
    <>
   
   
   <Navbar data-bs-theme="dark"className="navbar">
        <Container>
          <Navbar.Brand href="#home">
            <div className="navbar">
            <img className="tent"
              alt=""
              src={images}
              width="30"
              height="30"
             
            />
            <h2>Stargazer Camping</h2>
            
            </div>
           

          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;