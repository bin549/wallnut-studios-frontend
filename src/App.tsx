import Layout from './layout/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import SubModule from "./pages/SubModule";
import Skill from "./pages/Skill";
import {useState} from "react"

function App() {
    const [isCheck, setIsCheck] = useState(false)

    function toggleIsCheck() {
        setIsCheck(!isCheck)
    }

    return (
        <>
            <Layout onProfileCheck={toggleIsCheck} >
                {!isCheck && <SubModule />}
                {isCheck && <Skill />}
            </Layout>
        </>
    );
}

export default App;
