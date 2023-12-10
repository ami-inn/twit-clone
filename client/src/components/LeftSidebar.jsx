import { sidebarLinks } from "../constants";
import { Link, useLocation } from "react-router-dom";
import logout from '../assets/logout.gif';

const LeftSidebar = () => {
  const location = useLocation();

  return (
    <section className="custom-scrollbar leftsidebar">
      <div className="flex w-full flex-1 flex-col gap-6 px-6">
        {sidebarLinks.map((link) => {
          const isActive = location.pathname === link.route;

          return (
            <Link
              to={link.route}
              key={link.label}
              className={`leftsidebar_link ${
                isActive && "border-2 shadow-[rgba(7,_65,_210,_0.1)_0px_7px_25px] text-[#1A97F1] "
              }`}
            >
              <img src={link.imgURL} alt={link.label} width={30} height={30} />

              <p
                className={`max-lg:hidden ${
                  isActive ? "text-[#1A97F1]" : "text-[#1A97F1]"
                }`}
              >
                {link.label}
              </p>
            </Link>
          );
        })}
      </div>

      <div className="mt-10 px-6">
        <div className="flex cursor-pointer gap-4 p-4">
          <img src={logout} alt="logout" width={32} height={32} />
          <p className='text-[#1A97F1] max-lg:hidden'>Logout</p>
        </div>
      </div>
    </section>
  );
};

export default LeftSidebar;
