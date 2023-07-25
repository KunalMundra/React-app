import "../App.css";
import * as React from "react";
import { useState } from "react";
import { Checkbox } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import { TreeView, TreeItem } from "@mui/lab";

function App() {
  const [ischecked, setChecked] = useState(false);
  const [expanded, setExpanded] = React.useState([]);
  const [selected, setSelected] = React.useState([]);

  const options = [
    { id: "0", label: "Agriculture", ischecked },
    { id: "1", label: "Crops", ischecked },
    { id: "2", label: "Livestock", ischecked },
    { id: "3", label: "Fishery", ischecked },
    { id: "4", label: "Ranching", ischecked },
  ];

  const handleChange = (event) => {
    {
      options.map((options) => setChecked(!options.ischecked));
    }
  };

  const handleChange1 = (event) => {
    {
      options.map((options) => {if(options.id === event.target.id){
        setChecked(!options.ischecked)
        console.log(options.ischecked)
      }
    });
    }
  };

  const handleToggle = (event, nodeIds) => {
    setExpanded(nodeIds);
  };

  const handleSelect = (event, nodeIds) => {
    setSelected(nodeIds);
  };

  return (
    <>
      <TreeView
        aria-label=""
        sx={{
          margin: "auto",
          flexGrow: 1,
          width: "fit-content",
        }}
        expanded={expanded}
        selected={selected}
        onNodeToggle={handleToggle}
        onNodeSelect={handleSelect}
      >
        <TreeItem
          nodeId="1"
          label={
            <FormControlLabel
              label="Agriculture and Fishing"
              control={<Checkbox checked={ischecked} onChange={handleChange} />}
            />
          }
        >
          {options.map((options) => (
            <TreeItem
              key={options.id}
              nodeId="2"
              label={
                <FormControlLabel
                  sx={{ m: 1, width: 200 }}
                  label={options.label}
                  control={
                    <Checkbox
                      id={options.id}
                      checked={options.ischecked}
                      onChange={handleChange1}
                    />
                  }
                />
              }
            />
          ))}
        </TreeItem>
      </TreeView>
    </>
  );
}

export default App;
