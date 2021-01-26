import * as React from 'react';
import { Panel, PanelType } from 'office-ui-fabric-react/lib/Panel';
import { Stack } from 'office-ui-fabric-react/lib/Stack';
import { Image } from 'office-ui-fabric-react/lib/Image';
import { Icon } from 'office-ui-fabric-react/lib/Icon';
// import { Persona, PersonaPresence } from 'office-ui-fabric-react/lib/Persona';
import ListFromObject from './ListFromObject';
import StoreData from './StoreData';
import Users from './Users';
import PersonaCard from './PersonaCard';
import TinyLineChartOne from './TinyLineChartOne';
import * as colors from './colors';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
} from 'recharts';

const mcc = 'color:aqua;';

export interface InfoPanelProps {
    showPanel: boolean;
    handler: any;
    data: any;
    theme?: any;
}

export interface InfoPanelState {
    // showPanel: boolean;
    location_details: any;
    store_details: any;
    quake_details: any;
    country_details: any;
}

class InfoPanel extends React.Component<InfoPanelProps, InfoPanelState> {
    constructor(props: InfoPanelProps) {
        super(props);
        this.state = {
            location_details: null,
            store_details: null,
            quake_details: null,
            country_details: null
        };
    }

    public componentDidMount() {
        console.log('%c : InfoPanel -> componentDidMount -> this.props', mcc, this.props);

        const { data } = this.props;

        if (!data.properties && data.coordinates) {

            this.get_location(data.coordinates)

                .then((location_details: any) => {

                    const store_details = StoreData.filter(s => s.City == location_details.adminArea5)[0];

                    this.setState({
                        location_details: location_details,
                        store_details: store_details
                    });

                })
        }

        else if (data.country) {
            this.setState({ country_details: data });
        }

        else/*  if (data.type == 'earthquake') */ {
            this.setState({ quake_details: data });
        }
    }

    public componentDidUpdate(prevProps: InfoPanelProps, prevState: InfoPanelState) {
        console.log('%c : InfoPanel -> componentDidUpdate -> this.state', mcc, this.state);
    }

    public get_location = (coords) => new Promise(resolve => {
        console.log('%c : InfoPanel -> coords', mcc, coords);
        const coords_swap = coords[1] + ',' + coords[0];
        const url_location = 'https://open.mapquestapi.com/geocoding/v1/reverse?key=8v66cpTH8hhGKApG1nz34zpgABEG9yAE&location=' + coords_swap;
        fetch(url_location)
            .then(res => res.json())
            .then(
                (result) => {
                    console.log('%c : InfoPanel -> componentDidMount -> result', mcc, result);
                    resolve(result.results[0].locations[0]);
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    console.log('%c : InfoPanel -> componentDidMount -> error', mcc, error);
                    resolve(error);
                }
            );
    })



