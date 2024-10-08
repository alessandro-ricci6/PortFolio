import "../style/lang.css";
import LangItem from "./LangItem";

const list = [
  { name: "HTML", photo: "../src/assets/html.svg", alt: "HTML icon", star: 4 },
  { name: "CSS", photo: "../src/assets/css.svg", alt: "CSS icon", star: 3 },
  { name: "Java", photo: "../src/assets/java.svg", alt: "Java icon", star: 2 },
  { name: "PHP", photo: "../src/assets/php.svg", alt: "PHP icon", star: 3 },
  {
    name: "Python",
    photo: "../src/assets/python.svg",
    alt: "Python icon",
    star: 3,
  },
  {
    name: "React",
    photo: "../src/assets/react.svg",
    alt: "React icon",
    star: 4,
  },
];

export default function LangList() {
  return (
    <div className="langList">
      {list.map((item) => (
        <LangItem
          name={item.name}
          photo={item.photo}
          alt={item.alt}
          star={item.star}
        />
      ))}
    </div>
  );
}
