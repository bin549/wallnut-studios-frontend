import Layout from './components/layout/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Submodule} from "./components/Submodule";
import {Skill} from "./components/Skill";

function App() {
    return (
        <>
            <Layout>
                <Submodule/>
                {/*<Skill/>*/}
            </Layout>
        </>
    );
}

export default App;
