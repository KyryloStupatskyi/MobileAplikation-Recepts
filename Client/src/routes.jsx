import TabNavigation from "./components/Navigation/TabNavigation"
import AddComment from "./pages/AddComment"
import AddRecept from "./pages/AddRecept"
import Comments from "./pages/Comments"
import Home from "./pages/Home"
import Liked from "./pages/Liked"
import Profile from "./pages/Profile"
import RecepItem from "./pages/RecepItem"
import UserTop from "./pages/UserTop"
import Auth from "./pages/Auth"
import { ADD_COMMENTS_ROUTE, ADD_RECEPT_ROUTE, COMMENTS_ROUTE, HOME_ROUTE, LIKED_ROUTE, LOGIN_ROUTE, PROFILE_ROUTE, RECEPT_ROUTE, REGISTRATION_ROUTE, TAB_ROUTE, TOP_ROUTE } from "./utils/consts"

export const publicRoutes = [
  {
    name: COMMENTS_ROUTE,
    Component: Comments,
    title: 'Comments'
  },

  {
    name: LOGIN_ROUTE,
    Component: Auth,
    title: 'Login',
  },

  {
    name: REGISTRATION_ROUTE,
    Component: Auth,
    title: 'Registration',
    headerLeft: null
  },

  {
    name: RECEPT_ROUTE,
    Component: RecepItem,
    title: 'Recept',
  },

  {
    name: TOP_ROUTE,
    Component: UserTop,
    title: 'Top Users'
  },

  {
    name: ADD_COMMENTS_ROUTE,
    Component: AddComment,
    title: 'Add a Comment'
  },

  {
    name: ADD_RECEPT_ROUTE,
    Component: AddRecept,
    title: 'Add a Recept',
  },
]

export const authRoutes = [
  // {
  //   name: ADD_COMMENTS_ROUTE,
  //   Component: AddComment,
  //   title: 'Add a Comment'
  // },

  // {
  //   name: ADD_RECEPT_ROUTE,
  //   Component: AddRecept,
  //   title: 'Add a Recept',
  // },
]

export const tabsRoutes = [
  {
    name: HOME_ROUTE,
    Component: Home,
    icon: 'home-outline',
    color: 'transparent',
  },

  {
    name: LIKED_ROUTE,
    Component: Liked,
    icon: 'bookmark-outline',
    color: 'transparent'
  },

  {
    name: PROFILE_ROUTE,
    Component: Profile,
    icon: 'person-outline',
    color: 'transparent'
  }
]