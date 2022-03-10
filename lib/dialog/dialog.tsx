import React from 'react';
import './dialog.scss'
import Icon from '../icon/icon';
import Button from '../button/button';

interface DialogProps {
  visible: boolean;
}
const Dialog:React.FC<DialogProps> = (props) =>{
  const scopedClassMaker = (prefix: string) =>{
    return (name?: string) => {
      return [prefix, name].filter(Boolean).join('-')
    }
  }
  console.log(props.visible)
  const scopedClass = scopedClassMaker('rui-dialog')
  return (
    props.visible?
      <>
        <div className={scopedClass('mask')}/>
        <div className={scopedClass()}>
          <header className={scopedClass('header')}>
            <div className={scopedClass('title')}>提示标题</div>
            <div className={scopedClass('close')}>
              <Icon name='close'/>
            </div>
          </header>
          <main className={scopedClass('main')}>
            <div className={scopedClass('message')}>提示文字</div>
          </main>
          <div className={scopedClass('footer')}>
            <Button>取消</Button>
            <Button className='primary'>确定</Button>
          </div>
        </div>
      </>
       :
      null
  )
}

export default Dialog