    public render() {

        const { data, theme } = this.props;

        const bg_color = theme && theme.mode == 'dark' ? colors.dark_gray : 'unset';
        const color_1 = theme && theme.mode == 'dark' ? colors.orange : 'unset';



        const headerText = this.props.data.properties ? this.props.data.properties.NAME
            : this.state.location_details ? this.state.location_details.adminArea5
                : this.state.quake_details ? this.state.quake_details.place
                    : this.state.country_details ? this.state.country_details.country
                        : null;







        const country_colors = {
            r: '#f23c06',
            y: '#fef764',
            o: '#f89c12',
            g: '#9cb806',
        };
        const country_locations = [
            {
                name: 'Anchorage',
                score: 63,
                color: country_colors.o
            },
            {
                name: 'Hot Springs',
                score: 47,
                color: country_colors.r
            },
            {
                name: 'Portland',
                score: 82,
                color: country_colors.g
            },
            {
                name: 'New York',
                score: 69,
                color: country_colors.o
            },
        ];
        const info_country = this.state.country_details ?
            <div className='panel-section-wrap country-score-wrap'>
                <h2>Locations in this country</h2>
                {country_locations.map(l => {
                    return (
                        <Stack className='chart-wrap-outer' style={{ color: l.color }} horizontal>
                            <div className='chart-label'>{l.name}</div>
                            <div className='chart-wrap-inner'>
                                {/* <span style={{ lineHeight: '40px' }}> */}
                                    <BarChart
                                        width={250}
                                        height={20}
                                        data={[{ Score: l.score }]}
                                        barSize={20}
                                        layout='vertical'
                                    >
                                        <YAxis
                                            dataKey='Score'
                                            type='number'
                                            hide
                                        />
                                        <XAxis
                                            type='number'
                                            domain={[0, 100]}
                                            hide
                                        />
                                        {/* <Tooltip /> */}

                                        <Bar
                                            dataKey='Score'
                                            fill={l.color}
                                            // animationBegin={1500}
                                            // animationDuration={2500}
                                            label={{ position: 'right', fill: l.color, paddingRight: 10 }}
                                        />
                                    </BarChart>
                                {/* </span> */}
                            </div>
                        </Stack>
                    );
                })}
            </div>
            : <></>;








        const info_quake = this.state.quake_details ?
            <div className='panel-section-wrap quake-details' style={{ marginTop: 24 }}>
                <div style={{ fontSize: 30, marginLeft: 42, marginBottom: 24, color: '#bbb' }}>Magnitude {this.state.quake_details.mag}</div>
                <ListFromObject
                    the_object={this.state.quake_details}
                    icon_color={colors.mint}
                    icon_name='BullseyeTarget'
                    keys_ignore={['place', 'title', 'type', 'mag']}
                />
            </div>
            : <></>;

        const info_properties = data.properties ?
            <div className='panel-section-wrap'>
                <ListFromObject
                    the_object={data.properties}
                    icon_color={colors.orange}
                    icon_name='FlameSolid'
                />
            </div>
            : <></>;

        const info_store = this.state.store_details ?
            <div className='panel-section-wrap'>
                <h2>Store</h2>
                <Stack horizontal>
                    <div className='panel-store-wrap'>
                        <ListFromObject
                            the_object={this.state.store_details}
                            icon_color={colors.orange}
                            keys_ignore={['City', 'manager_id', 'img_url', 'Last Week Sales', 'Last Week Guest Count']}
                        />
                    </div>
                    <div className='panel-image-wrap'>
                        <Image
                            src={this.state.store_details.img_url}
                            shouldFadeIn
                            // styles={{}}
                            width={200}
                        />
                    </div>
                </Stack>
            </div>
            : <></>;

        const info_mgr = this.state.store_details ?
            <div className='panel-section-wrap mgr'>
                <h2>Manager</h2>
                <div className='panel-mgr-wrap'>
                    <PersonaCard person={Users.filter(u => u.id == this.state.store_details.manager_id)[0]} />
                </div>
            </div>
            : <></>;

        const info_perform = this.state.store_details ?
            <div className='panel-section-wrap'>
                <Stack horizontal>
                    <div>
                        <h2>Performance</h2>
                        <div className='panel-store-wrap'>
                            <ListFromObject
                                the_object={this.state.store_details}
                                icon_color={colors.orange}
                                keys_ignore={['City', 'manager_id', 'img_url', 'Address', 'Owner/Parent']}
                            />
                        </div>
                    </div>
                    <div className='panel-chart-wrap'>
                        <TinyLineChartOne city={headerText} />
                    </div>
                </Stack>
            </div>
            : <></>;

        const info_location = this.state.location_details ?
            <div className='panel-section-wrap'>
                <h2>Location Details</h2>
                <ListFromObject
                    the_object={this.state.location_details}
                    keys_ignore={['latLng', 'displayLatLng', 'mapUrl', 'linkId']}
                    icon_color={colors.orange}
                    columns={2}
                    column_padding={170}
                />
            </div>
            : <></>;



        return (
            <Panel
                isOpen={this.props.showPanel}
                headerText={headerText}
                closeButtonAriaLabel='Close'
                isLightDismiss={true}
                onDismiss={() => {
                    this.props.handler();
                }}
                type={PanelType.custom}
                customWidth='800px'
                className={theme && theme.mode ? theme.mode : 'light'}
                styles={{
                    // root: { backgroundColor: bg_color },
                    // closeButton: { color: color_1 },
                    // main: {
                    //     backgroundColor: bg_color,
                    // },
                    content: {
                        paddingRight: '0!important',
                        paddingLeft: '0!important'
                    },
                    // headerText: {
                    //     color: color_1
                    // }
                }}
            >
                {info_properties}
                {this.state.store_details && info_store}
                {this.state.store_details && info_mgr}
                {this.state.store_details && info_perform}
                {this.state.location_details && info_location}
                {/* {this.state.quake_details && h2_quake} */}
                {this.state.quake_details && info_quake}
                {this.state.country_details && info_country}
            </Panel>
        );
    }
}


export default InfoPanel;