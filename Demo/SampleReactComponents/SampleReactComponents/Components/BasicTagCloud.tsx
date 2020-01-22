import * as React from 'react';
import TagCloud from 'react-tag-cloud';

const sampleTagNames = ["Futurama", "Rick & Morty", "Simpsons", "American Dad",
    "Family Guy", "Avatar", "Final Space", "Pokemon", "Over the Garden Wall", "Gravity Falls"
]

export class BasicTagCloud extends React.Component {
    
    componentDidMount() {
        setInterval(() => {
            this.forceUpdate();
        }, 3000);
    }

    render() {
        const tagItems = sampleTagNames.map((tagInfo) =>
            <div key={tagInfo} style={{transition: "1.4s"}}>{tagInfo}</div>
        );

        return (
            <div style={{ height: '400px', width: '400px', display: 'flex' }}>
                <TagCloud style={{
                    fontFamily: 'sans-serif',
                    fontSize: 30,
                    fontWeight: 'bold',
                    fontStyle: 'italic',
                    color: '#98FB98',
                    padding: 5,
                    //@ts-ignore
                    flex: 1
                }}>
                    {tagItems}
                </TagCloud>
            </div>
        );
    }
}