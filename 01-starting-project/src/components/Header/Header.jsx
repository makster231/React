import reactImg from "../../assets/react-core-concepts.png";
import "./Header.css";

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
const words = ["WORD 1", "WORD 2", "WORD 3"];

function Header() {
  const randWord = words[getRandomInt(words.length)];

  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {randWord} React concepts you will need for almost any app you are going
        to build!
      </p>
    </header>
  );
}

export default Header;
