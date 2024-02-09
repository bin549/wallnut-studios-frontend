import {useState} from "react"
import Layout from "../layout/Layout";
import SubModule from "./SubModule";
import Skill from "./Skill";
import AboutMe from "./AboutMe";

const Home = () => {
    const [moduleNum, setModuleNum] = useState(0)

    function changeModuleNum(page_num: number) {
        setModuleNum(page_num)
    }

    return (
        <Layout onModuleChanged={changeModuleNum}>
            {moduleNum===0 && <SubModule/>}
            {moduleNum===1 && <Skill/>}
            {moduleNum===2 && <AboutMe/>}
        </Layout>
    )
}

export default Home
