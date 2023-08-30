import "./listItem.scss";

/* prop = {
text : string
icon : <component/>
active: boolean
}
*/
function ListItem(props) {
  const textCalssName = `list__item__text ${props.active ? "active" : ""}`;
  //active = false => textClassName = 'list__item'
  //active = true => textClassName = 'list__item active'
  return (
    <li className={`list__item ${textCalssName}`}>
      {props.icon} {/* use component in props  */}
      <p className="list__item__text">{props.text}</p>
    </li>
  );
}

//CSS + JS Value == DynsmicsClassName
//not-active : className='list__item'
//active : className='list__item active'

export default ListItem;
