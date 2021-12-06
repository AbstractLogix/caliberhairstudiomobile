"use strict";
exports.__esModule = true;
var screen = "PortfolioScreen";
var artists = [
    {
        id: "1",
        artist: "Chris",
        title: "Chris",
        image: require("../profile/chris/chris_profile.jpg"),
        profileImage: require("../profile/chris/chris_profile.jpg"),
        portfolio: [
            {
                id: 0,
                image: require("../profile/chris/chris_profile.jpg")
            },
            {
                id: 1,
                image: require("../profile/chris/chris_profile.jpg")
            },
        ],
        description: "",
        screen: screen
    },
    {
        id: "2",
        artist: "Brian",
        title: "Brian",
        image: require("../profile/brian/brian_profile.jpg"),
        profileImage: require("../profile/brian/brian_profile.jpg"),
        description: "",
        screen: screen
    },
    {
        id: "3",
        artist: "Marcelo",
        title: "Marcelo",
        image: require("../profile/marcelo/marcelo_profile.jpg"),
        profileImage: require("../profile/marcelo/marcelo_profile.jpg"),
        description: "",
        screen: screen
    },
];
exports["default"] = artists;
