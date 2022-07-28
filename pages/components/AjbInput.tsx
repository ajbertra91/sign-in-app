import React, { useEffect, useState } from "react";
import styles from "../../styles/AjbInput.module.scss";

interface AjbInputProps {
  cb: (val: string) => void;
  label: string;
  type: string
}

function AjbInput({ label, type, cb }: AjbInputProps): JSX.Element {
  const [id, setId] = useState('ajb-input');
  useEffect(() => {
    const str = label.replace(' ', '-').toLowerCase();
    setId(`${id}-${str}`)
  }, [])
  return (
    <div className={styles['ajb-input-container']}>
      <input
        id={id}
        type={type}
        name={label?.toLowerCase()}
        placeholder={label}
        onChange={(e: React.FormEvent) => cb((e.target as HTMLInputElement).value)}
      />
      <label htmlFor={id} data-content={label}>
        <span className="hidden--visually">{label}</span>
      </label>
    </div>
  )
}

export default AjbInput;