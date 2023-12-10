import LeftSidebar from "../components/LeftSidebar";
import RightSidebar from "../components/RightSidebar";
import SearchBar from "../components/SearchBar";
import Topbar from "../components/Topbar";

const Create = () => {
  return (
    <>
      <Topbar />

      <main className="flex flex-row">
        <LeftSidebar />
        <section className="main-container">
          <div className="w-full max-w-4xl">

            <section>
              <h1 className="head-text mb-10">Search </h1>
              <SearchBar/>
            </section>
          </div>
        </section>
        <RightSidebar />
      </main>
    </>
  );
};

export default Create;
