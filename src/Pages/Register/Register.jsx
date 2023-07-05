import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useRegisterMutation } from "../../Slices/UserSlice";
import { setCredentials } from "../../Slices/authSlice.js";
import { toast } from "react-toastify";

const Register = () => {
  //Register
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  //dispatch and navigate
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //Mutation
  const [register, { isLoading }] = useRegisterMutation();

  //useSelector
  const { userInfo } = useSelector((state) => state.auth);

  //useEffect
  useEffect(() => {
    if (userInfo) {
      navigate("/home");
    }
  }, [navigate, userInfo]);

  //Submit Handler
  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Password Do Not Match");
    } else {
      try {
        const res = await register({ name, email, password }).unwrap();
        dispatch(setCredentials({ ...res }));
        console.log(userInfo);
        navigate("/home");
        toast.success("Register Success");
      } catch (err) {
        console.log(err);
        toast.error(err?.data?.message || err.error);
      }
    }
  };

  return (
    <div className="containerLogin">
      <h2>New User</h2>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Enter Your Name Here"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Enter Your Email Here"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter Password Here"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter Password Again"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <button className="button2">Register</button>
        <div>
          <Link to="/login" className="link">
            Already Have A Account
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
