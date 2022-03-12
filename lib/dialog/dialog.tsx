import React, {MouseEventHandler, ReactElement, ReactNode} from 'react';
import './dialog.scss';
import Icon from '../icon/icon';
import ReactDOM from 'react-dom';
import Button from '../button/button';
import {scopedClassMaker} from '../helpers/scopedClassMaker';

interface DialogProps {
  visible: boolean;
  onClose: MouseEventHandler;
  title: string;
  buttons?: ReactElement[];
}

const Dialog: React.FC<DialogProps> = (props) => {
  const scopedClass= scopedClassMaker('dialog');
  const content = (
    props.visible ?
      <>
        <div className={scopedClass('mask')}/>
        <div className={scopedClass()}>
          <header className={scopedClass('header')}>
            <div className={scopedClass('title')}>{props.title}</div>
            <div className={scopedClass('close')} onClick={props.onClose}>
              <Icon name="close"/>
            </div>
          </header>
          <main className={scopedClass('main')}>
            <div className={scopedClass('message')}>
              {props.children}
            </div>
          </main>
          {props.buttons ?
            <footer className={scopedClass('footer')}>
              {props.buttons.map((element, index) =>
                React.cloneElement(element, {key: index}))}
            </footer>
            :
            null}
        </div>
      </>
      :
      null
  );
  return ReactDOM.createPortal(content, document.body);
};

const alert = (message: string) => {
  const buttons = [
    <Button kind="primary" onClick={() => {onClose();}}>确定</Button>];
  const onClose = customizedComponent('alert', message, buttons);
};

const confirm = (message: string, onOk?: () => void, onCancel?: () => void) => {
  const buttons = [
    <Button onClick={() => {
      onClose();
      onCancel && onCancel();
    }}>取消</Button>,
    <Button kind="primary" onClick={() => {
      onClose();
      onOk && onOk();
    }}>确定</Button>];
  const onClose = customizedComponent('confirm', message, buttons, onCancel);
};

const modal = (content: ReactNode) => {
  return customizedComponent('modal', content);
};

const customizedComponent = (title: string, content: any, buttons?: ReactElement[], onCancel?: () => void) => {
  const container = document.createElement('div');
  document.body.append(container);
  const onClose = () => {
    ReactDOM.render(React.cloneElement(component, {visible: false}), container);
    ReactDOM.unmountComponentAtNode(container);
    container.remove();
  };
  const component = (
    <Dialog visible={true}
            onClose={() => {
              onClose();
              onCancel && onCancel();
            }}
            buttons={buttons}
            title={title}
    >
      {content}
    </Dialog>
  );
  ReactDOM.render(component, container);
  return onClose;
};

export {alert, confirm, modal};
export default Dialog;