import profile from '../assets/profileUser.gif'
import { Link } from 'react-router-dom'
import edit from '../assets/edit.svg'

const ProfileHeader = () => {
  return (
    <div className='flex w-full flex-col justify-start'>
        <div className='flex items-center justify-between'>

            <div className="flex items-center gap-3">
                <div className="relative h-20 w-20 object-cover">
                    <img src={profile} alt="logo" className='rounded-full object-cover shadow-2xl' />
                </div>

                <div className='flex-1'>
                    <h2 className='text-left text-heading3-bold text-dark-2'>Ameen</h2>
                    <p className='text-base-medium text-gray-600 '>@ami-inn</p>
                </div>
            </div>

            <Link>
            <div className='flex cursor-pointer gap-3 rounded-lg bg-white px-4 py-2'>
                <img
                src={edit}
                alt='logout'
                width={16}
                height={16}
                />

                <p className='text-dark-2 max-sm:hidden'>Edit</p>

            </div>
            </Link>

        </div>

        <p className='mt-6 max-w-lg text-base-regular text-dark-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <div className='mt-12 h-0.5 w-full bg-dark-3' />
      
    </div>
  )
}

export default ProfileHeader
