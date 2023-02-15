import React, { CSSProperties, ChangeEvent } from "react";

interface Prop {
  id?: string;
  placeholder?: string;
  inputThreshold?: number;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onInput?: (e: ChangeEvent<HTMLInputElement>) => void;
  onBeforeThreshold?: (e: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  style?: CSSProperties;
  inputBoxStyle?: CSSProperties;
  icon?: any;
}

function Inputbox(prop: Prop) {
  function onChange(e: ChangeEvent<HTMLInputElement>) {
    if (prop.inputThreshold && e.target.value.length < prop.inputThreshold) {
      if (prop.onBeforeThreshold) prop.onBeforeThreshold(e);
      return;
    }
    if (prop.onChange) prop.onChange(e);
  }

  function onInput(e: ChangeEvent<HTMLInputElement>) {
    if (prop.onInput) prop.onInput(e);
  }

  return (
    <span style={prop.style}>
      <input
        id={prop.id}
        placeholder={prop.placeholder}
        className={prop.className}
        style={prop.inputBoxStyle}
        onChange={onChange}
        onInput={onInput}
      />
      {prop.icon ? prop.icon() : null}
    </span>
  );
}

export default Inputbox;
