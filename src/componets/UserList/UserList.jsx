import UserItem from "../UserItem/UserItem";
import {list} from "./UserList.module.css";

function UserList({ data }) {
  // const colors =["red","blue","green","yellow","brown"]
  return (
    <ul className={list}>
      {data.map((item,index) => {
        return (
          //   <UserItem
          //     key={item.id}
          //     name={item.name}
          //     email={item.email}
          //     age={item.age}
          //     />
          // <UserItem style={{backgroundColor: colors[index % colors.length]}} key={item.id} {...item} />
          <UserItem key={item.id} {...item} />
        );
      })}
    </ul>
  );
}

export default UserList;
