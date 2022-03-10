import React, {ButtonHTMLAttributes} from 'react';
import classes from '../helpers/classes';
import './button.scss'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: 'default' | 'primary';
}

const Button: React.FC<ButtonProps> =
  ({
     className='default',
     children,
     ...restProps
   }) => {
    return (
      <button className={classes('rui-button', className)} {...restProps}>
        {children}
      </button>
    );
  };

export default Button;