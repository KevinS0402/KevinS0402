import React from 'react'
import {NavBar} from './containers/NavBar'
import Heading1 from './containers/Heading'
import './Music.css'
import BubbleGum from './containers/Images/KevinMusic'
import TwentyFour from './containers/Images/KevinMusic2'

const Music = () => (
    <>
    <NavBar/>
    <h1>Music</h1>
    <p></p>
    <table id = "homeSection">
        
        <div id = "Column1Music">
            <BubbleGum/>
        </div>
        <div id = "Column2Music">
            <h1>BUBBLE GUM</h1>
            <form action = "https://distrokid.com/hyperfollow/ksong/bubble-gum" target = "_blank">
                <input type = "submit" value = "Listen to Bubble Gum!"/>
            </form>
            <iframe width="90%" height="63%" src="https://www.youtube.com/embed/ldvgXqlSvXU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        
    </table>
    <table id = "homeSection">
        <div id = "Column1Music">
        <TwentyFour/>
        </div>
        <div id = "Column2Music">
        
        <h1>24/7/365</h1>
        <form action = "https://distrokid.com/hyperfollow/ksong/247365" target = "_blank">
            <input type = "submit" value = "Listen to 24/7/365"/>
        </form>
        <iframe width="90%" height="63%" src="https://www.youtube.com/embed/Aql-Y1MqpBQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    </table>
    <p>
    </p>
    </>
)
export default Music