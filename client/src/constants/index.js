import home from '../assets/home.svg'
import search from '../assets/search.svg'
import create from '../assets/create.svg'
import user from '../assets/user.svg'

export const sidebarLinks = [
    {
      imgURL: home,
      route: "/",
      label: 'home',
    },
    {
      imgURL:search,
      route: "/search",
      label: 'search',
    },
    {
      imgURL: create,
      route: "/create-thread",
      label: 'create-thread',
    },
    {
      imgURL: user,
      route: "/profile",
      label: "Profile",
    },
  ];