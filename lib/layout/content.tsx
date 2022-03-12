import React, {HTMLAttributes} from 'react';
import {scopedClass} from './layout';
import classes from '../helpers/classes';

interface Props extends HTMLAttributes<HTMLElement> {
  className?: string;
}
const Content: React.FC<Props> = (props) => {
  const {className, ...rest} = props
  return (
    <div className={classes(scopedClass('content'), className)} {...rest}>Content</div>
  )
}
export default Content