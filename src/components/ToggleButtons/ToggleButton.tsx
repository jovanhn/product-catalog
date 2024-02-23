import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ListIcon from '@mui/icons-material/List';
import GridViewIcon from '@mui/icons-material/GridView';
import React from "react";

interface ToggleButtonProps {
  layout: string|null,
  onLayoutChange: (newAlignment:string)=>void
}

export default function ToggleButtons({layout,onLayoutChange}:ToggleButtonProps) {

    const handleLayoutChange = (event: React.MouseEvent<HTMLElement, MouseEvent>, newAlignment: string,) => {
        console.log(event.type);
        onLayoutChange(newAlignment);
      };

  return (
    <div>
    <ToggleButtonGroup
      value={layout}
      exclusive
      onChange={handleLayoutChange}
      aria-label="layout view"
    >
      <ToggleButton value="table" aria-label="table view">
        <ListIcon />
      </ToggleButton>
      <ToggleButton value="grid" aria-label="grid view">
        <GridViewIcon />
      </ToggleButton>
    </ToggleButtonGroup>
    </div>
  );
}