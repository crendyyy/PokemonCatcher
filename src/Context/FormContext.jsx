import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [coins, setCoins] = useState(1000);
  const [pokemons, setPokemons] = useState([]);
  const [pokeballs, setPokeballs] = useState({
    pokeBall: 1,
    greatBall: 1,
    masterBall: 3,
  });

  const [registerUser, setRegisterUser] = useState([
    {
      userName: "blonded.",
      email: "lol@gmail.com",
      password: "123",
      coins: coins,
      pokemons: pokemons,
      pokeballs: pokeballs,
    },
  ]);
  console.log(user);
  console.log(registerUser);

  const login = (email, password) => {
    const foundUser = registerUser.find(
      (user) => user.email === email && user.password === password
    );
    if (foundUser) {
      setUser(foundUser);
      return true;
    } else {
      return false;
    }
  };

  const register = (userName, email, password) => {
    const newUser = {
      userName: userName,
      email: email,
      password: password,
      coins: coins,
      pokemons: pokemons,
      pokeballs: pokeballs,
    };
    const foundUser = registerUser.find(
      (user) => user.userName === userName || user.email === email
    );
    if (!foundUser) {
      setRegisterUser([...registerUser, newUser]);
      return true;
    } else {
      return false;
    }
  };

  const logout = () => {
    if (user) {
      const userIndex = registerUser.findIndex(
        (registeredUser) => registeredUser.email === user.email
      );
      if (userIndex !== -1) {
        const updatedUser = [...registerUser];
        updatedUser[userIndex] = { ...updatedUser[userIndex], ...user };
        setRegisterUser(updatedUser);
      }
      setUser(null);
    }
  };

  return (
    <UserContext.Provider value={{ user, setUser, login, register, logout }}>
      {children}
    </UserContext.Provider>
  );
};
