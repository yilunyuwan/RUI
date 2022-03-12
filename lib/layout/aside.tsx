import React, {HTMLAttributes} from 'react';
import {scopedClass} from './layout';
import classes from '../helpers/classes';

interface Props extends HTMLAttributes<HTMLElement> {
  className?: string;
}
const Aside: React.FC<Props> = (props) => {
  const {className, ...rest} = props
  return (
    <div className={classes(scopedClass('aside'), className)} {...rest}>Aside</div>
  )
}
export default Aside