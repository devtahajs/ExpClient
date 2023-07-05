import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useUpdateMutation } from "../../Slices/UserSlice";
import { setCredentials } from "../../Slices/authSlice";
import { toast } from "react-toastify";

const ProfilePage = () => {
  //update Details
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  //useSelector
  const { userInfo } = useSelector((state) => state.auth);

  //dispatch and navigate
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //use Mutation
  const [updateProfile, { isLoading }] = useUpdateMutation();

  //useEffect
  useEffect(() => {
    setName(userInfo.name);
    setEmail(userInfo.email);
  }, [userInfo.name, userInfo.email]);

  //Submit Handler
  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Password Do Not Match");
    } else {
      try {
        const res = await updateProfile({
          _id: userInfo._id,
          name,
          email,
          password,
        }).unwrap();
        dispatch(setCredentials({ ...res }));
        toast.success("Profile Updated Successfully");
      } catch (error) {
        toast.error(error?.data?.message || error.error);
      }
    }
  };

  return (
    <div className="containerLogin">
      <h2>Update Details</h2>
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

        <button className="button2">Update</button>
      </form>
    </div>
  );
};

export default ProfilePage;
