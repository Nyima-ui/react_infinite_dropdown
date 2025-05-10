import React from 'react'
import { useState } from 'react';

function MenuItem({ item }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = (e) => {
    e.stopPropagation();
    setIsOpen((prev) => !prev);
  };

  return (
    <li className="cursor-pointer" onClick={handleToggle}>
      {item.label}
      {item.sublabel && isOpen && (
        <ul className="ml-10 mt-2 space-y-2 list-decimal">
          {item.sublabel.map((subItem) => (
            <MenuItem key={subItem.id} item={subItem} />
          ))}
        </ul>
      )}
    </li>
  );
}

export default MenuItem; 
