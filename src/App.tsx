import Layout from './layout/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import SubModule from "./pages/SubModule";
import Skill from "./pages/Skill";

function App() {
    return (
        <>
            <Layout>
                <SubModule/>
                {/*<Skill/>*/}
            </Layout>
        </>
    );
}

export default App;
