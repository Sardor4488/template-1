//main
import Home from "./Home_/index";
import Mentor from "./Mentor";
import Mentee from "./Mentee";
import Pages from "./Pages";
import Blog from "./Blog";
import Page404 from "./components/Page404/page404";

export default [
  {
    path: "home",
    component: Home,
  },
  {
    path: "mentor",
    component: Mentor,
  },
  {
    path: "mentee",
    component: Mentee,
  },
  {
    path: "pages",
    component: Pages,
  },
  {
    path: "blog",
    component: Blog,
  },
];
