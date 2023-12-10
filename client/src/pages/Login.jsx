
import TwitterLogin from "react-twitter-login";
import Topbar from "../components/Topbar";
import LoginImg from '../assets/login.png';
import Logo from '../assets/twiter-square.png'

const Login = () => {
  const authHandler = (err, data) => {
    console.log(err, data);
    // Handle authentication success or failure here
  };

  return (
    < >
      <Topbar />
      <section className="w-full bg-gradient-to-r from-[#dbeaff] from-10% via-[#7bb0ee] via-30% to-[#1f9df0] to-90% flex items-center justify-center h-screen">
        <div className="max-w-[960px] bg-black-dark grid grid-cols-2 items-center gap-20 p-5 rounded-2xl">
          <div className=" hidden md:block">
            <img src={LoginImg} alt="" />
          </div>

          <div className="max-w-80 grid gap-5">
            <h1 className="head-text font-bold text-white">Login</h1>
            <p className="text-[#0e3770] text-base-semibold">
              You Need To Login With Twitter Account
            </p>
            <form action="" className="space-y-6 text-white">
             
              <TwitterLogin
                authCallback={authHandler}
                consumerKey={''}
                consumerSecret={''} 
                className="bg-white border-dark-1 duration-150 hover:!border-2 drop-shadow-lg border-2 border-b-4  w-80 font-semibold rounded-full py-3 flex items-center justify-center cursor-pointer"
              >
                 {/* border-dark-1 flex justify-center duration-150 hover:!border-b-2 text-white rounded-xl drop-shadow-lg group  items-center border-2 border-b-4 border-blue-950 cursor-pointer active:bg-[#1a89f1] */}
                <span className="mr-2 text-black text-base-semibold">Login with Twitter</span>
              
                <img src={Logo} width={20} height={20} alt="Twitter Icon" />
              </TwitterLogin>

            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
