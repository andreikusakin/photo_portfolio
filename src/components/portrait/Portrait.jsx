import { Outlet } from "react-router-dom";
import './portrait.css'
import Section from "../section/Section";
import Loader from "../loader/Loader";

const portraitList = [
    {
      name: "Jessica & George",
      pathName: "Jessica-George",
      coverImg: "/images/jessicageorge.jpg",
    },
  ];

export default function Portrait() {
    return (
        <div>
          <Loader />
    
          <Outlet />
          <Section list={portraitList} />
        </div>
      );
}
