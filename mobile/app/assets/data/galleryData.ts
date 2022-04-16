type GalleryItem = {
  id: string;
  url: any;
};
const galleryData: GalleryItem[] = [
  {
    id: "0",
    url: require("../shop/chris_brian_stations.jpg"),
  },
  {
    id: "1",
    url: require("../shop/chris_brian_stations2.jpg"),
  },
  { id: "2", url: require("../shop/shop_view.jpg") },
  { id: "3", url: require("../shop/shop_view1.jpg") },
  {
    id: "4",
    url: require("../shop/shop_view2.jpg"),
  },
];

export default galleryData;
