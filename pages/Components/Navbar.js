import React from "react";
import Image from "next/image";
import Logo from '../../public/logo.png';
import Link from "next/link";



const Navbar = ({ isLoggedIn }) => {
    return (
        
        <>
            <header className="header">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                            <div className="logoimg">
                                <Image src={Logo} className="img-fluid" alt="logo" />
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-9 col-lg-9 col-xl-9 col-xxl-9">
                            <nav className="navbar navbar-expand-lg navbar-light">
                                <button
                                    className="navbar-toggler"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#navbarSupportedContent"
                                    aria-controls="navbarSupportedContent"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation"
                                >
                                    <span className="navbar-toggler-icon" />
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <Link className="nav-link active" href='/'>
                                                HOME
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" href='/'>
                                                APPAREL
                                            </Link>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <Link
                                                className="nav-link dropdown-toggle"
                                                id="navbarDropdown"
                                                role="button"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                                href='/'
                                            >
                                                HOME GOODS
                                            </Link>
                                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                <li>
                                                    <Link className="dropdown-item" href='/'>
                                                        Action
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link className="dropdown-item" href='/'>
                                                        Another action
                                                    </Link>
                                                </li>
                                              
                                                <li>
                                                    <Link className="dropdown-item" href='/'>
                                                        Something else here
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" href='/'>OUR BAGS</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" href='/'>FAVORITE PAIRINGS</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" href='/'>CONTACT US</Link>
                                        </li>
                                    </ul>

                                </div>

                            </nav>

                        </div>
                    </div>
                </div>

                <hr className="header1"></hr>
                <div className="middleheader">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <div className="icon-input">
                                    <input
                                        className="icon-input__text-field form-control"
                                        type="text"
                                        placeholder="Search For Products & Categories"
                                    />
                                    <i className="fa-solid fa-magnifying-glass" />
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <div className="header3 d-flex justify-content-end">
                                    <ul>
                                    {isLoggedIn ? (
                                        <li className="nav-item">
                                            <Link href="/Login">
                                                Logout
                                            </Link>
                                        </li>
                                    ) : (
                                        <li className="nav-item">
                                            <Link href="/Components/register">
                                                Register
                                            </Link>
                                        </li>
                                    )}
                                        <li><Link href='/'><i className="fa-regular fa-heart"></i></Link></li>
                                        <li><Link href='/'><i className="fa-solid fa-cart-shopping"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>


        </>
    )
}




export default Navbar;