import axios from "axios";
import { useState } from "react";

function App() {
  const [user, setUser] = useState("");
  const [userName, setUserName] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const [url, setUrl] = useState("");

  const handleChange = (e) => setUser(e.target.value);
  const handleClick = () => {
    axios.get(`https://api.github.com/users/${user}`).then((res) => {
      setUserName(res.data.login);
      setProfilePic(res.data.avatar_url);
      setUrl(res.data.html_url);
    });
  };

  return (
    <div className="App">
      <h1>Buscar Usuários Git Hub</h1>
      <input
        type="text"
        placeholder="Digite o nome do usuário"
        onChange={handleChange}
        required
      />
      <button onClick={handleClick}>Buscar</button>
      <div className="container">
        {profilePic && (
          <img src={profilePic} alt={userName} width={200} height={200} />
        )}
        <p>
          <a href={url} target="_blank">
            {userName}
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;
