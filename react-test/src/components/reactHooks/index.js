import React, {useState} from "react";
import FriendStatus from "./FriendStatusClass";
import UseRefDemo from "./UseRefDemo";
import UseContextDemo from "./UseContextDemo";
import UseReducerDemo from './UseReducerDemo'
import UseMemoDemo from "./UseMemoDemo";
import UseCallbackDemo from "./UseCallbackDemo";

function ReactHooks() {
  const [flag, setFlag] = useState(true)
  const [id, setId] = useState(1)

  return <div>
    <button onClick={() => setFlag(false)}>设置 flag</button>
    <button onClick={() => setId(id + 1)}>设置 ID</button>
    {/*{flag && <FriendStatus friendId={id}></FriendStatus>}*/}
    {/*<UseRefDemo></UseRefDemo>*/}
    {/*<UseContextDemo></UseContextDemo>*/}
    {/*<UseReducerDemo></UseReducerDemo>*/}
    {/*<UseMemoDemo></UseMemoDemo>*/}
    <UseCallbackDemo></UseCallbackDemo>
  </div>
}

export default ReactHooks