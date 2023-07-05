import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLoginMutation } from "../../Slices/UserSlice.js";
import { setCredentials } from "../../Slices/authSlice.js";
import { toast } from "react-toastify";
import "./Login.css";

const Login = () => {
  //form states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //dispatch and navigate
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //Mutation
  const [login, { isLoading }] = useLoginMutation();

  //useSelector
  const { userInfo } = useSelector((state) => state.auth);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await login({ email, password }).unwrap();
      dispatch(setCredentials({ ...res }));
      toast.success("Login Success");
      navigate("/home");
    } catch (err) {
      console.log(err);
      toast.error(err?.data?.message || err.error);
    }
  };

  //useEffect
  useEffect(() => {
    if (userInfo) {
      navigate("/home");
    }
  }, [navigate, userInfo]);

  return (
    <div className="containerLogin">
      <h2>Login</h2>
      <form onSubmit={submitHandler}>
        <input
          type="email"
          placeholder="Enter Your Email Here"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="password"
          placeholder="Enter  Password Here"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        <button type="submit" className="button1">
          Login
        </button>
        <div>
          <Link to="/" className="link">
            Don't Have Account
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
