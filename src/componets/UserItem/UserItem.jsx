import Button from "../Button";
import css from "./UserItem.module.css";

function UserItem({ name, email, age, phone, style, isActive }) {
  return (
    // <li style = {style}>
    <li className={isActive?css.a:css.b}>
      <h2 className={css.capshion}>{name}</h2>
      <p className={css.text}>{email}</p>
      <p className={css.desc}>{age}</p>
      {phone ? <a href={phone}>{phone}</a> : ""}
      <Button />
      <p className={isActive?css.active:css.notactive}>{isActive?"student": "no student"}</p>
    </li>
  );
}

export default UserItem;
