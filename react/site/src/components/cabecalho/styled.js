import styled from 'styled-components'

const Container = styled.div`
.header {
   display: flex;
   flex-direction: row;
   background-color:  #fff;
   padding: 1.3em;
   align-items: center;
   justify-content: space-between;
}

.user-name  {
    padding-left: 1em;
    font-size: 16px;
}

.user-name b {
    color: #4a4a4a;
}

.refresh-button button {
    border-radius: 50%;
    background-color: #119FDC;
    width: 44px;
    height: 44px;
    border: none;
    margin: .4em;
}

.logout button {
    border-radius: 50%;
    background-color: #119FDC;
    width: 44px;
    height: 44px;
    border: none;
    margin: .4em;
}

.buttons-header {
    display: flex;
    flex-direction: row;
    padding: 0.5em;
}

.user {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.bottom-bar-right-header {
    border-bottom: .5px solid #e9e9e9;
    width: 97%;
    align-self: center;
    background-color: #e9e9e9;
}
`

export { Container }