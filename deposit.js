function Deposit(){
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [name, setName]         = React.useState('');
  const [email, setEmail]       = React.useState('');
  const [password, setPassword] = React.useState('');
  const [quantity, setDeposit] = React.useState(0);
  const [total, setTotal] = React.useState(0);
  const ctx = React.useContext(UserContext);  
  var length = ctx.users.length -1;


  function handleCreate(){
    if (!validate(quantity, 'deposit amount')) 
      return;
    if (isNaN(quantity)) {
    alert(`Must be a number`);
      return;
  }
  
  if (quantity <= 0) {
    alert(`Must be a positive number`);
      return;
  }

  function validate(field, label){
    if (!field) {
      setTimeout(() => setStatus(''),3000);
      return false;
    }     
    return true;
}
  
  setShow(false);
    var balance = deposited(); 
    ctx.users.balance = balance; 
    let withdrawalAmount = "0";
  
  updateAccount();
    let name = ctx.users[length].name;
    let email = ctx.users[length].email;
    let password = ctx.users[length].password;
    ctx.users.push({name,email,password,balance, quantity, withdrawalAmount});
}    

function updateAccount() {
  setName(() => (ctx.users[length].name));
  setEmail(ctx.users[length].email);
  setPassword(ctx.users[length].password)
  return;
}

function deposited() {
  let userDeposit = ctx.users.length -1;
  let previousAmount = ctx.users[userDeposit].balance;
  var finalDeposit = previousAmount + parseInt(quantity);
  setTotal(finalDeposit);
  return finalDeposit;

}

function clearForm(){
  setShow(true);    
  setDeposit(0);
}

  return (    
    <Card
      bgcolor="info"
      header="Deposit"
      status={status}
      body={show ? (  
              <>
              {ctx.users[length].name},<br/><br/>                            
              How much would you like to deposit? {ctx.users.balance}<br/><br/>
              Deposit<br/>
              <input type="input" className="form-control" id="name" placeholder="Enter amount" value={quantity} onChange={e => setDeposit(e.currentTarget.value)} /><br/>
              <button type="submit" className="btn btn-light" onClick={handleCreate} disabled={!quantity}>Confirm Deposit</button>
              </>
            ):(
              <>
              <h5>Success</h5>              
              <button type="submit" className="btn btn-light" onClick={clearForm}>Add another deposit</button>
              </>
            )}
      depositTotal = {total}
    />
  )
}