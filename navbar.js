function NavBar(){
  return(
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/Home/" data-toggle="tooltip" data-placement="bottom" title="Home Page">BadBank</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link" to="/CreateAccount/" data-toggle="tooltip" title="You can click here to create a new account">Create Account</Link>  
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/deposit/" data-toggle="tooltip" title="If you would like to make a deposit, please click here">Deposit</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/withdraw/" data-toggle="tooltip" title="if you would like to make a withdrawal, please click here">Withdraw</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/alldata/" data-toggle="tooltip" title="This is where you can find the account summary">All Data</Link>
          </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  );
}