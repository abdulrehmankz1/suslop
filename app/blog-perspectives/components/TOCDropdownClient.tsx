"use client";

import { useState } from "react";
import Select from "react-select";

interface TOCDropdownClientProps {
  toc: { id: string; label: string }[];
}

export default function TOCDropdownClient({ toc }: TOCDropdownClientProps) {
  const [selectedOption, setSelectedOption] = useState<any>(null);

  // Convert TOC data to react-select format
  const options = toc.map((section) => ({
    value: section.id,
    label: section.label,
  }));

  const handleChange = (option: any) => {
    setSelectedOption(option);

    if (!option?.value) return;
    const targetId = option.value;
    const el = document.querySelector(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });

      // Optional offset fix (for sticky header)
      // const yOffset = -80;
      // const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
      // window.scrollTo({ top: y, behavior: "smooth" });

      history.replaceState(null, "", targetId);
    }
  };

  return (
    <div className="block lg:hidden fixed top-0 left-0 right-0 bg-white z-50 shadow-md">
      <div className="container mx-auto px-4 py-3">
        <Select
          instanceId="toc-react-select"
          options={options}
          value={selectedOption}
          onChange={handleChange}
          placeholder="Jump to section..."
          className="text-dark"
          classNames={{
            control: () => "border border-gray-300 rounded-md shadow-sm",
          }}
          styles={{
            control: (base) => ({
              ...base,
              minHeight: "44px",
              boxShadow: "none",
              borderColor: "#d1d5db",
            }),
            option: (base, state) => ({
              ...base,
              backgroundColor: state.isFocused ? "#f3f4f6" : "white",
              color: "black",
              cursor: "pointer",
            }),
            menu: (base) => ({
              ...base,
              zIndex: 9999,
            }),
          }}
          isClearable
        />
      </div>
    </div>
  );
}
