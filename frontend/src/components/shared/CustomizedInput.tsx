import { Link } from "react-router-dom";
import { TextField } from "@mui/material";

type Props = {
    name: string;
    type: string;
    label: string;
}

const CustomizedInput = (props: Props) => {
    return (
        <TextField 
            style={{ marginBottom: "15px"}}
            InputLabelProps={{style: { color: "white" }}} 
            name={props.name} 
            label={props.label} 
            type={props.type}
            InputProps={{ style: { width: "400px", borderRadius: 10, fontSize: 20, color: "white" }}} 
        />
    )
}

export default CustomizedInput;