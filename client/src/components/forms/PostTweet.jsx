import { useState } from "react";
import { ImSpinner2 } from "react-icons/im";

const PostTweet = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(!isLoading);
  };

  return (
    <div>
      <form className="mt-10 flex flex-col justify-start gap-10">
        <div className="flex w-full flex-col gap-3">
          <label htmlFor="#" className="text-base-semibold text-dark-2">
            content
          </label>
          <div className="no-focus border border-[#b1d0fc] text-dark-2">
            <textarea
              id="message"
              rows="15"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 border border-gray-300 focus:ring-[#1A97F1] focus:border-[#1A97F1]"
              placeholder="Write your thoughts here..."
            />
          </div>
        </div>

        <div
          onClick={handleClick}
          className={`bg-[#1A97F1] border-dark-1 flex justify-center duration-150 hover:!border-b-2 text-white rounded-xl drop-shadow-lg group  items-center border-2 border-b-4 border-blue-950 cursor-pointer active:bg-[#1a89f1] ${
            isLoading ? ' border-blue-950' : ''
          } cursor-pointer active:bg-yellow-400`}
        >
          <div className="py-2 px-3 ">
            <p>{isLoading ? 'Loading...' : 'Click to submit'}</p>
          </div>
          <div
            className={`${
              isLoading
                ? 'opacity-100 scale-100 duration-200 w-auto py-2 pr-3'
                : 'opacity-0 scale-0 duration-100 w-0 p-0'
            }`}
          >
            <ImSpinner2 className="animate-spin" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default PostTweet;
