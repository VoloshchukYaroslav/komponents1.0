import Greeting from "./componets/Greeting";
import UserList from "./componets/UserList/UserList";
import Title from "./componets/Title";
import Message from "./componets/Message";
import Button from "./componets/Button";
import data from "./user2.json"

function App() {
  const handleClick = () => {
    console.log("Кнопку натиснуто!");
  };

  return (
    <div>
      <UserList data = {data}/>
      {/* <Title text="Hellow World"/>
      <Greeting name="Іван" />
      <Message text="Слава Україні" />
      <Button onClick={handleClick} /> */}
    </div>
  );
}

export default App;
