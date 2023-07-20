import React from "react";
import SlidingMenu from "../components/SlidingMenu";

const ListLayout = () => {
  return(
    <main className="sliding-menu">
      <div className="sliding-menu__wrapper">
        <div className="sliding-menu__col sliding-menu__nav">
          <SlidingMenu />
        </div>
      </div>
    </main>
  )
} 

export default ListLayout;