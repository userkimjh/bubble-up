import React from "react";
import classNames from "classnames";
import "./ChatPreview.css"
import chatPreveiwProfile from "../img/chat-preview-profile.jpg"

export default function ChatPreview(props) {
  const {onChange, selected, peerUsername, roomData} = props
  // 
  let previewClassName = classNames(
    `chat-preview`,
    {focus: selected}
  )

  return(
    <div className={previewClassName} onClick={() => {
      console.log("room data", roomData.room)
      console.log(selected);
      // console.log("room", room.room)
      onChange(roomData)}}>
      {/* <div className="chat-header"> */}
        {/* <div className="chat-profile"> */}
          <div><b>User: {peerUsername}</b></div>
        {/* </div> */}
      {/* </div> */}
    </div>
  )
}