import * as React from 'react';
import { BasicInput } from './Components/BasicInput';

import { initializeIcons } from 'office-ui-fabric-react/lib/Icons';
import { BasicTagPicker } from './Components/BasicTagPicker';
import { BasicNav } from './Components/BasicNav';

initializeIcons();

export const App = () => (
    <div style={{width: '500px', padding: '50px'}}>
        <BasicInput iconName="EditMail"/>
        <BasicTagPicker />
        <BasicNav />
    </div>
);