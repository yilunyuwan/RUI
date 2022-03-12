import React, {HTMLAttributes} from 'react';
import {scopedClass} from './layout';
import classes from '../helpers/classes';

interface Props extends HTMLAttributes<HTMLElement> {
  className?: string;
}
const Header: React.FC<Props> = (props) => {
  const {className, ...rest} = props
  return (
    <div className={classes(scopedClass('header'), className)} {...rest}>Header</div>
  )
}

export default Header