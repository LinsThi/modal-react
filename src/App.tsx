import React, { useState } from "react";

import { GlobalStyle } from "./styles/global";

import { NewModal } from "./components/Modal";

const App: React.FC = () => {
  const [openModal, setOpenModal] = useState(false);

  function handleSetModal() {
    setOpenModal(!openModal);
  }

  return (
    <>
      <button
        type="button"
        onClick={handleSetModal}
        style={{ marginTop: "24%", marginLeft: "48%" }}
      >
        Abrir Modal
      </button>
      <NewModal isOpen={openModal} onRequestClose={handleSetModal} />
      <GlobalStyle />
    </>
  );
};

export default App;
