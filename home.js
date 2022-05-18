function Home(){
  const ctx = React.useContext(UserContext); 
    return (
    <Card
      txtcolor="black"
      header="Welcome to the Bad Bank"
      body={(<img src="home image.png" className="img-fluid" alt="Responsive image"/>)}
    />    
  );  
}