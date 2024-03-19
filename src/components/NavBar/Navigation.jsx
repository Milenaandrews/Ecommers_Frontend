import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import UserContext from "../../context/user/UserContext";
import CartIcon from "../cartComponents/cartIcon/CartIcon";
import CartDropdown from "../cartComponents/cartDropdown/CartDropdown";
import CartContext from "../../context/cart/CartContext";
import { FaBookReader } from "react-icons/fa";
import { Box, Typography } from "@mui/material";




const Navigation = () => {
    const { infoUser, signOut, authStatus, verifyToken } = useContext(UserContext)

    const { isCartOpen } = useContext(CartContext)



    console.log(infoUser)

    useEffect(() => {
        const getInfoUser = async () => {
            await verifyToken()

        }
        getInfoUser()
    }, [infoUser]);

    return (
        <>
            <Navbar collapseOnSelect expand="lg" variant="dark" bg="dark" className="fixed-top">
                <Navbar.Brand as={NavLink} to='/' className="ms-3">
                    <Box sx={{ display: "flex", gap: 3, alignItems: "center" }}>

                        <FaBookReader />
                        <Typography id="modal-modal-title" variant="h6" component="h2" align="center">
                            Bookstore
                        </Typography>
                    </Box>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={NavLink} to="/catalogo">Catálogo</Nav.Link>
                        {/* <Nav.Link as={NavLink} to="/checkout">Checkout</Nav.Link> */}

                        {authStatus &&
                            <>

                                <NavDropdown title={`${infoUser ? infoUser.name : 'No conectado'}`}>
                                    <NavDropdown.Item as={NavLink} to="/perfil">Mi Perfil</NavDropdown.Item>
                                    {/* <NavDropdown.Item as={NavLink} to="/user/options">Options</NavDropdown.Item> */}
                                </NavDropdown>
                            </>}
                    </Nav>
                    <Nav>
                        {authStatus ? <Button onClick={signOut} className="me-3">Cerrar sesión</Button> : <Nav.Link className="me-3" as={NavLink} to="/auth">Inicia sesión</Nav.Link>}
                        <CartIcon />
                        {isCartOpen && <CartDropdown />}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}
export default Navigation