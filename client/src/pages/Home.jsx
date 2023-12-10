import LeftSidebar from "../components/LeftSidebar";
import RightSidebar from "../components/RightSidebar";
import Topbar from "../components/Topbar";
import ThreadCard from "../components/cards/ThreadCard";

const Home = () => {
  return (
    <>
      <Topbar />

      <main className="flex flex-row">
        <LeftSidebar />
        <section className="main-container">
          <div className="w-full max-w-4xl">
            <section className="relative">
              <div>
                <ThreadCard />
                <ThreadCard />
              </div>
            </section>
          </div>
        </section>
        <RightSidebar />
      </main>
    </>
  );
};

export default Home;
