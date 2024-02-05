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

    useEffect(() => {
        const requestOptions : any = {
            method: "GET",
            credentials: "include",
        }
        fetch(`http://127.0.0.1:5000/api/skill/list`, requestOptions)
            .then((res) => {
                console.log(res.json())
            })
    })

    return (
        <Layout onProfileCheck={toggleIsCheck}>
            {!isCheck && <SubModule/>}
            {isCheck && <Skill/>}
        </Layout>
    )
}

export default Home
