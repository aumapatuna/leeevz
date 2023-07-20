import React from "react";
import Headings from "../stories/Headings";
import { Buttons } from "../stories/Buttons";
import Navigation from "../components/Navigation";

const Typography = () => {
  return(
    <div>
      <Navigation />
      <Headings
        label="Typography"
        renderAs="h1"
        weight="normal"
      />

      <Headings
        label="Buttons"
        renderAs="h3"
        weight="normal"
      />
      
      <Buttons
        handleClick={() => {}}
        label="Primary small"
      />
      <Buttons
        handleClick={() => {}}
        label="Primary medium"
        size="medium"
      />
      <Buttons
        handleClick={() => {}}
        label="Primary large"
        size="large"
      />
      <Buttons
        buttonIcon="left-image"
        handleClick={() => {}}
        label="Primary small left image"
      />
      <Buttons
        buttonIcon="left-image"
        handleClick={() => {}}
        label="Primary medium left image"
        size="medium"
      />
      <Buttons
        buttonIcon="left-image"
        handleClick={() => {}}
        label="Primary large left image"
        size="large"
      />
      <Buttons
        buttonIcon="right-image"
        handleClick={() => {}}
        label="Primary small right image"
      />
      <Buttons
        buttonIcon="right-image"
        handleClick={() => {}}
        label="Primary medium right image"
        size="medium"
      />
      <Buttons
        buttonIcon="right-image"
        handleClick={() => {}}
        label="Primary large right image"
        size="large"
      />
      <br /> <br />
      <Buttons
        handleClick={() => {}}
        label="Secondary small plane"
        varient="secondary"
      />
      <Buttons
        handleClick={() => {}}
        label="Secondary medium plane"
        size="medium"
        varient="secondary"
      />
      <Buttons
        handleClick={() => {}}
        label="Secondary large plane"
        size="large"
        varient="secondary"
      />
      <Buttons
        buttonIcon="left-image"
        handleClick={() => {}}
        label="Secondary small left image"
        varient="secondary"
      />
      <Buttons
        buttonIcon="left-image"
        handleClick={() => {}}
        label="Secondary medium left image"
        varient="secondary"
        size="medium"
      />
      <Buttons
        buttonIcon="left-image"
        handleClick={() => {}}
        label="Secondary large left image"
        varient="secondary"
        size="large"
      />
      <Buttons
        buttonIcon="right-image"
        handleClick={() => {}}
        label="Secondary small right image"
        varient="secondary"
      />
      <Buttons
        buttonIcon="right-image"
        handleClick={() => {}}
        label="Secondary medium right image"
        varient="secondary"
        size="medium"
      />
      <Buttons
        buttonIcon="right-image"
        handleClick={() => {}}
        label="Secondary large right image"
        varient="secondary"
        size="large"
      />
      <br /> <br />

      <Buttons
        handleClick={() => {}}
        label="Secondary gray small plane"
        varient="secondary-gray"
      />
      <Buttons
        handleClick={() => {}}
        label="Secondary gray medium plane"
        size="medium"
        varient="secondary-gray"
      />
      <Buttons
        handleClick={() => {}}
        label="Secondary gray large plane"
        size="large"
        varient="secondary-gray"
      />
      <Buttons
        buttonIcon="left-image"
        handleClick={() => {}}
        label="Secondary gray small left image"
        varient="secondary-gray"
      />
      <Buttons
        buttonIcon="left-image"
        handleClick={() => {}}
        label="Secondary gray medium left image"
        varient="secondary-gray"
        size="medium"
      />
      <Buttons
        buttonIcon="left-image"
        handleClick={() => {}}
        label="Secondary gray large left image"
        varient="secondary-gray"
        size="large"
      />
      <Buttons
        buttonIcon="right-image"
        handleClick={() => {}}
        label="Secondary gray small right image"
        varient="secondary-gray"
      />
      <Buttons
        buttonIcon="right-image"
        handleClick={() => {}}
        label="Secondary gray medium right image"
        varient="secondary-gray"
        size="medium"
      />
      <Buttons
        buttonIcon="right-image"
        handleClick={() => {}}
        label="Secondary gray large right image"
        varient="secondary-gray"
        size="large"
      />
      <br /> <br />

      <Buttons
        handleClick={() => {}}
        label="Secondary white small plane"
        varient="secondary-white"
      />
      <Buttons
        handleClick={() => {}}
        label="Secondary white medium plane"
        size="medium"
        varient="secondary-white"
      />
      <Buttons
        handleClick={() => {}}
        label="Secondary white large plane"
        size="large"
        varient="secondary-white"
      />
      <Buttons
        buttonIcon="left-image"
        handleClick={() => {}}
        label="Secondary white small left image"
        varient="secondary-white"
      />
      <Buttons
        buttonIcon="left-image"
        handleClick={() => {}}
        label="Secondary white medium left image"
        varient="secondary-white"
        size="medium"
      />
      <Buttons
        buttonIcon="left-image"
        handleClick={() => {}}
        label="Secondary white large left image"
        varient="secondary-white"
        size="large"
      />
      <Buttons
        buttonIcon="right-image"
        handleClick={() => {}}
        label="Secondary white small right image"
        varient="secondary-white"
      />
      <Buttons
        buttonIcon="right-image"
        handleClick={() => {}}
        label="Secondary white medium right image"
        varient="secondary-white"
        size="medium"
      />
      <Buttons
        buttonIcon="right-image"
        handleClick={() => {}}
        label="Secondary white large right image"
        varient="secondary-white"
        size="large"
      />
      <br /> <br />

      <Buttons
        handleClick={() => {}}
        label="Secondary red small plane"
        varient="secondary-red"
      />
      <Buttons
        handleClick={() => {}}
        label="Secondary red medium plane"
        size="medium"
        varient="secondary-red"
      />
      <Buttons
        handleClick={() => {}}
        label="Secondary red large plane"
        size="large"
        varient="secondary-red"
      />
      <Buttons
        buttonIcon="left-image"
        handleClick={() => {}}
        label="Secondary red small left image"
        varient="secondary-red"
      />
      <Buttons
        buttonIcon="left-image"
        handleClick={() => {}}
        label="Secondary red medium left image"
        varient="secondary-red"
        size="medium"
      />
      <Buttons
        buttonIcon="left-image"
        handleClick={() => {}}
        label="Secondary red large left image"
        varient="secondary-red"
        size="large"
      />
      <Buttons
        buttonIcon="right-image"
        handleClick={() => {}}
        label="Secondary red small right image"
        varient="secondary-red"
      />
      <Buttons
        buttonIcon="right-image"
        handleClick={() => {}}
        label="Secondary red medium right image"
        varient="secondary-red"
        size="medium"
      />
      <Buttons
        buttonIcon="right-image"
        handleClick={() => {}}
        label="Secondary red large right image"
        varient="secondary-red"
        size="large"
      />
      <br /> <br />

      <Buttons
        handleClick={() => {}}
        label="Secondary neutral small plane"
        varient="secondary-neutral"
      />
      <Buttons
        handleClick={() => {}}
        label="Secondary neutral medium plane"
        size="medium"
        varient="secondary-neutral"
      />
      <Buttons
        handleClick={() => {}}
        label="Secondary neutral large plane"
        size="large"
        varient="secondary-neutral"
      />
      <Buttons
        buttonIcon="left-image"
        handleClick={() => {}}
        label="Secondary neutral small left image"
        varient="secondary-neutral"
      />
      <Buttons
        buttonIcon="left-image"
        handleClick={() => {}}
        label="Secondary neutral medium left image"
        varient="secondary-neutral"
        size="medium"
      />
      <Buttons
        buttonIcon="left-image"
        handleClick={() => {}}
        label="Secondary neutral large left image"
        varient="secondary-neutral"
        size="large"
      />
      <Buttons
        buttonIcon="right-image"
        handleClick={() => {}}
        label="Secondary neutral small right image"
        varient="secondary-neutral"
      />
      <Buttons
        buttonIcon="right-image"
        handleClick={() => {}}
        label="Secondary neutral medium right image"
        varient="secondary-neutral"
        size="medium"
      />
      <Buttons
        buttonIcon="right-image"
        handleClick={() => {}}
        label="Secondary neutral large right image"
        varient="secondary-neutral"
        size="large"
      />
      <br /> <br />
    </div>
  )
}

export default Typography;