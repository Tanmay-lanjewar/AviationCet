import React, { useState, useEffect, useRef } from "react";
import { useAuth } from "../context/AuthContext";
import "./Color.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../store/authSlice";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentPath = location.pathname;
  const doActive = (path) => currentPath === path;
  const [storedUsername, setStoredUsername] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Ensure it's initialized
  const [isActive, setIsActive] = useState(false);
  const { logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isSticky, setIsSticky] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        if (window.scrollY < lastScrollY) {
          setIsSticky(true); // Show navbar when scrolling up
        } else {
          setIsSticky(false); // Hide navbar when scrolling down
        }
      } else {
        setIsSticky(false); // Hide navbar near the top
      }
      setLastScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);


  useEffect(() => {
    // Get the username from localStorage
    const username = localStorage.getItem("username");
    const user = localStorage.getItem("user");
    if (user) {
      dispatch(login());
    }

    if (username) {
      setStoredUsername(username); // Update the state with the username
    }
  }, [dispatch]);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setIsLoggedIn(true);
    }
  }, []);

  const timerRef = useRef(null);
  const handleRegisterClick = (e) => {
    setIsActive(true);
    timerRef.current = setTimeout(() => setIsActive(false), 3000);
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("email");
    setIsLoggedIn(false);
    logout(); // Use logout from context
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div className="site-wrap">
      <div className={`site-mobile-menu2 ${isMenuOpen ? "active" : ""}`}>
        <div className="site-mobile-menu-header">
          <div
            id="uper_div_cross"
            className="site-mobile-menu-close mt-3"
            onClick={() => setIsMenuOpen(false)} // Close sidebar when clicking the cross button
          >
            <span
              id="upper_cross_icon"
              className="icon-close2 js-menu-toggle"
            />
          </div>
        </div>
        <div className="site-mobile-menu-body2">
          <ul>
            <li>
              {" "}
              <a href="/jk"></a>
            </li>
            <li>
              <a
                href="/"
                className={`navcomp nav-link text-left ${
                  doActive("/") ? "active-link" : ""
                }`}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                className={`navcomp nav-link text-left ${
                  doActive("/about") ? "active-link" : ""
                }`}
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="/syllabus"
                className={`navcomp nav-link text-left ${
                  doActive("/syllabus") ? "active-link" : ""
                }`}
              >
                Syllabus
              </a>
            </li>
            <li>
              <a
                href="/courses"
                className={`navcomp nav-link text-left ${
                  doActive("/courses") ? "active-link" : ""
                }`}
              >
                Courses
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className={`navcomp nav-link text-left ${
                  doActive("/contact") ? "active-link" : ""
                }`}
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="/registration"
                className={`navcomp nav-link text-left ${
                  doActive("/registration") ? "active-link" : ""
                }`}
              >
                Start Registration
              </a>
            </li>
            <li>
              <a
                href="/our-college"
                className={`navcomp nav-link text-left ${
                  doActive("/our-college") ? "active-link" : ""
                }`}
              >
                Our College
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="py-2 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div id="header_info_left" className="col-lg-9 d-none d-lg-block">
              <a href="/policy" className="small mr-3 blue">
                <u>PRIVACY POLICY</u>
              </a>
              <a href="tel:+919356986816" className="small mr-3 blue">
                <span className="icon-phone2 mr-2 blue" /> +91 9356986816
              </a>
              <a
                href="mailto:aviationcetofficial@gmail.com"
                className="small mr-3 blue"
              >
                <span className="icon-envelope-o mr-2 blue" />{" "}
                aviationcetofficial@gmail.com
              </a>
            </div>
            <div className="col-lg-3 text-right">
              {isLoggedIn ? (
                <div>
                  <span style={{ color: "black" }}>
                    Hello,{storedUsername || "Guest"}&nbsp;!
                  </span>
                  &nbsp;&nbsp;
                  <a
                    href="/login"
                    className="small mr-3 blue"
                    onClick={handleLogout}
                  >
                    <span className="icon-unlock-alt blue" /> Log Out
                  </a>
                </div>
              ) : (
                <>
                  <a href="/login" className="small mr-3 blue">
                    <span className="icon-unlock-alt blue" /> Log In
                  </a>
                  <a
                    href="/register"
                    className={`small btn btn-primary px-4 py-2 rounded-0 backblue ${
                      isActive ? "active" : ""
                    }`}
                    id="bin"
                    onClick={handleRegisterClick}
                  >
                    <span className="icon-users " /> Register
                  </a>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <header
        style={{ background: "white" }}
        id={`${isSticky ? "main_sticky_header_sticky" : "main_sticky_header"}`}
        
        className={`site-navbar py-4 js-sticky-header site-navbar-target ${
          isSticky ? "sticky" : ""
        }`}
        role="banner"
      >
        <div className="container">
          <div className="d-flex align-items-center">
            <div className="site-logo">
              <a href="/" className="d-block">
                <img
                  src="/images/logo1.png"
                  alt="Image"
                  className="img-fluid"
                  style={{ height: "70px" }}
                />
              </a>
            </div>
            <div id="header_mr_auto" className="mr-auto">
              <div
                className="site-navigation position-relative text-right"
                role="navigation"
              >
                <ul className="site-menu main-menu js-clone-nav mr-auto d-none d-lg-block">
                  <li>
                    {" "}
                    <a href="/jk"></a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className={`nav-link text-left ${
                        doActive("/") ? "active-link" : ""
                      }`}
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="/about"
                      className={`nav-link text-left ${
                        doActive("/about") ? "active-link" : ""
                      }`}
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="/syllabus"
                      className={`nav-link text-left ${
                        doActive("/syllabus") ? "active-link" : ""
                      }`}
                    >
                      Syllabus
                    </a>
                  </li>
                  <li>
                    <a
                      href="/courses"
                      className={`nav-link text-left ${
                        doActive("/courses") ? "active-link" : ""
                      }`}
                    >
                      Courses
                    </a>
                  </li>
                  <li>
                    <a
                      href="/contact"
                      className={`nav-link text-left ${
                        doActive("/contact") ? "active-link" : ""
                      }`}
                    >
                      Contact
                    </a>
                  </li>
                  <li>
                    <a
                      href="/registration"
                      className={` nav-link text-left ${
                        doActive("/registration") ? "active-link" : ""
                      }`}
                    >
                      Start Registration
                    </a>
                  </li>
                  <li>
                    <a
                      href="/our-college"
                      className={` nav-link text-left ${
                        doActive("/our-college") ? "active-link" : ""
                      }`}
                    >
                      Our College
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="ml-auto ">
              <div className="social-wrap ">
                <a
                  className="backblue d-inline-block d-lg-none site-menu-toggle js-menu-toggle text-black"
                  onClick={(e) => {
                    e.preventDefault(); // Prevents adding `#contact` to the URL
                    setIsMenuOpen(!isMenuOpen);
                  }}
                >
                  <span className="icon-menu h3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};
export default Header;
