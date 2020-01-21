import * as React from 'react';
import { Nav } from 'office-ui-fabric-react/lib/Nav';

export const BasicNav: React.FunctionComponent = () => 
(
    <Nav
      styles={{
        root: {
          width: 208,
          height: 350,
          boxSizing: 'border-box',
          border: '1px solid #eee',
          overflowY: 'auto'
        }
      }}
      groups={[
        {
          links: [
            {
              name: 'Home',
              url: '#',
              icon: 'Home'
            },
            {
              name: 'Learn',
              url: '#',
              icon: 'ReadingMode'
            },
            {
                name: 'Apps',
                url: '#',
                icon: 'AppIconDefault'
            },
            {
                name: 'Create',
                url: '#',
                icon: 'Add'
            },
            {
                name: 'Data',
                url: '#',
                expandAriaLabel: 'Expand Data section',
                collapseAriaLabel: 'Collapse Data section',
                icon: 'Table',
                links: [
                  {
                    name: 'Entities',
                    url: '#'
                  },
                  {
                    name: 'Option Sets',
                    url: '#'
                  }
                ],
                isExpanded: true
              }
          ]
        }
      ]}
    />
);