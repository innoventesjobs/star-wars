const Login = () => {
  return (
    <div>
      <div>
        <label htmlFor="username">Username: </label>
        <input id="username" type="text" />
      </div>
      <br/>
      <div>
        <label htmlFor="password">Password: </label>
        <input id="password" type="password" />
      </div>
      <br/>
      <div>
        <button>Submit</button>
      </div>
    </div>
  )
}

export default Login;