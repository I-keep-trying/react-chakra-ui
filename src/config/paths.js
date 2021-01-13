import Contact from '../pages/Contact'
import Home from '../pages/Home'

export const paths = [
  {
    name: 'Homepage',
    path: '/',
    exact: true,
    component: Home,
  },
  {
    name: 'Contact',
    path: '/contact',
    exact: true,
    component: Contact,
  },
]
