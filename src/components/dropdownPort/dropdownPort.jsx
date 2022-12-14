import React, { useState } from "react";
import './dropdownPort.css'
import OnClickOut from "react-onclickoutside";

function DropdownPort({ title, items = [], multiSelect = false }) {
  const [open, setOpen] = useState(false);
  const [selection, setSelection] = useState([]);
  const toggle = () => setOpen(!open);
  DropdownPort.handleClickOutside = () => setOpen(false);

  const [selected, setSelected] = useState(false);
  function handleSelection() {
    setSelected(selected => !selected)
  }

  function handleOnClick(item) {
    if (!selection.some(current => current.id === item.id)) {
        if (!multiSelect) {
            setSelection([item]);
        } else if (multiSelect) {
            setSelection([...selection, item]);
        }
    } else {
        let removeSelection = selection;
        removeSelection = removeSelection.filter(current => current.id !== item.id);
        setSelection([...removeSelection]);
    }
  }

  function isItemInSelection(item) {
    if (selection.find(current => current.id === item.id)) {
        return true;
    } 
    return false; 
  }

  return (
    <>
      <div className="dd-wrapper">
        <p className="dd-wrapper-title">Departing from</p>
        <div
          tabIndex={0}
          className="dd-header"
          role="button"
          onKeyPress={() => toggle(!open)}
          onClick={() => toggle(!open)}
        >
          <div className="dd-header-title">
            <p className="dd-header-title-text">{title}</p>
          </div>
          <div className="dd-header-action">
            <p>{open ? "▴" : "▾"}</p> 
          </div>
        </div>
        {open && (
          <ul className="dd-list">
            {items.map((item) => (
              <li className="dd-list-item" key={item.id}>
                <button 
                className="dd-list-item-button"
                type="button" 
                onClick={() => handleOnClick(item)}
                >
                  <span className="dd-list-item-span">{item.value}</span>
                  <span>{isItemInSelection(item) && 'Selected'}</span>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

const clickOutsideConfig = {
    handleClickOutside: () => DropdownPort.handleClickOutside,
}

export default OnClickOut(DropdownPort, clickOutsideConfig);
