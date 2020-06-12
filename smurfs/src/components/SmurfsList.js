import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getSmurfs } from "../actions";
import { Card } from "@material-ui/core";
import styled from "styled-components";

const StyledCard = styled(Card)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 20%;
  margin: 25px 4%;
  padding: 20px 0;
`;

const StyledDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`;

const SmurfsList = props => {
    // console.log(props);
    // props.getSmurfs();
    useEffect(() => {
        props.getSmurfs();
    }, [])

    return (
        <StyledDiv>
            {
                props.isFetching ?
                    <p>Loading</p> : props.smurfs.map(smurf =>
                        <StyledCard>
                            <h2>{smurf.name}</h2>
                            <p>{smurf.age} years old</p>
                            <p>{smurf.height}</p>
                        </StyledCard>
                    )
            }
        </StyledDiv>
    )
}

export default connect(state => {
    return { isFetching: state.isFetching, smurfs: state.smurfs }
}, { getSmurfs })(SmurfsList)