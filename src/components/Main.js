import '../assets/styles/main.css';
import PhotoContainer from "./PhotoContainer";

const Main = () => (
    <main>
        <div className="main-container">
            <h1>Chidogram</h1>
            <p>La mejor página de fotos random</p>
            <PhotoContainer />
        </div>
    </main>
);

export default Main;
