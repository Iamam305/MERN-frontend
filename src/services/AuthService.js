import axios from "axios";


// register user 
export const registerUser = async (name, email, password) => {
  try {
    const res = await axios.post("http://localhost:5000/api/auth/createuser", {
      name: name,
      email: email,
      password: password,
    });

    return localStorage.setItem('user', JSON.stringify(res.data))
  } catch (err) {
    return console.log(err);
  }
};


// register user 
export const loginUser = async (email, password) => {
  try {
    const res = await axios.post("http://localhost:5000/api/auth/login", {
      email: email,
      password: password,
    });
    return console.log(res);
  } catch (err) {
    return console.log(err);
  }
};