import React, {HTMLAttributes} from 'react';
import {scopedClass} from './layout';
import classes from '../helpers/classes';

interface Props extends HTMLAttributes<HTMLElement> {
  className?: string;
}
const Footer: React.FC<Props> = (props) => {
  const {className, ...rest} = props
  return (
    <div className={classes(scopedClass('footer'), className)} {...rest}>footer</div>
  )
}

export default Footer