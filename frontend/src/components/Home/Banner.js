import React from "react";
import logo from "../../imgs/logo.png";
import Inputbox from "../Inputbox.tsx";
import agent from "../../agent";
import { store } from "../../store";
import {
  APPLY_TITLE_FILDER,
  CLEAR_TITLE_FILTER,
  UPDATE_SEARCH_INPUT,
} from "../../constants/actionTypes";
import { debounce } from 'lodash';

const Banner = () => {
  function SearchIcon() {
    return (
      <span
        style={{
          top: "5px",
          color: "#af93f2",
          position: "relative",
        }}
        className="material-symbols-outlined"
      >
        search
      </span>
    );
  }

  function onInput(e) {
    const { value } = e.target;
    if (!value) return;
    store.dispatch({
      type: UPDATE_SEARCH_INPUT,
      payload: value,
    });
  }
  const debouncedOnInput = debounce(onInput, 500);
  
  async function onBeforeThrottle() {
    const items = await agent.Items.all();
    store.dispatch({
      type: CLEAR_TITLE_FILTER,
      payload: items,
    });
  }
  const debouncedOnBeforeThrottle = debounce(onBeforeThrottle, 500);
  
  async function onChange(e) {
    const items = await agent.Items.searchByTitle(e.target.value);
    store.dispatch({
      type: APPLY_TITLE_FILDER,
      payload: items,
    });
  }
  const debouncedOnChange = debounce(onChange, 500);

  return (
    <div className="banner text-white">
      <div className="container p-4 text-center">
        <img src={logo} alt="banner" />
        <div>
          <span id="get-part">A place to get</span>
          <Inputbox
            id="search-box"
            placeholder="What is it that you truly desire?"
            inputBoxStyle={{
              border: "none",
              outline: "none",
              margin: "0em 0.3em",
              padding: "0.5em",
              borderRadius: "0.4em",
              width: "20em",
              background: "white",
              height: "1em",
            }}
            style={{
              margin: "0em 0.3em",
              padding: "0.5em",
              borderRadius: "0.4em",
              width: "20em",
              background: "white",
            }}
            inputThreshold={3}
            onBeforeThreshold={debouncedOnBeforeThrottle}
            onInput={debouncedOnInput}
            onChange={debouncedOnChange}
            icon={SearchIcon}
          />
          <span> the cool stuff.</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
