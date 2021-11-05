// Type
interface Artist {
  id: string;
  artist: string;
  profileImage: {};
  description: string;
  screen: string;
}

const screen = "PortfolioScreen";
const artists: Artist[] = [
  {
    id: "1",
    artist: "Chris",
    profileImage: require("../profile/chris/chris_profile.jpg"),
    description: "",
    screen: screen,
  },
  {
    id: "2",
    artist: "Brian",
    profileImage: require("../profile/brian/brian_profile.jpg"),
    description: "",
    screen: screen,
  },
  {
    id: "3",
    artist: "Marcelo",
    profileImage: require("../profile/marcelo/marcelo_profile.jpg"),
    description: "",
    screen: screen,
  },
];

export default artists;
