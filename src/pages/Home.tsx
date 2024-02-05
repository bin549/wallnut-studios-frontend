import {useState} from "react"
import Layout from "../layout/Layout";
import SubModule from "./SubModule";
import Skill from "./Skill";
import {useEffect} from "react"

const Home = () => {
    const [isCheck, setIsCheck] = useState(false)

    function toggleIsCheck() {
        setIsCheck(!isCheck)
    }

    return (
        <Layout onProfileCheck={toggleIsCheck}>
            {!isCheck && <SubModule/>}
            {isCheck && <Skill/>}
        </Layout>
    )
}

export default Home
