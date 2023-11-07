import TabNavigation from "./components/TabNavigation"
import AddComment from "./pages/AddComment"
import AddRecept from "./pages/AddRecept"
import Auth from "./pages/Auth"
import Comments from "./pages/Comments"
import Home from "./pages/Home"
import Liked from "./pages/Liked"
import Profile from "./pages/Profile"
import RecepItem from "./pages/RecepItem"
import UserTop from "./pages/UserTop"
import { ADD_COMMENTS_ROUTE, ADD_RECEPT_ROUTE, COMMENTS_ROUTE, HOME_ROUTE, LIKED_ROUTE, LOGIN_ROUTE, PROFILE_ROUTE, RECEPT_ROUTE, REGISTRATION_ROUTE, TAB_ROUTE, TOP_ROUTE } from "./utils/consts"

export const publicRoutes = [
  {
    name: LOGIN_ROUTE,
    Component: Auth,
    title: 'Login',
    headerLeft: null
  },

  {
    name: REGISTRATION_ROUTE,
    Component: Auth,
    title: 'Registration',
    headerLeft: null
  },

  {
    name: RECEPT_ROUTE + '/:id',
    Component: RecepItem,
    title: 'Recept'
  },

  {
    name: COMMENTS_ROUTE,
    Component: Comments,
    title: 'Comments'
  },

  {
    name: TOP_ROUTE,
    Component: UserTop,
    title: 'Top Users'
  },
]

export const authRoutes = [
  {
    name: ADD_COMMENTS_ROUTE,
    Component: AddComment,
    title: 'Add a Comment'
  },

  {
    name: ADD_RECEPT_ROUTE,
    Component: AddRecept,
    title: 'Add a Recept'
  },
]

export const tabsRoutes = [
  {
    name: HOME_ROUTE,
    Component: Home,
  },

  {
    name: LIKED_ROUTE,
    Component: Liked,
  },

  {
    name: PROFILE_ROUTE,
    Component: Profile,
  }
]