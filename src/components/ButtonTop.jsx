import { useState } from "react";
import { BsArrowUpCircle } from "react-icons/bs";

import "../styles/components/buttonTop.sass";

const ButtonTop = () => {
  const [pageYPosition, setPageYPosition] = useState(0);

  window.addEventListener("scroll", () => setPageYPosition(window.scrollY));

  return (
    <a href="#portfolio" target="_top" id="btnTop">
      {pageYPosition > 900 && <BsArrowUpCircle />}
    </a>
  );
};

export default ButtonTop;
