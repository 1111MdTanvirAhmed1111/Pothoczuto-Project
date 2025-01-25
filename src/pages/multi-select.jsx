import * as React from "react"
import { X } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Command, CommandGroup, CommandItem, CommandInput } from "@/components/ui/command"

export function MultiSelect({ options, selected, onChange }) {
  const [open, setOpen] = React.useState(false)

  // Ensure selected is always an array
  const selectedValues = Array.isArray(selected) ? selected : []

  const handleUnselect = (option) => {
    onChange(selectedValues.filter((s) => s !== option))
  }

  const handleSelect = (option) => {
    if (selectedValues.includes(option)) {
      handleUnselect(option)
    } else {
      onChange([...selectedValues, option])
    }
    setOpen(false)
  }

  return (
    <Command className="overflow-visible bg-transparent">
      <div className="group border border-input px-3 py-2 text-sm ring-offset-background rounded-md focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2">
        <div className="flex gap-1 flex-wrap">
          {selectedValues.map((option) => {
            const selectedOption = options.find((o) => o.value === option)
            return (
              <Badge key={option} variant="secondary">
                {selectedOption ? selectedOption.label : option}
                <button
                  type="button"
                  className="ml-1 ring-offset-background rounded-full outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleUnselect(option)
                    }
                  }}
                  onMouseDown={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                  }}
                  onClick={() => handleUnselect(option)}
                >
                  <X className="h-3 w-3 text-muted-foreground hover:text-foreground" />
                </button>
              </Badge>
            )
          })}
          <CommandInput
            placeholder="Select categories..."
            className="ml-2 bg-transparent outline-none placeholder:text-muted-foreground flex-1"
            onFocus={() => setOpen(true)}
          />
        </div>
      </div>
      {open && (
        <div className="relative mt-2">
          <div className="absolute w-full z-10 top-0 rounded-md border bg-popover text-popover-foreground shadow-md outline-none animate-in">
            <CommandGroup className="h-full overflow-auto max-h-60">
              {options
                .filter((option) => !selectedValues.includes(option.value))
                .map((option) => (
                  <CommandItem
                    key={option.value}
                    onSelect={() => handleSelect(option.value)}
                    className="cursor-pointer"
                  >
                    {option.label}
                  </CommandItem>
                ))}
            </CommandGroup>
          </div>
        </div>
      )}
    </Command>
  )
}

