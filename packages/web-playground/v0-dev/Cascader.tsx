import React, { useState } from 'react'
import * as Popover from '@sea-lion/react-popover'
import { ChevronDownIcon, ChevronRightIcon } from '@radix-ui/react-icons'
import { Button } from '@sea-lion/react-button';

interface Option {
    value: string
    label: string
    children?: Option[]
}

const options: Option[] = [
    {
        value: 'fruits',
        label: 'Fruits',
        children: [
            {
                value: 'apple',
                label: 'Apple',
                children: [
                    { value: 'red-delicious', label: 'Red Delicious' },
                    { value: 'granny-smith', label: 'Granny Smith' },
                ],
            },
            { value: 'banana', label: 'Banana' },
            { value: 'orange', label: 'Orange' },
        ],
    },
    {
        value: 'vegetables',
        label: 'Vegetables',
        children: [
            { value: 'carrot', label: 'Carrot' },
            { value: 'broccoli', label: 'Broccoli' },
            { value: 'cucumber', label: 'Cucumber' },
        ],
    },
]

export default function Cascader() {
    const [isOpen, setIsOpen] = useState(false)
    const [selectedOptions, setSelectedOptions] = useState<Option[]>([])

    const handleSelect = (option: Option, level: number) => {
        const newSelectedOptions = [...selectedOptions.slice(0, level), option]
        setSelectedOptions(newSelectedOptions)
        if (!option.children) {
            setIsOpen(false)
        }
    }

    const renderLevels = () => {
        const levels = [options]
        for (let i = 0; i < selectedOptions.length; i++) {
            const children = selectedOptions[i].children
            if (children) {
                levels.push(children)
            } else {
                break
            }
        }
        return levels
    }

    return (
        <div className="cascader-container">
            <h2 className="cascader-title">Cascader Component</h2>
            <Popover.Root open={isOpen} onOpenChange={setIsOpen}>
                <Popover.Trigger className="cascader-trigger">
                    <Button>
                        {selectedOptions.length > 0
                            ? selectedOptions.map(opt => opt.label).join(' > ')
                            : 'Select options'}
                        <ChevronDownIcon />
                    </Button>

                </Popover.Trigger>
                <Popover.Content className="cascader-content" sideOffset={5}>
                    {renderLevels().map((levelOptions, index) => (
                        <div key={index} className="cascader-level">
                            {levelOptions.map((option) => (
                                <div
                                    key={option.value}
                                    className={`cascader-option ${option.value === selectedOptions[index]?.value ? 'selected' : ''}`}
                                    onClick={() => handleSelect(option, index)}
                                >
                                    {option.label}
                                    {option.children && <ChevronRightIcon />}
                                </div>
                            ))}
                        </div>
                    ))}
                </Popover.Content>
            </Popover.Root>
            <div className="cascader-selection">
                <h3>Selected:</h3>
                <p>{selectedOptions.map((option) => option.label).join(' > ')}</p>
            </div>
            <style>{`
        .cascader-container {
          width: 100%;
          max-width: 400px;
          margin: 0 auto;
          padding: 16px;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
        }
        .cascader-title {
          font-size: 24px;
          font-weight: bold;
          margin-bottom: 16px;
        }
        .cascader-trigger {
          display: inline-flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          padding: 8px 12px;
          font-size: 14px;
          line-height: 1;
          border: 1px solid #d4d4d4;
          border-radius: 4px;
          background-color: white;
          cursor: pointer;
        }
        .cascader-trigger:hover {
          background-color: #f4f4f4;
        }
        .cascader-trigger:focus {
          outline: none;
          box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1);
        }
        .cascader-content {
          display: flex;
          background-color: white;
          border-radius: 6px;
          box-shadow: 0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2);
        }
        .cascader-level {
          min-width: 200px;
          max-height: 300px;
          overflow-y: auto;
          border-right: 1px solid #e4e4e4;
        }
        .cascader-level:last-child {
          border-right: none;
        }
        .cascader-option {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 8px 12px;
          cursor: pointer;
        }
        .cascader-option:hover {
          background-color: #f4f4f4;
        }
        .cascader-option.selected {
          background-color: #e0e0e0;
        }
        .cascader-selection {
          margin-top: 16px;
        }
        .cascader-selection h3 {
          font-size: 18px;
          font-weight: bold;
          margin-bottom: 8px;
        }
      `}</style>
        </div>
    )
}