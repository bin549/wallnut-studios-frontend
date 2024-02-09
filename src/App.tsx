import 'bootstrap/dist/css/bootstrap.min.css';

import {
    createBrowserRouter,
    RouterProvider
} from 'react-router-dom'
import Home from "./pages/Home";
import GameList from "./pages/SubModules/GameList";
import ToolList from "./pages/SubModules/ToolList";
import VideoList from "./pages/SubModules/VideoList";
import ArticleList from "./pages/SubModules/ArticleList";


const router = createBrowserRouter([
    {path: '/', element: <Home/>},
    {path: '/game', element: <GameList/>},
    {path: '/tool', element: <ToolList/>},
    {path: '/video', element: <VideoList/>},
    {path: '/article', element: <ArticleList/>},
])

function App() {
    return <RouterProvider router={router}/>
}

export default App;
