import React, { Fragment } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './Navbar.css'

const Navbar = () => {
  return (
<Fragment>

<nav class="navbar navbar-expand-lg bg-body-tertiary bg-dark">
  <div class="container-fluid navbar">
    <a class="navbar-brand" href="#">Airplain</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link " aria-current="page" href="/register">Web1</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/web2">Web2</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="/web3">Web3</a>
      </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>


</Fragment>
  )
}

export default Navbar