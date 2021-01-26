import * as React from 'react';
import { Persona, /* PersonaPresence,  */PersonaSize, IPersonaProps } from 'office-ui-fabric-react/lib/Persona';
import { Icon } from 'office-ui-fabric-react/lib/Icon';



export interface PersonaCardProps {
    person: any;
}

// export interface PersonaCardState {}

class PersonaCard extends React.Component<PersonaCardProps, {}> {
    constructor(props: PersonaCardProps) {
        super(props);
        // this.state = { :  };
    }

    public _onRenderSecondaryText(props: IPersonaProps): JSX.Element {
        return (
            <div>
                <Icon iconName='Mail' styles={{ root: { marginRight: 5 } }} />
                {props.secondaryText}
            </div>
        );
    }

    public _onRenderTertiaryText(props: IPersonaProps): JSX.Element {
        return (
            <div>
                <Icon iconName='Phone' styles={{ root: { marginRight: 5 } }} />
                {props.tertiaryText}
            </div>
        );
    }

    public render() {
        const me = this.props.person;
        return (
            <Persona
                imageUrl={me.picture.medium}
                text={me.nameObj.first + ' ' + me.nameObj.last}
                secondaryText={me.email}
                tertiaryText={'work: ' + me.phone + ' - cell: ' + me.cell}
                presence={parseInt(me.presence)}
                size={PersonaSize.size72}
                onRenderSecondaryText={this._onRenderSecondaryText}
                onRenderTertiaryText={this._onRenderTertiaryText}
            />
        );
    }
}

export default PersonaCard;