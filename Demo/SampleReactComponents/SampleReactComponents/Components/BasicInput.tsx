import * as React from 'react';
import {TextField} from 'office-ui-fabric-react';

interface IBasicInputProps{
    iconName: string
}

export const BasicInput = (props:IBasicInputProps) =>(
    <TextField iconProps={{iconName: props.iconName}}/>
)