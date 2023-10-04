import { createBrowserRouter } from "react-router-dom";
import WebLayout from "../components/layout/WeblayOut";
import HomeScreen from "../Pages/HomeScreen";
import Shorts from "../Pages/Shorts";
import Subscription from "../Pages/Subscription";
import Library from "../Pages/Libaray";
import HistoryCard from "../Pages/HistoryCard";
import Watch from "../Pages/Watch";
import LikedVideos from "../Pages/LikedVideos";
import Trending from "../Pages/Trending";
import Deatails from "../Pages/Deatails";


const Index = createBrowserRouter([
	{
		path: "/",
		element: <WebLayout />,
		children: [
			{
				index: true,
				element: <HomeScreen />,
			},

			{
				path: "Shorts ",
				element: <Shorts />,
			},

			{
				path: "watch/:id",
				element: <Deatails />,
			},

			{
				path: "subscription",
				element: <Subscription />,
			},

			{
				path: "library",
				element: <Library />,
			},
			{
				path: "history",
				element: <HistoryCard />,
			},
			{
				path: "watch",
				element: <Watch />,
			},

			{
				path: "likedvideos",
				element: <LikedVideos />,
			},

			{
				path: "trending",
				element: <Trending />,
			},
		],
	},
]);

export default Index;