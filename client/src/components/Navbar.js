import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import { PostApiContext } from '../context/PostApiContext';
// import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
// import { MyPostApiContext } from '../context/MyPostApiContext';



export default function Navbarrr(props) {
    // const { search, setSearch, setIndex, setPageIndex } = useContext(PostApiContext);
    // const { search:mysearch, setSearch:mysetSearch, setIndex:mysetIndex, setPageIndex:mysetPageIndex, user } = useContext(MyPostApiContext);
    const navigate = useNavigate(); 

    const handleLogout = () => {
        localStorage.removeItem("auth");
    }


    return (
        <Navbar expand="lg" className="bg-info">
            <div className="container " style={{ fontSize: "1rem" }}>
                <Navbar.Brand href="/home" className='fs-2 fst-italic'>Code Ninja</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav className="me-auto">
                        <Nav.Link href="/home">HOME</Nav.Link>
                        
                    </Nav>
                    
                    <Nav className="ms-auto">
                        
                        <Nav.Link href="/login" onClick={handleLogout}>LOGOUT</Nav.Link>



                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
}
