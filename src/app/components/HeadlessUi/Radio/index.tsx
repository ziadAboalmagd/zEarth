import React, { useState } from "react";
import { RadioGroup } from "@headlessui/react";

export default function Radio(props: {
  options: {
    id?: string;
    name: string;
    elements: React.ReactNode;
  }[];
}) {
  const options = props.options;
  const [selected, setSelected] = useState(props.options[0]);

  return (
    <>
      <RadioGroup value={selected} onChange={setSelected}>
        {/* <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label> */}
        <div className="grid grid-cols-2 gap-3">
          {options.map((option) => (
            <RadioGroup.Option
              key={option.name}
              value={option}
              className={({ active, checked }) =>
                `${
                  checked
                    ? "bg-brown-100 text-brown-50"
                    : "bg-brown-50 text-zblue-100"
                }
                    relative flex w-40 cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none`
              }
              id={option.id}
            >
              {({ active, checked }) => (
                <>
                  <div className="flex w-full items-center justify-between">
                    <div className="flex items-center">
                      <div className="flex flex-row items-center gap-3 text-sm">
                        <RadioGroup.Description
                          as="span"
                          className="inline text-2xl p-0 m-0 text-theme-red"
                        >
                          {option.elements}
                        </RadioGroup.Description>
                        <RadioGroup.Label
                          as="p"
                          className={`font-medium capitalize  ${
                            checked ? "text-white" : "text-zblue-100"
                          }`}
                        >
                          {option.name}
                        </RadioGroup.Label>
                      </div>
                    </div>
                    {checked && (
                      <div className="shrink-0 text-white">
                        <CheckIcon className="h-6 w-6" />
                      </div>
                    )}
                  </div>
                </>
              )}
            </RadioGroup.Option>
          ))}
        </div>
      </RadioGroup>
    </>
  );
}

function CheckIcon(props: any) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
      <path
        d="M7 13l3 3 7-7"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
