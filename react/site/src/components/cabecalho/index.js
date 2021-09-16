import { Container } from './styled'

export default function Index() {
    return (
        <Container>
            <div class="header">
                <div class="user">
                    <div class="user-image"> 
                        <img src="assets/eu.JPG" alt=""/> 
                        <div class="absolute"> 3 </div> 
                    </div>

                    <div class="user-name"> Olá, <b> Daniel Pereira </b> </div>
                </div>

                <div class="buttons-header">
                    <div class="refresh-button"> <button> <img src="assets/atualizar.svg" alt=""/> </button> </div>
                    <div class="logout"> <button> <img src="assets/log-out.svg" alt=""/> </button> </div>
                </div>
            </div>
            <div class="bottom-bar-right-header"></div>
        </Container>
    )
}