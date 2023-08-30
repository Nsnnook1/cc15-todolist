import "./App.scss";
import Header from "../components/header";
import {
  FaInbox,
  FaCalendar,
  FaCalendarAlt,
  FaChevronDown,
} from "react-icons/fa";
import Lists from "../components/Lists";

function App() {
  const generalList = [
    { id: 1, text: "Inbox", icon: <FaInbox />, active: true },
    { id: 2, text: "Today", icon: <FaInbox />, active: false },
    { id: 3, text: "next 7 Days", icon: <FaInbox />, active: false },
  ];

  const projectList = [
    { id: 4, text: "Project-A", icon: <FaInbox />, active: true },
    { id: 5, text: "Project-B", icon: <FaInbox />, active: false },
  ];
  //ObjectDetail => <ListItem ...ObjectDetail/>
  return (
    <div className="todo">
      <div className="todo__header">
        <Header />
      </div>
      <div className="todo__sidebar">
        <aside className="sidebar">
          <section className="sidebar__category">
            <Lists data={generalList} />
          </section>
          <section className="sidebar__category">
            {/* <div className="accordion">
              <div className="accordion__toggle">
                <li className="accordion__item">
                  <FaChevronDown className="accordion__item__icon accordion__item__active" />
                  <p className="accordion__item__text">Projects</p>
                </li>
              </div>
            </div> */}
          </section>

          <Lists data={projectList} />
        </aside>
      </div>
      <div className="todo__content">TodoContent</div>
    </div>
  );
}

export default App;


/* ***Challenge : Refactor 
- ให้ 2 section render UI ที....
- OptionA (2/5) : render UI ต่างกัน <Lists/> กับ <Accordion/>
- OptionB (4/5) : render UI เดียวกัน เช่น  <Lists/> 
- OptionC (5/5) : render <Lists/>  ภายใต้ <Accordion> <Lists/> <Accordion/>
// ใช้ props.children

*/


// {/* sol 1 */}
//           {/* <ul className="list">
//             {projectList.map((obj) => (
//               // obj.key = obj.id,
//               // delete obj.id
//               // return <ListItem {..obj}/>
//               <ListItem
//                 key={obj.id}
//                 text={obj.text}
//                 icon={obj.icon}
//                 active={obj.active}
//               />
//             ))} */}

// {/* sol 2 */}
//             {/* <ListItem text="Project-A" icon={<FaInbox />} active={true} />
//             <ListItem text="Project-B" icon={<FaInbox />} active={false} /> */}
//           {/* </ul> */}
