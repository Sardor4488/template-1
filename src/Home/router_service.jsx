//main
import Home from "./Home_/index";
import Mentor from "./Mentor";
import Mentee from "./Mentee";
import Pages from "./Pages";
import Blog from "./Blog";

export default [
  {
    path: "home",
    component: Home,
  },
  {
    path: "teacher",
    component: Mentor,
  },
  {
    path: "student",
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
