import { useState, MouseEvent } from "react";

function useFilterSelect() {
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const [selected, setSelected] = useState("");
  const [stackSelected, setStackSelected] = useState<string[]>([]);

  const selectToggleHandler = () => setIsSelectOpen(prevSelect => !prevSelect);

  const selectHadler = (res: any) => setIsSelectOpen(res);

  const selectedHandler = (event: MouseEvent) => {
    const target = event.target as HTMLLIElement | HTMLUListElement;
    if (target.nodeName === "UL") return;

    setSelected(target.textContent!);
  };

  return {
    isSelectOpen,
    selected,
    stackSelected,
    selectToggleHandler,
    selectedHandler,
    selectHadler,
  };
}

export default useFilterSelect;
