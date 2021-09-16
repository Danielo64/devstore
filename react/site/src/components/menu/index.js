import { Container } from './styled'

export default function Index() {
    return (
        <Container>
            <header className="header-left-box">    
                <div class="svg-lobinho"> <img src="assets/wolf.png" alt=""/> </div>
                <div class="title"> <span>Dev</span>Store</div>
            </header>

            <div class="black-space"></div>
            <div class="management">
                <div> Gerenciamento </div>
                <img src="assets/setinha pra baixo.svg" alt=""/>
            </div>

            <div class="espaco-produtos">
                <div> Produtos </div>
            </div>
        </Container>
    )
}