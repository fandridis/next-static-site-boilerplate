import React from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
  variant: string,
  className: string,
}

Button.defaultProps = {
  variant: 'default',
  className: ''

}

function Button(props: React.PropsWithChildren<ButtonProps>) {
  const classes = [
    styles.container,
    props.className && props.className
  ].filter(c => !!c).join(' ');

  return (
    <button className={classes}>{props.children}</button>
  )
}

export default Button;