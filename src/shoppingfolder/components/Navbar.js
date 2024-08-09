import React from 'react';
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#bannersec">C.B.R DAIRY</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
            style={{ outline: 'none', border: "none" }}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#bannersec">Home</a>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#bannersec" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Milk Types
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#buffalo">Buffalo Milk</a></li>
                  <li><a className="dropdown-item" href="#cow">Cow Milk</a></li>
                  <li><a className="dropdown-item" href="#packet">Packet Milk</a></li>
                </ul>
              </li>
            </ul>
            <form className="d-flex">
              <input type='text' className='search form-control me-2' placeholder='search' />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            <li className="nav-item sign" type="none">
              <a className="nav-link" href="#footer">Signin</a>
            </li>
            <li className="nav-item sign" type="none">
              <a className="nav-link" href="#footer">Signup</a>
            </li>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
