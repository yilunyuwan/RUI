import React, {useState} from 'react';
import Dialog from './dialog';

function DialogExample() {
  const [displayState, setDisplayState] = useState(false)

  return (
    <>
      <button onClick={() => setDisplayState(!displayState)}>click</button>
      <Dialog visible={displayState}>dialog</Dialog>
    </>
  )
}

export default DialogExample