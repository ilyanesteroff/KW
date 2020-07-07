import React from 'react'
import UpperOption from './UpperOption'
import TwitterTags from './TwitterTags'
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { headerTwitts, twitterStyle, twitterItem } from './styles'


class HeaderTweets extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        let tags = ['COVID19', 'KeyWest', 'Florida']
        return(
            <div style={headerTwitts}>
                <UpperOption sentence={"Trending Twitts"} icon={faTwitter} iconStyle={twitterStyle} itemStyle={twitterItem}/>
                <TwitterTags tags={tags} />
            </div>
        )
    }
}

export default HeaderTweets