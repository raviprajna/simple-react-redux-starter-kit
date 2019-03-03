import React from "react";
import { Text } from 'rebass';

export default function CustomError(props){
    return(
        <Text color="red" >
         {props.error ? props.error.message : "Something went wrong" }
        </Text>
    )
}