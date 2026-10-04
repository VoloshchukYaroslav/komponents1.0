function Title({ text }) {
  console.log(text);

  return <h1 style={{ color: 'red', fontSize: 100}}>{text}</h1>;
}

export default Title;
