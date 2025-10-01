import React, { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import InputBox from "../../components/ui/InputBox";

const Signin = () => {
  const {currentUser} = useAuth();
  console.log(currentUser);
  
  const [user, setUser] = useState({
    email: "",
    password: ""
  })

    const onChange = (e)=> {
      const {name, value} = e.target;
      setUser({...user, [name]: value})
  }
  const {login} = useAuth()

  const handleLogin = (e)=> {
    e.preventDefault();
    console.log(currentUser);
    
    if (!currentUser?.emailVerified) {
      console.log("Please verify your email, the try again");
    }
    login(user.email, user.password)
  }

  return (
    <section className="bg-gray-100 py-20 dark:bg-dark lg:py-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="relative mx-auto max-w-[525px] overflow-hidden rounded-lg bg-white px-10 py-16 text-center dark:bg-dark-2 sm:px-12 md:px-[60px]">

              <form onSubmit={handleLogin}>
                <InputBox
                onChange={(e)=> onChange(e)}
                  type="email"
                  name="email"
                  placeholder="Email"
                />
                <InputBox
                onChange={(e)=> onChange(e)}
                  type="text"
                  name="password"
                  placeholder="Password"
                />
                <div className="mb-10">
                  <input
                    type="submit"
                    value="Sign In"
                    className="w-full cursor-pointer rounded-md border border-primary bg-primary px-5 py-3 text-base font-medium text-white transition hover:bg-opacity-90"
                  />
                </div>
              </form>
              <button
              type="button"
                className="mb-2 inline-block text-base text-orange hover:text-primary hover:underline "
              >
                Forget Password?
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signin;


