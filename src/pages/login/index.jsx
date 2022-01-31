import React, { useContext, useState } from "react";
import "./styles.css";

import { AuthContext } from "../../contexts/auth";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
export default function Login() {
  const [show, setShow] = useState(false);
  const { loading, login, username, setUsername, password, setPassword } =
    useContext(AuthContext);

  const history = useHistory("");
  const handleClick = (e) => {
    e.preventDefault();
    setShow(!show);
  };

  function handleSubmit(e) {
    e.preventDefault();
    if (!username || !password) {
      alert("Nome de Usuário e Senha são obrigatórios");
      return;
    } else {
      login(username, password);
      history.replace("/home");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Login</h3>

      <div className="form-group">
        <label>Usuário</label>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="username"
          className="form-control"
          placeholder="Informe seu Usuário"
        />
      </div>

      <div className="form-group">
        <label>Senha</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          className="form-control"
          placeholder="Informe Sua Senha"
        />
      </div>

      <div className="form-group">
        {/* <div className="custom-control custom-checkbox">
          <input
            type="checkbox"
            className="custom-control-input"
            id="customCheck1"
          />
          <label className="custom-control-label" htmlFor="customCheck1">
            Remember me
          </label>
        </div> */}
      </div>
      <br />

      <button
        type="submit"
        className="btn btn-primary btn-block"
        onClick={handleSubmit}
      >
        Submeter
      </button>
      <p className="forgot-password text-right">
        Recuperar <a href="#">Acesso?</a>
      </p>
    </form>
  );
}
