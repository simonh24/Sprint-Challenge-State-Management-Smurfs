import React, { useState } from "react";
import { connect } from "react-redux";
import { postSmurf } from "../actions";
import { Card, TextField, Button } from "@material-ui/core";
import styled from "styled-components";

const StyledCard = styled(Card)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 60%;
  margin: 25px 20% 0;
  padding: 20px 0;
`;

const StyledTextField = styled(TextField)`
    width: 30%;
`;

const SmurfsForm = props => {

  const initialSmurfValues = {
    name: "",
    age: "",
    height: "",
  }

  const [smurfValues, setSmurfValues] = useState(initialSmurfValues);

  const handleChanges = evt => {
    const { name, value } = evt.target;
    setSmurfValues({ ...smurfValues, [name]: value });
  }

  const handleSubmit = e => {
    e.preventDefault();
    const newSmurf = {
      name: smurfValues.name.trim(),
      age: smurfValues.age.trim(),
      height: smurfValues.height.trim(),
      id: props.smurfs.length,
    }
    console.log(newSmurf)
    props.postSmurf(newSmurf);
    setSmurfValues(initialSmurfValues);
  }

  return (
    <StyledCard onSubmit={handleSubmit}>
      <StyledTextField type="text" name="name" value={smurfValues.name} onChange={handleChanges} variant="outlined" label="Name"></StyledTextField>
      <br></br>
      <StyledTextField type="text" name="age" value={smurfValues.age} onChange={handleChanges} variant="outlined" label="Age"></StyledTextField>
      <br></br>
      <StyledTextField type="text" name="height" value={smurfValues.height} onChange={handleChanges} variant="outlined" label="Height"></StyledTextField>
      <br></br>
      <Button onClick={handleSubmit} variant="contained" color="secondary">Add Smurf</Button>
    </StyledCard>
  )
}

export default connect(state => {
  return { isFetching: state.isFetching, smurfs: state.smurfs }
}, { postSmurf })(SmurfsForm)