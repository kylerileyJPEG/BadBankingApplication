function AllData(){
    const ctx = React.useContext(UserContext);
    return (
      <>
     <h1>Account Summary</h1>
        
      <table class="table table-hover table-light">
    <thead class="thead-dark">
      <tr>
        <th scope="col">User</th>
        <th scope="col">Email</th>
        <th scope="col">Password</th>
        <th scope="col">Balance</th>
      </tr>
    </thead>
    <tbody>
          {ctx.users.map((user) => {
                      return (
            <tr>
              <td class="bg-info">{user.name}</td>
              <td class="bg-info">{user.email}</td>
              <td class="bg-info">{user.password}</td>
              <td class="bg-info">{user.balance}</td>
            </tr>
                      )
          })}
          </tbody>
  </table>

  <img src="bad bank.png" class="img-fluid" alt="Responsive image"></img>


      </>
    );
  }

  
  