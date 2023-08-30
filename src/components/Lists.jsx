/*
props = {
    data = [{id.number,text:string,icon:<component/>,active:true}]
    data = Array<{id.number,text:string,icon:<component/>,active:true}> tsx
}
*/
import ListItem from "./listItem";

function Lists(porps) {
  return (
    <ul className="list">
      {porps.data.map((obj) => (
        <ListItem
          key={obj.id}
          text={obj.text}
          icon={obj.icon}
          active={obj.active}
        ></ListItem>
      ))}
    </ul>
  );
}
export default Lists;
