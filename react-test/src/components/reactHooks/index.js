import React, {useState} from "react";
import FriendStatus from "./FriendStatusClass";

function ReactHooks() {
  const [flag, setFlag] = useState(true)
  const [id, setId] = useState(1)

  return <div>
    <button onClick={() => setFlag(false)}>设置 flag</button>
    <button onClick={() => setId(id + 1)}>设置 ID</button>
    {flag && <FriendStatus friendId={id}></FriendStatus>}
  </div>
}

export default ReactHooks