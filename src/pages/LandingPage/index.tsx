import MainContainer from "../../components/MainContainer"
import NavBar from "../../components/NavBar"

export default function LandingPage() {
    return <MainContainer height="50rem">
        {/* Área inicial (header + primeiro "bloco") */}
        <div>
            <NavBar />
            <div>
                <h1>Dive Into The Depths Of Virtual Reality</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore
                    nisl tincidunt eget. Lectus mauris eros in vitae .</p>
                <div>
                    <a href='#'>Build Your World</a>&nbsp;&nbsp;&nbsp;
                    <a href='#'>→</a>
                </div>
            </div>
        </div>
    </MainContainer>
}