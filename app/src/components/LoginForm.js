import { Toggeable } from "./Toggeable";
import { useState } from "react";
import PropTypes from 'prop-types';
export const LoginForm = ({ handleSubmit }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submitLogin = (event) => {
    event.preventDefault();
    handleSubmit(username, password);
    setUsername('');
    setPassword('')
  };

  return (
    <Toggeable buttonLabel="Mostrar Login">
      <form onSubmit={submitLogin}>
        <p>
          <input
            type="username"
            name="Username"
            value={username}
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </p>
        <p>
          <input
            type="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </p>
        <input id="input-login-button" type="submit" value="login" />
      </form>
    </Toggeable>
  );
};


LoginForm.propTypes={
  handleSubmit: PropTypes.func.isRequired
}