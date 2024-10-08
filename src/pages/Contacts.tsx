import "../style/contacts.css";

export default function Contacts() {
  return (
    <div className="contact">
      <div className="par">
        <p>
          Do you want to get in touch with me?
          <br />
          Just mail me at <a href="mailto:riccialessandro1it@gmail.com">riccialessandroit1@gmail.com</a>
        </p>
      </div>
      <div className="social">
        <a href="https://www.instagram.com/aalessandro_ricci/?igsh=bDVuMW82aDNsc2cx"><img src="../src/assets/instagram.svg" alt="Instagram logo" /></a>
        <a href="https://www.linkedin.com/in/alessandro-ricci-56720325b/"><img src="../src/assets/linkedin.svg" alt="Linkedin logo" /></a>
        <a href="https://github.com/alessandro-ricci6"><img src="../src/assets/github.svg" alt="Github" /></a>
      </div>
    </div>
  );
}
