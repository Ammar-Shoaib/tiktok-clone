import React, { useState } from 'react'
import './VideoSidebar.css'
import FavoriteIcon from '@material-ui/icons/Favorite'
import MessageIcon from '@material-ui/icons/Message'
import ShareIcon from '@material-ui/icons/Share'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    to: {
        [theme.breakpoints.down('md')]: {
            fontSize:"23px"
        }
    }
}))

function VideoSidebar({ likes, messages, shares }) {

    const classes = useStyles()
    const [liked, setLiked] = useState(false)

    return (
        <div className='videoSidebar'>
            <div className="videoSidebar__button">
                {liked ? (
                    <FavoriteIcon
                        className={classes.to}
                        fontSize='large'
                        onClick={e => setLiked(false)}
                    />
                ) : (
                    <FavoriteBorderIcon 
                        className={classes.to}
                        fontSize='large' 
                        onClick={e => setLiked(true)}
                    />
                )}
                <p>{liked ? parseInt(likes) + 1 : likes}</p>
            </div>
            <div className="videoSidebar__button">
                <MessageIcon 
                    fontSize='large' 
                    className={classes.to}
                />
                <p>{messages}</p>
            </div>
            <div className="videoSidebar__button">
                <ShareIcon 
                    fontSize='large' 
                    className={classes.to}
                />
                <p>{shares}</p>
            </div>
        </div>
    )
}

export default VideoSidebar