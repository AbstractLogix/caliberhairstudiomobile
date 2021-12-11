// Type
interface Artist {
  id: string;
  artist: string;
  title: string;
  image: any;
  profileImage: any;
  description: string;
  portfolio: { id: number; image: any }[];
  screen: string;
}

const screen = "PortfolioScreen";
const artists: Artist[] = [
  {
    id: "1",
    artist: "Emily",
    title: "Emily",
    image: require("../profile/emily/emily_profile.jpeg"),
    profileImage: require("../profile/emily/emily_profile.jpeg"),
    description: "Emily creates.",
    portfolio: [
      { id: 0, image: require("../profile/emily/portfolio/cut1.jpeg") },
      { id: 1, image: require("../profile/emily/portfolio/cut2.jpg") },
      { id: 2, image: require("../profile/emily/portfolio/cut3.jpg") },
      { id: 3, image: require("../profile/emily/portfolio/cut4.jpg") },
      { id: 4, image: require("../profile/emily/portfolio/cut5.jpg") },
    ],
    screen: screen,
  },
  {
    id: "2",
    artist: "Milu",
    title: "Milu",
    image: require("../profile/milu/milu_profile.jpeg"),
    profileImage: require("../profile/milu/milu_profile.jpeg"),
    description: "Milu creates.",
    portfolio: [
      { id: 0, image: require("../profile/milu/portfolio/cut1.jpeg") },
      { id: 1, image: require("../profile/milu/portfolio/cut2.jpg") },
      { id: 2, image: require("../profile/milu/portfolio/cut3.jpg") },
      { id: 3, image: require("../profile/milu/portfolio/cut4.jpg") },
      { id: 4, image: require("../profile/milu/portfolio/cut5.jpg") },
    ],
    screen: screen,
  },
  {
    id: "3",
    artist: "Chris",
    title: "Chris",
    image: require("../profile/chris/chris_profile.jpg"),
    profileImage: require("../profile/chris/chris_profile.jpg"),
    description:
      "Chris really be out there doing his best and stuff... I mean, he's a great guy.",
    portfolio: [
      { id: 0, image: require("../profile/chris/portfolio/cut1.jpeg") },
      { id: 1, image: require("../profile/chris/portfolio/cut2.jpg") },
      { id: 2, image: require("../profile/chris/portfolio/cut3.jpg") },
      { id: 3, image: require("../profile/chris/portfolio/cut4.jpg") },
      { id: 4, image: require("../profile/chris/portfolio/cut5.jpg") },
    ],
    screen: screen,
  },
  {
    id: "4",
    artist: "Brian",
    title: "Brian",
    image: require("../profile/brian/brian_profile.jpg"),
    profileImage: require("../profile/brian/brian_profile.jpg"),
    description:
      "Brian really be out there doing his best and stuff... I mean, he's a great guy.",
    portfolio: [
      { id: 0, image: require("../profile/brian/portfolio/cut1.jpeg") },
      { id: 1, image: require("../profile/brian/portfolio/cut2.jpg") },
      { id: 2, image: require("../profile/brian/portfolio/cut3.jpg") },
      { id: 3, image: require("../profile/brian/portfolio/cut4.jpg") },
      { id: 4, image: require("../profile/brian/portfolio/cut5.jpg") },
    ],
    screen: screen,
  },
  {
    id: "5",
    artist: "Marcelo",
    title: "Marcelo",
    image: require("../profile/marcelo/marcelo_profile.jpg"),
    profileImage: require("../profile/marcelo/marcelo_profile.jpg"),
    description:
      "Marcelo really be out there doing his best and stuff... I mean, he's a great guy.",
    portfolio: [
      { id: 0, image: require("../profile/marcelo/portfolio/cut1.jpeg") },
      { id: 1, image: require("../profile/marcelo/portfolio/cut2.jpg") },
      { id: 2, image: require("../profile/marcelo/portfolio/cut3.jpg") },
      { id: 3, image: require("../profile/marcelo/portfolio/cut4.jpg") },
      { id: 4, image: require("../profile/marcelo/portfolio/cut5.jpg") },
    ],
    screen: screen,
  },
];

export default artists;
