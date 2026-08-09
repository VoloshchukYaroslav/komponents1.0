import Greeting from "./componets/Greeting";
import Message from "./componets/Message";
import Button from "./componets/Button";

function App() {
  const handleClick = () => {
    console.log("Кнопку натиснуто!");
  };

  return (
    <div>
      <Greeting name="Іван" />
      <Message text="Ласкаво просимо до нашого додатку!" />
      <Button onClick={handleClick} />
    </div>
  );
}

export default App;
