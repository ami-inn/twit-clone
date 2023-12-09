import { sidebarLinks } from "../constants";
import { Link } from "react-router-dom";
import logout from '../assets/logout.svg'

const LeftSidebar = () => {
  return (
    <section className="custom-scrollbar leftsidebar">
      <div className="flex w-full flex-1 flex-col gap-6 px-6">
        {sidebarLinks.map((link) => {
          const isActive =
            window.location.pathname.includes(link.route) ||
            window.location.pathname === link.route;

          //   if (link.route === '/profile') link.route = `${link.route}`;

          return (
            <Link
              to={link.route}
              key={link.label}
              className={`leftsidebar_link ${
                isActive && "bg-[#1A97F1] text-white "
              }`}
            >
              <img src={link.imgURL} alt={link.label} width={24} height={24} />

              <p
                className={`max-lg:hidden ${
                  isActive ? "text-white" : "text-[#1A97F1]"
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
