import React, { Component } from 'react'
import styled from 'styled-components'

const Title = styled.div`
    color: grey;
    box-shadow: 0px 5px 5px #e0e0e0;
    font-size: 2em;
    font-weight: bold;
    position: fixed;
    background: #fafbfc;
    width: 100%;
    height: 5vh;
    padding: 20px 0%;
    top: 0px;
`


export default class Header extends Component {
    render() {
        return (
            <Title>
                The Mask Shop
            </Title>
        )
    }
}
