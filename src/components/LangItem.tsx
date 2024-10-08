import "../style/lang.css";

interface LangProp {
  name: string;
  photo: string;
  alt: string;
  star: number;
}

export default function LangItem(item: LangProp) {
  return (
    <div className="langItem">
      <div className="starContainer">
        {Array.from({ length: item.star }).map(() => (
          <img className="star" src="../src/assets/star.svg" alt="Star icon" />
        ))}
      </div>
      <img src={item.photo} alt={item.alt} />
      <h4 style={{ fontWeight: "bold" }}>{item.name}</h4>
    </div>
  );
}
