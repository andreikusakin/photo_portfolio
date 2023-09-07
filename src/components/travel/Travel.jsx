import { Outlet } from "react-router-dom";
import "./travel.css";
import Section from "../section/Section";
import Loader from "../loader/Loader";

const travelList = [
  {
    name: "California 2021",
    pathName: "california-2021",
    coverImg: "/images/california2021.jpg",
  },
  {
    name: "Vermont 2022",
    pathName: "vermont-2022",
    coverImg: "/images/vermont2022.jpg",
  },
];

export default function Wedding() {
  return (
    <div>
      <Loader />

      <Outlet />
      <Section list={travelList} />
    </div>
  );
}
