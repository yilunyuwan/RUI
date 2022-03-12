import React, {HTMLAttributes} from 'react';
import {scopedClassMaker} from '../helpers/scopedClassMaker';
import './layout.scss'
import classes from '../helpers/classes';
import Aside from './aside';

export const scopedClass = scopedClassMaker('layout');

interface Props extends HTMLAttributes<HTMLElement>{
  className?: string;
}
const Layout: React.FC<Props> = (props) => {
  const {className, children, ...rest} = props

  const hasAside = () => {
    return children instanceof Array &&
      children.reduce((result, item)=> result||item.type===Aside, false)
  }
  return (
    <div className={classes(scopedClass(), className, hasAside()?scopedClass('hasAside'):undefined)} {...rest}>
      {children}
    </div>
  )
}

export default Layout