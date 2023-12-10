import LeftSidebar from "../components/LeftSidebar"
import RightSidebar from "../components/RightSidebar"
import Topbar from "../components/Topbar"
import PostTweet from "../components/forms/PostTweet"



const Create = () => {
  return (
    <>
            <Topbar />

<main className="flex flex-row">
  <LeftSidebar />
  <section className="main-container">
    <div className="w-full max-w-4xl">
  
        <h1 className="head-text">Create Tweet</h1>
        <PostTweet/>
    
    </div>
  </section>
  <RightSidebar />
</main>
    </>
  )
}

export default Create
