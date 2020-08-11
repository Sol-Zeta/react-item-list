import React, { Component } from 'react'
import Product from '../Product/Product.js'
// import Button from '../Button/button.js'
import styled from 'styled-components'
import AngleIcon from '../Button/angleDown.png'

const ProductListContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const ItemsContainer = styled.div`
    margin: 110px 0px 40px 0px;
    width: 100%;
`

const Botonera = styled.section`
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-around;
    justify-self: center;
    align-items: center;
    background: #fafbfc;
    padding: 2px 3px 2px 3px;
    width: 100%;
    position: fixed;
    margin: 60px 0px 0px 0px;
    box-shadow: 0px 5px 5px #e0e0e0;

  p{
    font-size: 10px;
    font-weight: bold;
  }
`;

const Button = styled.button`
  display: flex;
  justify-content: space-around;
  background: grey;
  color: white;
  margin: 10px 0.5%;
  border-radius: 2px;
  border: none;
  padding: 3% 5%;
  width: 20%;
  font-size: 12px;
  font-weight: bold;

  transition-duration: 0.3s;

  &:hover{
    background-color: #494848;

  }
`;




class ProductList extends Component {
    constructor(props){
        super(props)
        this.state = {
            Products: [],
            NameOrder: false,
            PriceOrder: false,
            RelevanceOrder: false,
            Page: this.props.Page

        }
        this.orderByName = this.orderByName.bind(this)
        this.orderByPrice = this.orderByPrice.bind(this)
        this.orderByRelevance = this.orderByRelevance.bind(this)
    }

    componentDidMount(){
            fetch(`http://localhost:8000/allproducts`, {
                'method': 'POST',
                'headers': { 'Content-Type': 'application/json'}})
            .then(res => res.json())
            .then(Products => {
                this.setState({
                    ...this.state,
                    Products
                })
                console.log('productos sin ordenar')
            })
      } 
    
    getProducts(){
            let ProductList = this.state.Products
            if (this.props.Page === 0){
                let ProductsToShow = ProductList.slice(0,10)
                return ProductsToShow.map( item =>
                    <Product title={ item.name } price={ item.price } relevance={ item.relevance } key={item.id} num={item.id}/>)
            }  
            else if (this.props.Page === 1){
                let ProductsToShow = ProductList.slice(10,20)
                return ProductsToShow.map( item =>
                    <Product title={ item.name } price={ item.price } relevance={ item.relevance } key={item.id} num={item.id}/>)
            } 
            else{
                let ProductsToShow = ProductList.slice(20, ProductList.length)
                return ProductsToShow.map( item =>
                    <Product title={ item.name } price={ item.price } relevance={ item.relevance } key={item.id} num={item.id}/>)
            }
    }

    orderByPrice(){
        if(this.state.PriceOrder === 'Desc' || this.state.PriceOrder === false){
                    fetch(`http://localhost:8000/productsbyprice_asc`, {
                    'method': 'POST',
                    'headers': { 'Content-Type': 'application/json'}})
                    .then(res => res.json())
                    .then(Products => {
                    this.setState({
                        ...this.state,
                        Products,
                        PriceOrder: 'Asc',
                        NameOrder: false,
                        RelevanceOrder: false
                    })
                    })
                }  
        else if(this.state.PriceOrder === 'Asc' || this.state.PriceOrder === false){
                    fetch(`http://localhost:8000/productsbyprice_des`, {
                    'method': 'POST',
                    'headers': { 'Content-Type': 'application/json'}})
                    .then(res => res.json())
                    .then(Products => {
                    this.setState({
                        ...this.state,
                        Products,
                        PriceOrder: 'Desc',
                        NameOrder: false,
                        RelevanceOrder: false
                    })
                    })
        }  
    }


    orderByName(){
        if(this.state.NameOrder === 'Desc' || this.state.NameOrder === false){
            console.log('deberian estar ordenados por precio ascendente')
                    fetch(`http://localhost:8000/productsbyname_asc`, {
                    'method': 'POST',
                    'headers': { 'Content-Type': 'application/json'}})
                    .then(res => res.json())
                    .then(Products => {
                    console.log("data que llega del fetch by namee", Products)
                    this.setState({
                        ...this.state,
                        Products,
                        PriceOrder: false,
                        NameOrder: 'Asc',
                        RelevanceOrder: false
                    })
                    })
                }  
        else if(this.state.NameOrder === 'Asc' || this.state.NameOrder === false){
            console.log('deberian estar ordenados por precio descendente')
                    fetch(`http://localhost:8000/productsbyname_des`, {
                    'method': 'POST',
                    'headers': { 'Content-Type': 'application/json'}})
                    .then(res => res.json())
                    .then(Products => {
                    console.log("data que llega del fetch by name", Products)
                    this.setState({
                        ...this.state,
                        Products,
                        PriceOrder: false,
                        NameOrder: 'Desc',
                        RelevanceOrder: false
                    })
                    })
        }  
    }

    orderByRelevance(){
        if(this.state.RelevanceOrder === 'Desc' || this.state.RelevanceOrder === false){
            console.log('deberian estar ordenados por precio ascendente')
                    fetch(`http://localhost:8000/productsbyrelevance_asc`, {
                    'method': 'POST',
                    'headers': { 'Content-Type': 'application/json'}})
                    .then(res => res.json())
                    .then(Products => {
                    console.log("data que llega del fetch by namee", Products)
                    this.setState({
                        ...this.state,
                        Products,
                        PriceOrder: false,
                        NameOrder: false,
                        RelevanceOrder: 'Asc'
                    })
                    })
                }  
        else if(this.state.RelevanceOrder === 'Asc' || this.state.RelevanceOrder === false){
            console.log('deberian estar ordenados por precio descendente')
                    fetch(`http://localhost:8000/productsbyrelevance_des`, {
                    'method': 'POST',
                    'headers': { 'Content-Type': 'application/json'}})
                    .then(res => res.json())
                    .then(Products => {
                    console.log("data que llega del fetch by name", Products)
                    this.setState({
                        ...this.state,
                        Products,
                        PriceOrder: false,
                        NameOrder: false,
                        RelevanceOrder: 'Desc'
                    })
                    })
        }  
    }

  
    render() {
        return (
            <ProductListContainer>
                <Botonera>
                    <p>Sort by:</p>
                    <Button onClick={()=> this.orderByName()}>Name</Button>
                    <Button onClick={()=> this.orderByPrice()}>Price</Button>
                    <Button onClick={()=> this.orderByRelevance()}>Relevance</Button>
                </Botonera>
                <ItemsContainer>
                {this.getProducts()}
                </ItemsContainer>
            </ProductListContainer>
        )
    }
}

export default ProductList