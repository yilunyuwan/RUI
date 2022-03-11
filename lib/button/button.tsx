import React, {ButtonHTMLAttributes} from 'react';
import classes from '../helpers/classes';
import './button.scss'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  kind?: 'default' | 'primary';
}

const Button: React.FC<ButtonProps> =
  ({
     kind,
     className,
     children,
     ...restProps
   }) => {
    let textWithSpace
    if (typeof children === 'string' ){
      const isChinese = new RegExp("[\u4E00-\u9FA5]+")
      if (isChinese.test(children) && children.length === 2){
        textWithSpace = `${children[0]} ${children[1]}`
      }
    }
    return (
      <button className={classes('rui-button', kind, className)} {...restProps}>
        {textWithSpace?textWithSpace:children}
      </button>
    );
  };

Button.defaultProps = {
  kind: 'default'
}
export default Button;