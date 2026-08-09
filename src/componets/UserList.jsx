import UserItem from "./UserItem";

function UserList({ data }) {
  return (
    <ul>
      {data.map((item) => {
        return (
          //   <UserItem
          //     key={item.id}
          //     name={item.name}
          //     email={item.email}
          //     age={item.age}
          //     />
          <UserItem key={item.id} {...item} />
        );
      })}
    </ul>
  );
}

export default UserList;
