
import {Link} from 'react-router-dom'
import twiterRound from '../assets/twiter-round.png'
import user from '../assets/user.png'

const Topbar = () => {
  return (
    <nav className="topbar shadow-md">
      <Link className="flex items-center gap-4" to={'/'} >
        <img
        src={twiterRound}
        alt='twiter logo'
        width={32}
        height={32}
        />
        <p className='text-heading3-bold text-dark-1 max-xs:hidden'>TWITTER</p>
      </Link>

      <div className='flex items-center gap-1'>
        <div className='block'>
            <div className='flex cursor-pointer'>
                <img src={user} alt="user" width={32} height={32} />
            </div>
        </div>
      </div>
    </nav>
  )
}

export default Topbar
