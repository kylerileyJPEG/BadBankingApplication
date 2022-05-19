function Withdraw(){
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [name, setName]         = React.useState('');
  const [email, setEmail]       = React.useState('');
  const [password, setPassword] = React.useState('');
  const [quantity, setDeposit] = React.useState(0);
  const [total, setTotal] = React.useState(0);
  const ctx = React.useContext(UserContext);
  var length = ctx.users.length -1;  

function validate(field, label){
    if (!field) {
      setTimeout(() => setStatus(''),3000);
      return false;
    }     
      return true;
}

function handleCreate(){
  if (isNaN(quantity)) {
    alert(`Must be a number`);
            return;}
  if (quantity <= 0) {
    alert(`Cannot be a negative number`);
            return;}
  
  setShow(false);
    var balance = quantityDeposited();
    ctx.users.balance = balance;
    let amountWithdrawn = quantity;
    let name = ctx.users[length].name;
    let email = ctx.users[length].email;
    let password = ctx.users[length].password;
    ctx.users.push({name,email,password,balance,amountWithdrawn});
}    

function quantityDeposited() {
  var length = parseInt(JSON.stringify(ctx.users.balance)) - parseInt(quantity);
  if (length < 0) {
    alert(`Account Overdraft`);
    return parseInt(JSON.stringify(ctx.users.balance))
  }
  return length;
}

function clearForm(){
  setShow(true);
  setStatus('');    
  setDeposit(0);
}

function updateAccount() {
  setName(() => (ctx.users[length].name));
  setEmail(ctx.users[length].email);
  setPassword(ctx.users[length].password)
  return;
}


  return (    
    <Card
      bgcolor="info"
      header="Withdrawal"
      status={status}
      body={show ? (  
              <>
              {ctx.users[length].name}, <br/><br/>              
              How much would you like to withdraw? <br/><br/>  
              Your balance is: {ctx.users.balance}<br/><br/>           
              Withdraw<br/>
              <input type="input" 
                className="form-control" 
                id="name" 
                placeholder="Enter amount" 
                value={quantity} 
                onChange={e => setDeposit(e.currentTarget.value)} /><br/>

              <button type="submit" 
                className="btn btn-light" 
                onClick={handleCreate} 
                disabled={!quantity}>Confirm Withdrawal</button>
              </>
            ):(
              <>               
              {!status && (<h5>Success</h5>)}
              <button type="submit" 
                className="btn btn-light" 
                onClick={clearForm}>Would You like to withdraw more?</button>
              </>
            )}
    />
  )
}