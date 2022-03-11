import React from 'react';
import {alert, confirm, modal} from './dialog';
import Button from '../button/button';

function DialogExample() {

  return (
    <>
      <Button onClick={() => alert('给你警告')}>alert</Button>
      <Button onClick={() => confirm('等你确认',
        () => {console.log('ok');},
        () => {console.log('cancel');},
      )}>confirm</Button>
      <Button onClick={() => {
        const onClose = modal(
          <>
            <span>给你看</span>
            <Button onClick={() => onClose()}>关闭</Button>
          </>
        );
      }
      }>modal</Button>
    </>
  );
}

export default DialogExample;