import {useEffect, useState} from "react";
import ProjectsList from "../projectsList/ProjectsList";
import "./projects.css"
import {first,second,third,fourth,fifth} from "../../ProjectData";

export default function Projects() {
  const [selected,setSelected] = useState("first");
  const [data,setData] = useState([]);
  const list =[
    {
      id: "first",
      title: "WhiteBoard.IO",
    },
    {
      id: "second",
      title: "Meals that Care",
    },
    {
      id: "third",
      title: "Student DataBase Interface",
    },
    {
      id: "fourth",
      title: "Sokoban",
    },
    {
      id: "fifth",
      title: "About Personal Website",
    },
  ];
  useEffect(()=>{

    switch(selected){
      case "first":
        setData(first);
        break;
      case "second":
        setData(second);
        break;
      case "third":
        setData(third);
        break;
      case "fourth":
        setData(fourth);
        break;
      case "fifth":
        setData(fifth);
        break;
      default:
        setData(first);
    }

  },[selected]);
  return (
    <div className='projects' id="projects">
      <h1>Projects</h1>
      <ul className="bar">
          {list.map(item=>(
            <ProjectsList title={item.title} active={selected === item.id} setSelected={setSelected} id={item.id}/>
          ))}
      </ul>
      <div className="conatainer">
        {data.map((d) => (
          <div className="item">
            <a href={d.link} target="_blank">
            <img 
            src={d.img}
            alt="">
            </img>
            </a>
            <ul>
              <li>{d.date}</li>
              <li>{d.one}</li>
              <li>{d.two}</li>
              <li>{d.three}</li>
              <li><a href={d.git} target="_blank">GitHub Link</a></li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
