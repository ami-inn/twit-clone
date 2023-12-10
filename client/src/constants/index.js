import home from '../assets/home.gif'
import search from '../assets/search.gif'
import create from '../assets/create.gif'
import user from '../assets/profile.gif'
import share from '../assets/share.svg'
import heart from '../assets/heart-filled.svg'
import repost from '../assets/repost.svg'
import reply from '../assets/reply.svg'

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
      route: "/create",
      label: 'create-tweet',
    },
    {
      imgURL: user,
      route: "/profile",
      label: "Profile",
    },
  ];

  export const twitLinks = [
    {
      imgURL:heart,
      name:'heart'
    },
    {
      imgURL:repost,
      name:'repost'
    },
    {
      imgURL:share,
      name:'share'
    },
    {
      imgURL:reply,
      name:'reply'
    }
  ]