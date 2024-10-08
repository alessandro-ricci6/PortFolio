import LangList from "../components/LangList";

export default function Home() {
  return (
    <div>
      <h1 style={{ margin: "10px" }}>Welcome to my portfolio</h1>
      <p style={{ fontSize: "larger", margin: "15px" }}>
        My name is{" "}
        <span
          style={{
            backgroundColor: "rgb(25, 25, 129)",
            fontWeight: "bold",
            fontSize: "30px",
            padding: "5px",
            borderRadius: "1px",
          }}
        >
          Alessandro Ricci
        </span>
        ,
        <br />
        i'm{" "}
        <span
          style={{
            backgroundColor: "rgb(25, 25, 129)",
            fontWeight: "bold",
            fontSize: "23px",
            padding: "5px",
            borderRadius: "1px",
          }}
        >
          23
        </span>{" "}
        years old and i'm a developer.
        <br />
        I'm currently studying{" "}
        <span
          style={{
            backgroundColor: "rgb(25, 25, 129)",
            fontWeight: "bold",
            fontSize: "23px",
            padding: "3px",
            borderRadius: "1px",
          }}
        >
          computer science
        </span>{" "}
        at the university in Italy.
        <br />
        If you want to see my CV just click{" "}
        <a href="#">
          here
          <img
            src="../src/assets/ext-link.svg"
            alt="External Link"
            className="external-link"
          />
        </a>
        .
      </p>
      <LangList />
    </div>
  );
}
