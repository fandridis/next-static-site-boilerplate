import styles from './Footer.module.scss';

interface FooterProps {
  exampleProp: string
}

Footer.defaultProps = {
  exampleProp: 'EXAMPLE_PROP'
}

function Footer(props: React.PropsWithChildren<FooterProps>) {
  return (
    <footer className={styles.container}>
      <div>
        Footer goes here - {props.exampleProp}
      </div>
    </footer>
  )
}

export default Footer;