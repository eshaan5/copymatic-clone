import React, { useState } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import logo from '../../assets/logo.png'
import './navbar.css'
import { RiDashboardLine } from 'react-icons/ri'
import { VscLayers } from 'react-icons/vsc'
import { RiNewspaperLine } from 'react-icons/ri'
import { AiOutlineQuestionCircle, AiOutlineBell } from 'react-icons/ai'
import { FiRefreshCcw } from 'react-icons/fi'

const Navbar1 = () => {

  const [active, setActive] = useState('#dashboard')

  return (
    <>
      <Navbar expand="lg" className="navbar">
        <Container>
          <Navbar.Brand href="#home">
              <img src={logo} alt="" className="logo"/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <a className={active === '#dashboard' ? 'link active' : 'link'} onClick={() => setActive('#dashboard')}><RiDashboardLine size={21} />Dashboard</a>
              <a className={active === '#tools' ? 'link active' : 'link'} onClick={() => setActive('#tools')}><VscLayers size={21} />All Tools</a>
              <a className={active === '#content' ? 'link active' : 'link'} onClick={() => setActive('#content')}><RiNewspaperLine size={21} />My Content</a>
              <a className={active === '#how' ? 'link active' : 'link'} onClick={() => setActive('#how')}><AiOutlineQuestionCircle size={21} />How it Works</a>
              <a className={active === '#new' ? 'link active' : 'link'} onClick={() => setActive('#new')}><AiOutlineBell size={21} />What's new</a>
              </Nav>
              </Navbar.Collapse>

              <div className="refresh"><FiRefreshCcw /> 10</div>
              {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
 */}

        </Container>
      </Navbar>
    </>
  );
};

export default Navbar1;
