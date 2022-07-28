import styles from "../../styles/AjbButton.module.scss";

interface AjbButtonProps {
  text: string;
  href?: string;
  buttonType?: "button" | "submit" | "reset" | undefined;
}

function AjbButton({ text, href, buttonType }: AjbButtonProps): JSX.Element {
  if (href) {
    return (
      <div className={styles['ajb-button-container']}>
        <a href={href}>{text}</a>
      </div>
    )
  } else {
    return (
      <div className={styles['ajb-button-container']}>
        <button type={buttonType}>{text}</button>
      </div>
    )
  }
}

export default AjbButton;