import styles from "../../styles/AjbButton.module.scss";

interface AjbButtonProps {
  cb: () => void;
  text: string;
  href?: string;
  buttonType?: "button" | "submit" | "reset" | undefined;
}

function AjbButton({ text, href, buttonType, cb }: AjbButtonProps): JSX.Element {
  if (href) {
    return (
      <div className={styles['ajb-button-container']}>
        <a href={href}>{text}</a>
      </div>
    )
  } else {
    return (
      <div className={styles['ajb-button-container']}>
        <button type={buttonType} onClick={() => cb()}>{text}</button>
      </div>
    )
  }
}

export default AjbButton;