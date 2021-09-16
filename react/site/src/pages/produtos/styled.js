import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: row;
    min-width: 100%;

.absolute {
    color: white;
    background-color: #119FDC;
    border: 3px solid white;
    border-radius: 50%;
    position: absolute;
    width: 20px;
    height: 20px;
    text-align: center;
    font-size: .7em;
}

img {
    cursor: pointer;
}

.new-product-box {
    display: flex;
    flex-direction: column;

    background-color: white;
    box-shadow: 0px 0px 4px 1px rgba(186, 186, 186, 0.25);
    padding-top: 2em;
    padding-right: 12em;
    padding-bottom: 2em;
    padding-left: 3em;
}

.bar-new-product {
    border: 3px solid #119FDC;
    border-radius: .5em;
    margin-right: .4em;
    background-color: #119FDC;
}

.text-new-product {
    display: flex;
    flex-direction: row;

    font-size: 32px;
}

.text-new-product div {
    font-weight: bolder;
}

.input-new-product {
    display: flex;
    flex-direction: row;
    padding-top: 2.4em;
}

.input-left {
    display: flex;
    flex-direction: column;
    margin-right: -18.3em;
}

.boxzinha-input {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.boxzinha-especial-left {
    margin-left: 0.4em
}

.name-product {
    font-size: 18px;
    color: #615858;
    width: 5.5em;
    padding-left: 1.6em;
    font-weight: 800;
}

.category-product {
    font-size: 18px;
    color: #615858;
    width: 5.5em;
    font-weight: 800;
}

.rating-product {
    font-size: 18px;
    color: #615858;
    width: 5.5em;
    font-weight: 800;
}

.link-image-product {
    font-size: 18px;
    color: #615858;
    width: 6em;
    font-weight: 800;
    margin-left: -1em;
}

.description-product {
    font-size: 18px;
    color: #615858;
    margin-left: 0.3em;
    margin-top: -6.3em;
    font-weight: 800;
}

.input-right {
    display: flex;
    flex-direction: column;
    margin-bottom: 1em;
    margin-left:2em;
    margin-right: 10em;
}

.price-of-product {
    font-size: 18px;
    color: #615858;
    margin-left: -4.5em;
    font-weight: 800;
}

.price-for-product {
    font-size: 18px;
    color: #615858;
    margin-left: -5em;
    font-weight: 800;
}

.inventory-product {
    font-size: 18px;
    color: #615858;
    margin-right: 0.8em;
    font-weight: 800;
}

.boxzinha-input-inventory {
    display: flex;
    flex-direction: row;
    align-items: center;
    
    margin-left: -2.1em
}

.boxzinha-especial-right {
    margin-left: 2em;
}

input {
    width: 209px;
    height: 36px;

    background: #FFFFFF;
    border: 1px solid #A8A8A8;
    box-sizing: border-box;
    border-radius: 5px;
    padding-left: .5em;
}

.input {
    margin-top: .5em;
    margin-bottom: .5em;
}

.input-aaa {
    margin-top: .5em;
    margin-bottom: .5em;
    margin-left: -0.17em;
}

.input-link {
    margin-top: .5em;
    margin-bottom: .5em;
    margin-left: 0.8em;
}

.input-link input {
    width: 625px;
}

.input-price-of {
    margin-top: .5em;
    margin-bottom: .5em;
    margin-left: 1.2em;
}

.input-price-for {
    margin-top: .5em;
    margin-bottom: .5em;
    margin-left: 1em;
}

.textarea-description {
    margin-top: .5em;
    margin-bottom: .5em;
}

textarea {
    width: 625px;
    height: 150px;

    background: #FFFFFF;
    border: 1px solid #A8A8A8;
    box-sizing: border-box;
    border-radius: 5px;

    margin-left: 1em;
}

button {
        cursor: pointer;
    }

.button-create {
    align-self: flex-end;
    justify-self: flex-end;
    padding-bottom: 1.5em;
    margin-left: -9em;
}

.button-create button {
    width: 106px;
    height: 36px;

    background: #119FDC;
    border-radius: 44px;
    border: none;
    color: white;
    font-size: 14px;
    margin-left: 2em;
    font-weight: bold;
}

.button-create button:hover {
    background-color: #0f6c94;
    transition: 2s;
}

.product-registered-box {
    display: flex;
    flex-direction: column;

    background-color: white;
    box-shadow: 0px 0px 4px 1px rgba(186, 186, 186, 0.25);
    padding: 2em;
    margin-top: 2em;
    
}

.row-bar {
    display: flex;
    flex-direction: row;
}

.registered-products {
    display: flex;
    flex-direction: row;
    font-weight: bolder;
    font-size: 32px;
    padding-left: .3em;
}

table {
    margin-top: 2em;
}

.table-product {
    border-collapse: collapse;
}

thead {
    background-color: #6CC3DF;
}

th {
    height: 61.93px;
    text-align: left;
    padding: 1em;
    color: #ffff;
    font-weight: 800;
}

.a {
    width: .1em;
}

.a > button {
    visibility: hidden;
}

tr:hover {
    .a > button {
    visibility: visible;
}    
}

tbody {
    background-color: #F5F5F5;
}

.int {
    background-color: #fff;
}

td {
    text-align: left;
    height:  61.93px;
    padding: 1em;
    color: #6D6868;
    font-weight: 600;
}

td button {
    border-radius: 50%;
    background-color: #565656;
    border: none;
    width: 31px;
    height: 31px;
}

.image-product {
    width: 40px; 
    height: 40px;
}

.user-image {
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    border-radius: 50%;
}

.user-image img {
    width: 57px;
    height: 57px;
    border-radius: 50%;
    height: 57px;
}
`

const Conteudo = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 100%;
`

export { Container, Conteudo }