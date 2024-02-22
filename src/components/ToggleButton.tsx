import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ListIcon from '@mui/icons-material/List';
import GridViewIcon from '@mui/icons-material/GridView';

export default function ToggleButtons({layout,onLayoutChange}:{layout: string|null ,onLayoutChange: Function}) {

    const handleLayoutChange = (event: React.MouseEvent<HTMLElement, MouseEvent>, newAlignment: string | null,) => {
        onLayoutChange(newAlignment);
      };

  return (
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
  );
}