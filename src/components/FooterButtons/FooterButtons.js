import React, { Component } from 'react'
import styled from 'styled-components'
import PageContext from '../../contexts/pageContext.js'

const FooterButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: #fafbfc;
    position: fixed;
    bottom: 0%;
    width: 100%;
    box-shadow: 0px -2px 5px #e0e0e0;


    button{
        margin: 5%;
        display: flex;
        justify-content: space-around;
        background: grey;
        color: white;
        margin: 10px 0.5%;
        width: 30%;
        border-radius: 2px;
        border: none;
        padding: 2% 10%;
        font-size: 10px;
        font-weight: bold;

        transition-duration: 0.3s;
    }
    button:hover{
        background: #494848;
    }

    button:disabled {
        background: #ccc;
}
`

class FooterButtons extends Component {
    static contextType = PageContext
    render() {
        return (
            <FooterButtonsContainer>
                <PageContext.Consumer>
                    {(context)=>{
                        if (context.Page === 0){
                            return <button disabled>Previous</button>
                        }
                        else{
                            return <button onClick={() => context.prevPage()}>Previous</button>
                        }
                        
                    }
                    
                    }
                </PageContext.Consumer>
                <PageContext.Consumer>
                    {(context)=>{
                        if (context.Page === 2){
                            return <button disabled>Next</button>
                        }
                        else{
                            return <button onClick={() => context.nextPage()}>Next</button>
                        }
                    }
                    }
                </PageContext.Consumer>
            </FooterButtonsContainer>
        )
    }
}

export default FooterButtons
