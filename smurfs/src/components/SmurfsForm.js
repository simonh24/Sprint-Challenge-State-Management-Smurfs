import React, {useState} from "react";
import axios from "axios";
import { connect } from "react-redux";
import { postSmurf } from "../actions";

const SmurfsForm = props => {

  const initialSmurfValues = {
    name: "",
    age: "",
    height: "",
}

  const [smurfValues, setSmurfValues] = useState(initialSmurfValues);

  // const postNewSmurf = newSmurf => {
  //   const postSmurf = {
  //       name: newSmurf.name,
  //       age: newSmurf.age,
  //       height: newSmurf.height,
  //   }
  //   axios.post("http://localhost:3333/smurfs", postSmurf)
  //     .then(res => console.log("hi1"))
  //     .catch(res => console.log("hi2"))
  //     .finally(setSmurfValues(initialSmurfValues));
  // }

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
    <form onSubmit={handleSubmit}>
        <label htmlFor="smurfName">Name: </label>
        <input type="text" name="name" value={smurfValues.name} onChange={handleChanges} ></input>
        <label htmlFor="smurfAge">Age: </label>
        <input type="text" name="age" value={smurfValues.age} onChange={handleChanges} ></input>
        <label htmlFor="smurfHeight">Height: </label>
        <input type="text" name="height" value={smurfValues.height} onChange={handleChanges} ></input>
      <button >Add Smurf</button>
    </form>
  )
}

export default connect(state => {
  return { isFetching: state.isFetching, smurfs: state.smurfs }
}, { postSmurf })(SmurfsForm)