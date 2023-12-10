import { Link } from "react-router-dom"
import user from '../../assets/user.png'
import { twitLinks } from "../../constants"
import deleteIcon from '../../assets/delete.svg'


const ThreadCard = () => {
    console.log(twitLinks)
  return (
    <article
    className="flex w-full flex-col mb-5 rounded-xl p-7 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] "
    >
        <div
        className="flex items-start justify-between "
        >
            <div className="flex w-full flex-1 flex-row gap-4">
                <div className="flex flex-col items-center">
                    <Link to={'/profile'} className="relative h-11 w-11">
                        <img src={user} alt="user community image"
                        className="cursor-pointer rounded-full"
                        />
                    </Link>
                    <div className="thread-card_bar" />
                </div>

                <div className="flex w-full flex-col">
                    <Link
                    to={'/profile'}
                    className="w-fit"
                    >
                        <h4 className="cursor-pointer text-base-semibold text-dark-2">

                        </h4>
                    ameen
                    </Link>
                    <p className='mt-2 text-small-regular text-dark-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo culpa nemo ipsa, asperiores autem natus. Eos commodi culpa dolor unde rerum blanditiis deleniti quae voluptatum, nobis sunt ex. Odit, quibusdam!</p>
                    <div className="mt-5 flex flex-col gap-3">
                        <div className="flex gap-3.5">
                            {
                                twitLinks.map((item)=>(
                                <img key={item.name} src={item.imgURL} alt={item.name} />
                                ))
                            }
                            
                        </div>
                    </div>
                </div>

            </div>

            <img
            src={deleteIcon}

            />

        </div>
      
    </article>
  )
}

export default ThreadCard
