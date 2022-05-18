function Spa() {
  return (
    <HashRouter>
      <NavBar/>
      <UserContext.Provider value={{users:[{name:'kyle',email:'kyle@mit.edu',password:'secret123',balance:0}]}}>
        <div className="container" style={{padding: "5px"}}>
          <Routes>
            <Route path="/" exact element={<Home/>} />
            <Route path="/Home/" element={<Home/>} />
            <Route path="/CreateAccount/" element={<CreateAccount/>} />            
            <Route path="/deposit/" element={<Deposit/>} />
            <Route path="/withdraw/" element={<Withdraw/>} />            
            <Route path="/alldata/" element={<AllData/>} />
          </Routes>
        </div>
      </UserContext.Provider>      
    </HashRouter>
  );
}

ReactDOM.render(
  <Spa/>,
  document.getElementById('root')
);