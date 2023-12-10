import LeftSidebar from "../components/LeftSidebar";
import ProfileHeader from "../components/ProfileHeader";
import RightSidebar from "../components/RightSidebar";
import Topbar from "../components/Topbar";
// import * as TabsPrimitive from "@radix-ui/react-tabs";



const Home = () => {
  return (
    <>
      <Topbar />

      <main className="flex flex-row">
        <LeftSidebar />
        <section className="main-container">
          <div className="w-full max-w-4xl">
            <section className="relative">
              <section>
              <ProfileHeader/>

              </section>
            </section>
          </div>
        </section>
        <RightSidebar />
      </main>
    </>
  );
};

export default Home;
