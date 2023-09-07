import { Outlet } from "react-router-dom";
import "./wedding.css";
import Section from "../section/Section";
import Loader from "../loader/Loader";

const weddingList = [
  {
    name: "Jessica & George",
    pathName: "Jessica-George",
    coverImg: "/images/jessicageorge.jpg",
  },
  {
    name: "Veronica & Joseph",
    pathName: "Veronica-Joseph",

    coverImg: "/images/veronicajoseph.jpg",
  },
  {
    name: "Orbrey & Brett",
    pathName: "Orbrey-Brett",
    coverImg: "/images/orbreybrett.jpg",
  },
];

export default function Wedding() {
  return (
    <div>
      <Loader />

      <Outlet />
      <Section list={weddingList} />
    </div>
  );
}
