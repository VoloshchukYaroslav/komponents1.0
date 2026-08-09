import Button from "./Button";

function UserItem({ name, email, age, phone }) {
  return (
    <li>
      <h2>{name}</h2>
      <p>{email}</p>
      <p>{age}</p>
      {phone ? <a href={phone}>{phone}</a> : ""}
      <Button />
    </li>
  );
}

export default UserItem;
