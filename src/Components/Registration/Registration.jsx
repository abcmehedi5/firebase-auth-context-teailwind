import React, { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Registration = () => {
  // handle change
  const { createUser, userProfileUpdate } = useContext(AuthContext);
  const handleSubmit = (event) => {
    event.preventDefault();
    const from = event.target;
    const name = from.name.value;
    const email = from.email.value;
    const password = from.password.value;

    // validate
    if (!/(?=.*[A-Z])/.test(password)) {
      alert("Please add at least one uppercase");
      return;
    } else if (!/(?=.*[0-9].*[0-9])/.test(password)) {
      alert("Please add at least two numbers");
      return;
    } else if (password.length < 6) {
      alert("Please add at least 6 characters in your password");
      return;
    }

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        userUpdate(result.user, name);
        alert("Register successfull");
        from.reset();
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  // update user profile
  const userUpdate = (user, name) => {
    userProfileUpdate(user, {
      displayName: name,
    })
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h5 className="text-3xl font-bold">Registratin Now</h5>
        </div>
        <form
          onSubmit={handleSubmit}
          className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
        >
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="full name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="email"
                className="input input-bordered"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                required
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Registration</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
