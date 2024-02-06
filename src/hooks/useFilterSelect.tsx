import { useState, MouseEvent } from "react";

function useFilterSelect() {
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const [selected, setSelected] = useState("");

  const selectToggleHandler = () => setIsSelectOpen(prevSelect => !prevSelect);

  const selectedHandler = (event: MouseEvent) => {
    const target = event.target as HTMLLIElement | HTMLUListElement;
    if (target.nodeName === "UL") return;

    setSelected(target.textContent!);
  };

  return {
    isSelectOpen,
    selected,
    selectToggleHandler,
    selectedHandler,
  };
}

export default useFilterSelect;
