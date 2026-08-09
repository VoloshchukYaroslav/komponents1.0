import "./App.css";
import Title from "./componets/Title";
import Section from "./componets/Section";
import user from "./user.json";
import user2 from "./user2.json";
import UserList from "./componets/UserList";
import Button from "./componets/Button";

const text1 = "Я вивчив ДЖС";
const text2 = "Я люблю Реакт";

function App() {
  return (
    <>
      <Section>
        <Title text={text1} />
        <UserList data={user2} />
      </Section>

      <Section>
        <Title text={text2} />
        <UserList data={user} />
      </Section>

      {/* <ul>
        {user.map((item) => {
          return (
            <li key={item.id}>
              <h2>{item.name}</h2>
              <p>{item.email}</p>
              <p>{item.age}</p>
            </li>
          );
        })}
      </ul> */}
    </>
  );
}

export default App;
