import { createContext, useReducer, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const ChecklistaContext = createContext("");

const startLista = [
  {
    id: uuidv4(),
    titel: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    klart: false,
  },
  {
    id: uuidv4(),
    titel: "Nullam eget lectus quis purus hendrerit pharetra.",
    klart: true,
  },
  {
    id: uuidv4(),
    titel:
      "Praesent blandit tristique diam a sodales. Sed volutpat bibendum lorem nec ornare.",
    klart: false,
  },
];

function ChecklistReducer(checklista, action) {
  switch (action.type) {
    case "tillagt": {
      let nyUppgift = action.nyUppgift;
      nyUppgift.id = uuidv4();
      return [...checklista, nyUppgift];
    }
    case "bortTaget": {
      return checklista.filter((uppgift) => uppgift.id !== action.id);
    }
    case "växlat": {
      return checklista.map((uppgift) => {
        if (uppgift.id === action.id) {
          return { ...uppgift, klart: !uppgift.klart };
        } else {
          return uppgift;
        }
      });
    }
    default:
      return checklista;
  }
}

// Om det inte finns data i localstorage som heter "checklista" så börjar den med startLista
export default function CheckListaProvider({ children }) {
  const [checklista, dispatch] = useReducer(ChecklistReducer, [], () => {
    const localData = localStorage.getItem("checklista");
    return localData ? JSON.parse(localData) : startLista;
  });

  useEffect(() => {
    localStorage.setItem("checklista", JSON.stringify(checklista));
  }, [checklista]);

  //DialogBox
  const initalDialog = {
    open: false,
    aktion: "",
    id: null,
    titel: "",
  };

  const [dialog, setDialog] = useState(initalDialog);

  const openDialog = (aktion, uppgift) => {
    setDialog({
      open: true,
      aktion,
      id: uppgift.id,
      titel: uppgift.titel,
    });
  };

  const aktionsHantering = () => {
    dialog.aktion === "Ta bort"
      ? dispatch({
          type: "bortTaget",
          id: dialog.id,
        })
      : dispatch({
          type: "växlat",
          id: dialog.id,
        });
    setDialog(initalDialog);
  };

  return (
    <ChecklistaContext.Provider
      value={{
        checklista,
        dispatch,
        dialog,
        setDialog,
        openDialog,
        aktionsHantering,
        initalDialog,
      }}>
      {children}
    </ChecklistaContext.Provider>
  );
}
