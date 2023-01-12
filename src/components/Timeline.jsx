import React from 'react'
import data from "../assets/data.json"

const Timeline = () => {
    return (
        <div id="timeline" >
            <div className="timelineBox">
                {
                    data.projects.map((item, index) => (
                        <TimelineItem url={item.url} heading={item.title} text={item.date} index={index} key={item.title} />
                    ))
                }
            </div>
        </div>
    )
}

const TimelineItem = ({ url, heading, text, index }) => (
    <div className={`timelineItem ${index % 2 == 0 ? "leftTimeline" : "rightTimeline"}`} >
        <div >
            <a href={url}><h2>{heading}</h2></a>
            <p>{text}</p>
        </div>
    </div >
)

export default Timeline