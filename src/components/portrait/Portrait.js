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

export default function Portrait() {
    return (
        <div>
          <Loader />
    
          <Outlet />
          <Section list={portraitList} />
        </div>
      );
}
