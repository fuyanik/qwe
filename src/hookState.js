
import { createGlobalState } from 'react-hooks-global-state';
import { MdOutlineArrowForward } from "react-icons/md";
import  "./formComponents/components/ForwardButton/forwardButton.css"
import React from 'react';

const { setGlobalState, useGlobalState } = createGlobalState({
  myButtonType: <MdOutlineArrowForward className="forward-icon" />,

  myButtonWidth: "100px",
  myButtonleft: "48%",
  myBackButtonleft: "44.7%",

  //It helps the user to extract different pages in the form based on their responses.
  formDestiny: 0,

  //Help payment sccreen open
  isPayScreen: false,
});


export {useGlobalState, setGlobalState};