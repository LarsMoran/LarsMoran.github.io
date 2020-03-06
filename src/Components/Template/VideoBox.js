import React from 'react'
import styled from 'styled-components'
import {useSelector} from 'react-redux'
const Container = styled.div`
position: relative;
width: 320px;
transition: transform 0.8s ease;
margin: 40px;
border-radius: 10%
`
export function VideoBox({video}) {
    const swipe = useSelector(state => state.translation)
    const videoURL = () => {
        return (
            `https://www.youtube.com/watch?v=${video.id.videoId}`
        )
    }
    return (
        <Container style={{transform: `translateX(${swipe}px)`}}>
            <img src={video.snippet.thumbnails.medium.url} ></img>
            <div>
                {`${video.snippet.channelTitle}`}
            </div>
            <div>
                {`${video.snippet.title}`}
            </div>
            <div>
                {`${video.snippet.description}`}
            </div>
        </Container>
    )
}