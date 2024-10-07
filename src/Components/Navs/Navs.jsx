import React from 'react';
import './Navs.css';
import logo from '../../assets/logo.png';
const Navs = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container">
    <a className="navbar-brand" href="#">
      <img src={logo} alt="logo" />
    </a>
    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/#">about us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/#">Explore Foods</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/#">Review</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/#">Faq</a>
        </li>
        <li className="nav-item">
          <a className="lastnav" href="/#">2111112444</a>
        </li>
       
      </ul>
      
    </div>
  </div>
</nav>
  )
}

export default Navs


















// import React from 'react';
// import {Container , Nav , Navbar , NavDropdown } from 'react-bootstrap';

// const Navs = () => {
//   return (
//     <Navbar expand="lg" className="bg-body-tertiary">
//       <Container>
//         <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link href="#home">Home</Nav.Link>
//             <Nav.Link href="#link">Link</Nav.Link>
//             <NavDropdown title="Dropdown" id="basic-nav-dropdown">
//               <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.2">
//                 Another action
//               </NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="#action/3.4">
//                 Separated link
//               </NavDropdown.Item>
//             </NavDropdown>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };


// export default Navs;





