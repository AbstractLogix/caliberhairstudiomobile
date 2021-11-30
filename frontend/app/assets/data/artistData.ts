// Type
interface Artist {
  id: string;
  artist: string;
  profileImage: {};
  description: string;
  screen: string;
}

const screen = "PortfolioScreen";
const artists = [
  {
    id: "1",
    artist: "Chris",
    title: "Chris",
    image: require("../profile/chris/chris_profile.jpg"),
    profileImage: require("../profile/chris/chris_profile.jpg"),
    portfolio: [
      {
        id: 0, url: require("../profile/chris/chris_profile.jpg")
      },
      {
        id: 1, url: require("../profile/chris/chris_profile.jpg")
      }
    ],
    description: "",
    screen: screen,
  },
  {
    id: "2",
    artist: "Brian",
    title: "Brian",
    image: require("../profile/brian/brian_profile.jpg"),
    profileImage: require("../profile/brian/brian_profile.jpg"),
    description: "",
    screen: screen,
  },
  {
    id: "3",
    artist: "Marcelo",
    title: "Marcelo",
    image: require("../profile/marcelo/marcelo_profile.jpg"),
    profileImage: require("../profile/marcelo/marcelo_profile.jpg"),
    description: "",
    screen: screen,
  },
];

export default artists;
