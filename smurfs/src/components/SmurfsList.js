import React, {useEffect} from "react";
import { connect } from "react-redux";
import { getSmurfs } from "../actions";

const SmurfsList = props => {
    // console.log(props);
    // props.getSmurfs();
    useEffect(() => {
        props.getSmurfs();
    },[])

    return (
        <div>
            {/* <button onClick={() => { props.getSmurfs() }}>get smurfs</button> */}
            {
                props.isFetching ?
                    <p>Loading</p> : props.smurfs.map(smurf => <p>{smurf.name}</p>) 
            }
        </div>
    )
}

export default connect(state => {
    return { isFetching: state.isFetching, smurfs: state.smurfs }
}, { getSmurfs })(SmurfsList)