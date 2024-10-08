import ProjectItem from "./ProjectItem";

const projectList = [
  {
    name: "MusicEvents",
    photo: "../src/assets/musicevents.jpeg",
    link: "https://github.com/alessandro-ricci6/MusicEvents",
    desc: "A user friendly android application about music events and festival. In this app the user can log in to save his favourite events. Here you can search events with some filter options like the music genre, the location(with GPS) or the artist.",
    ended: true,
  },
  {
    name: "WatchEasy",
    photo: "../src/assets/watcheasy.png",
    link: "https://github.com/alessandro-ricci6/WatchEasy",
    desc: "A simple social network where people can share their favourite Tv shows and write reviews about them. Here you can also keep track of the episodes you have already seen",
    ended: true,
  },
  {
    name: "F1 DataWeb",
    photo: "../src/assets/f1dataweb.png",
    link: "https://github.com/alessandro-ricci6/F1DataWeb",
    desc: "A website where F1 fans can search for F1 driver data, races and more.",
    ended: false,
  },
];

export default function ProjectsList() {
  return (
    <div>
      {projectList.map((item) => (
        <ProjectItem
          name={item.name}
          desc={item.desc}
          link={item.link}
          photo={item.photo}
          ended={item.ended}
        />
      ))}
    </div>
  );
}
