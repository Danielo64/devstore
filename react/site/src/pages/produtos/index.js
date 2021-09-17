import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css';

import LoadingBar from 'react-top-loading-bar'

import Cabecalho from '../../components/cabecalho'
import Menu from '../../components/menu'

import { Container, Conteudo } from './styled'

import { useState, useEffect, useRef } from 'react';

import Api from '../../services/api'
const api = new Api();

export default function Index() {

    const [produtos, setProdutos] = useState([]);
    const [nome, setNome] = useState();
    const [categoria, setCategoria] = useState();
    const [precoDe, setPrecoDe] = useState();
    const [precoPor, setPrecoPor] = useState();
    const [avaliacao, setAvaliacao] = useState();
    const [descricao, setDescricao] = useState();
    const [imagem, setImagem] = useState();
    const [estoque, setEstoque] = useState();
    const [idAlterando, setIdAlterando] = useState(0);

    const loading = useRef(null);

    async function listar() {
        loading.current.continuousStart();
        
        let r = await api.listar();
        setProdutos(r);

        loading.current.complete();
    }
    
    async function inserir() {
        if (idAlterando === 0) {
            let r = await api.inserir(nome, categoria, precoDe, precoPor, avaliacao, descricao, imagem, estoque);

            if (r.erro)
                toast.error(r.erro);
            else
                toast.dark('💕 Produto inserido!');
        } else {
            let r = await api.alterar(idAlterando, nome, categoria, precoDe, precoPor, avaliacao, descricao, estoque, imagem);

            if (r.erro)
                alert(r.erro)
            else
                toast.dark('💕 Produto alterado!');
        }

        limparCampos();
        listar();
    }

    function limparCampos() {
        setNome('');
        setCategoria('');
        setPrecoDe('');
        setPrecoPor('');
        setAvaliacao('');
        setDescricao('');
        setEstoque('');
        setImagem('');
        setIdAlterando(0);
    }

    function remover(id) {
        confirmAlert({
            title: 'Remover Produto',
            message: `Tem certeza que deseja remover o produto ${id}?`,
            buttons: [
              {
                label: 'Sim',
                onClick: async() => {
                    let b = await api.remover(id);
                    if (b.erro) 
                        toast.error(`${b.erro}`);
                    else {
                        toast.dark('Produto removido!');
                        listar();
                    }
                }
              },
              {
                label: 'Não'
              }
            ]
        });   
      }

    async function editar(item) {
        setNome(item.nm_produto);
        setCategoria(item.ds_categoria);
        setPrecoDe(item.vl_preco_de);
        setPrecoPor(item.vl_preco_por);
        setAvaliacao(item.vl_avaliacao);
        setDescricao(item.ds_produto);
        setImagem(item.img_produto);
        setEstoque(item.qtd_estoque);
        setIdAlterando(item.id_produto);
    }

    // função chamada 1x quando a tela abre
    useEffect(() => {
        listar();
    }, [])
    
    return (
        <Container>
            <ToastContainer />
            <LoadingBar color="#119FDC" ref={loading} />
            <Menu />
            <Conteudo>
                <Cabecalho />
                <div class="body-right-box">
                    <div class="new-product-box">
                        <div class="text-new-product">
                            <div class="bar-new-product"></div>
                            <div class="text-new-product"> {idAlterando === 0 ? "Novo Produto" : "Alterando Produto " + idAlterando} </div>
                        </div>

                        <div class="input-new-product">
                            <div class="input-left">
                                <div class="boxzinha-especial-left">    
                                    <div class="boxzinha-input">
                                        <div class="name-product"> Nome: </div>
                                        <div class="input-aaa"> <input type="text" value={nome} onChange={e => setNome(e.target.value)}/> </div>
                                    </div>

                                    <div class="boxzinha-input">
                                        <div class="category-product"> Categoria: </div>
                                        <div class="input-aaa"> <input type="text" value={categoria} onChange={e => setCategoria(e.target.value)}/> </div>
                                    </div>

                                    <div class="boxzinha-input">
                                        <div class="rating-product"> Avaliação: </div>
                                        <div class="input-aaa"> <input type="text" value={avaliacao} onChange={e => setAvaliacao(e.target.value)}/> </div>
                                    </div>
                                </div>
                            
                                <div class="boxzinha-input">
                                    <div class="link-image-product"> Link Imagem: </div>
                                    <div class="input-link"> <input type="text" value={imagem} onChange={e => setImagem(e.target.value)}/> </div>
                                </div>

                                <div class="boxzinha-input">
                                    <div class="description-product"> Descrição: </div>
                                    <div class="textarea-description"> <textarea type="text" value={descricao} onChange={e => setDescricao(e.target.value)}></textarea> </div>
                                </div>
                            </div>

                            <div class="input-right">
                                <div class="boxzinha-especial-right">
                                    <div class="boxzinha-input">
                                        <div class="price-of-product"> Preço DE: </div>
                                        <div class="input-price-of"> <input type="text" value={precoDe} onChange={e => setPrecoDe(e.target.value)}/> </div>
                                    </div>

                                    <div class="boxzinha-input">
                                        <div class="price-for-product"> Preço POR: </div>
                                        <div class="input-price-for"> <input type="text" value={precoPor} onChange={e => setPrecoPor(e.target.value)}/> </div>
                                    </div>
                                </div>

                                <div class="boxzinha-input-inventory">
                                    <div class="inventory-product"> Estoque: </div>
                                    <div class="input"> <input type="text" value={estoque} onChange={e => setEstoque(e.target.value)}/> </div>
                                </div>
                            </div>

                            <div class="button-create"> <button onClick={inserir}> {idAlterando === 0 ? "Cadastrar" : "Alterar"} </button> </div>
                        </div>
                    </div>

                    <div class="product-registered-box">
                        <div class="row-bar">
                            <div class="bar-new-product"></div>
                            <div class="registered-products"> Produtos Matriculados </div>
                        </div>

                        <table class="table-product">
                            <thead>
                                <tr>
                                    <th class="a"> </th>
                                    <th class="a"> </th>
                                    <th> ID </th>
                                    <th> Produto </th>
                                    <th> Categoria </th>
                                    <th> Preço </th>
                                    <th> Estoque </th>
                                    <th class="a"></th>
                                    <th class="a"></th>
                                    <th class="a"></th>
                                    <th class="a"></th>
                                    <th class="a"></th>
                                    <th class="a"></th>
                                </tr>
                            </thead>

                            <tbody>
                                {produtos.map((item, i) =>     
                                    <tr className={i % 2 === 0 ? "int" : ""} >
                                        <td></td>
                                        <td> <img src={item.img_produto} alt="" style={{width: "40px", height: "40px"}}/> </td>
                                        <td> {item.id_produto} </td>
                                        <td title={item.nm_produto}> {item.nm_produto != null && item.nm_produto.length >= 25 ? item.nm_produto.substr(0, 25) + '...' : item.nm_produto} </td>
                                        <td> {item.ds_categoria} </td>
                                        <td> {item.vl_preco_por} </td>
                                        <td> {item.qtd_estoque} </td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td className={"a"}> <button onClick={() => editar(item)}> <img src="assets/button-editar.svg" alt="" /> </button> </td>
                                        <td className={"a"}> <button onClick={() => remover(item.id_produto)}> <img src="assets/button-remover.svg" alt="" /> </button> </td>
                                    </tr>
                                )}
                            </tbody>

                        </table>
                    </div>
                </div>   
            </Conteudo>
        </Container>
    )
}