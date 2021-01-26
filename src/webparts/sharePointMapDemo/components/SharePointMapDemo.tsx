import * as React from 'react';
// import styles from './SharePointMapDemo.module.scss';
import { ISharePointMapDemoProps } from './ISharePointMapDemoProps';
import MapOne from './MapOne';
import InfoPanel from './InfoPanel';
import './temp.css';
import * as colors from './colors';

const mcc = 'color:orange;';

interface SharePointMapDemoState {
    panel_data: any;
    quakes: any;
    markers: any;
}



export default class SharePointMapDemo extends React.Component<ISharePointMapDemoProps, SharePointMapDemoState> {

    constructor(props: ISharePointMapDemoProps) {
        super(props);
        this.state = {
            panel_data: null,
            quakes: null,
            markers: null
        }
        this.handler_map = this.handler_map.bind(this);
        this.handler_panel = this.handler_panel.bind(this);
    }

    public componentDidMount() {
        console.clear();

        this.get_data_quakes().then(quakes => {
            console.log('%c : SharePointMapDemo -> componentDidMount -> quakes', mcc, quakes);
            this.make_markers_quakes(quakes['features']).then(markers => {
                console.log('%c : SharePointMapDemo -> componentDidMount -> markers', mcc, markers);
                this.setState({
                    quakes: quakes,
                    markers: markers
                });
            })
        });
    }

    public handler_map(data) {
        console.log('%c : SharePointMapDemo -> handler_map -> data', mcc, data);
        if (data.coordinates) {

            const my_quake = this.state.quakes.features
                .filter(q => q.geometry.coordinates[0].toFixed(2) === data.coordinates[0].toFixed(2) && q.geometry.coordinates[1].toFixed(2) === data.coordinates[1].toFixed(2))[0];

            console.log('%c : SharePointMapDemo -> handler_map -> my_quake', mcc, my_quake);
            this.setState({ panel_data: my_quake.properties });
        }
        else if (data.properties) {
            const { properties } = data;
            console.log('hey you clicked a geo :)');
            const panel_data_map1_world = {
                country: properties.NAME
            }
            this.setState({ panel_data: panel_data_map1_world })

        }
    }

    public handler_panel() {
        this.setState({ panel_data: null });
    }

    public get_data_quakes = () => new Promise(resolve => {
        const url = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_day.geojson';
        // const url = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_month.geojson';

        fetch(url)
            .then(res => res.json())
            .then(result => {
                console.log('%c : SharePointMapDemo -> result', mcc, result);
                resolve(result);
            },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    console.log('%c : DarkSkyOne -> componentDidMount -> error', mcc, error);
                    resolve(error);
                }
            );
    })

    public make_markers_quakes = (data) => new Promise(resolve => {
        const markers = data.map(d => {
            return {
                label: '',
                // label: d.properties.title,
                label_fill: colors.mint,
                label_stroke: 'transparent',
                label_line_stroke: 'transparent',
                marker_color: colors.mint,
                marker_size: 6,
                marker_shape: 'pin',
                // coords: [-118.2436849, 34.0522342],
                coords: [d.geometry.coordinates[0], d.geometry.coordinates[1]],
                dx: 15,
                dy: -25,
            }
        });
        resolve(markers);
    })

    public render(): React.ReactElement<ISharePointMapDemoProps> {

        const colors = {
            r: '#f23c06',
            y: '#fef764',
            o: '#f89c12',
            g: '#9cb806',
        };

        const map1_world =
            <div className='map-wrap'>
                <MapOne
                    handler={this.handler_map}
                    geoUrl='https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json'
                    coords_center={[-97.330055, 37.687176]}
                    projection='geoAlbersUsa'
                    // projection_scale={400}
                    projectionConfig={{
                        scale: 400,
                    }}

                    data_markers={[
                        {
                            label: 'Portland',
                            label_fill: '#333',
                            label_stroke: 'transparent',
                            label_line_stroke: colors.g,
                            marker_color: colors.g,
                            coords: [-122.658722, 45.512230],
                            dx: -30,
                            dy: 30,
                        },
                        {
                            label: 'New York',
                            label_fill: '#333',
                            label_stroke: 'transparent',
                            label_line_stroke: colors.o,
                            marker_color: colors.o,
                            coords: [-74.005974, 40.712776],
                            dx: 30,
                            dy: 30
                        },
                        {
                            label: 'Hot Springs',
                            label_fill: '#eee',
                            label_stroke: 'transparent',
                            label_line_stroke: colors.r,
                            marker_color: colors.r,
                            coords: [-93.055656, 34.502781],
                            dx: -30,
                            dy: -30
                        },
                        {
                            label: 'Anchorage',
                            label_fill: '#eee',
                            label_stroke: 'transparent',
                            label_line_stroke: colors.o,
                            marker_color: colors.o,
                            coords: [-149.772714, 61.315367],
                            dx: 30,
                            dy: -30
                        },
                        {
                            label: 'Calgary',
                            label_fill: '#eee',
                            label_stroke: 'transparent',
                            label_line_stroke: colors.g,
                            marker_color: colors.g,
                            coords: [-114.061748, 51.037471],
                            dx: 30,
                            dy: -30
                        },
                        {
                            label: 'Montreal',
                            label_fill: '#eee',
                            label_stroke: 'transparent',
                            label_line_stroke: colors.o,
                            marker_color: colors.o,
                            coords: [-73.574441, 45.454012],
                            dx: -30,
                            dy: -30
                        },
                        {
                            label: 'Mexico City',
                            label_fill: '#333',
                            label_stroke: 'transparent',
                            label_line_stroke: colors.r,
                            marker_color: colors.r,
                            coords: [-99.126455, 19.397804],
                            dx: -30,
                            dy: 30
                        },
                        {
                            label: 'Caracas',
                            label_fill: '#333',
                            label_stroke: 'transparent',
                            label_line_stroke: colors.o,
                            marker_color: colors.o,
                            coords: [-66.897578, 10.487290],
                            dx: -30,
                            dy: -30
                        },
                        {
                            label: 'Brasilia',
                            label_fill: '#eee',
                            label_stroke: 'transparent',
                            label_line_stroke: colors.g,
                            marker_color: colors.g,
                            coords: [-47.851873, -15.785854],
                            dx: -30,
                            dy: -30
                        },
                        {
                            label: 'Lisbon',
                            label_fill: '#333',
                            label_stroke: 'transparent',
                            label_line_stroke: colors.g,
                            marker_color: colors.g,
                            coords: [-9.175318, 38.726406],
                            dx: -30,
                            dy: -30
                        },
                        {
                            label: 'Dakar',
                            label_fill: '#333',
                            label_stroke: 'transparent',
                            label_line_stroke: colors.o,
                            marker_color: colors.o,
                            coords: [-17.494321, 14.718493],
                            dx: -30,
                            dy: -30
                        },
                    ]}
                />
            </div>;

        const map1_usa =
            <div className='map-wrap'>
                <MapOne
                    handler={this.handler_map}
                    geoUrl='https://raw.githubusercontent.com/deldersveld/topojson/master/countries/united-states/us-albers.json'
                    coords_center={[-97.330055, 37.687176]}
                    projection='geoAlbersUsa'
                    // projection_scale={400}
                    projectionConfig={{
                        scale: 400,
                    }}

                    data_markers={[
                        {
                            label: 'Portland',
                            label_fill: '#333',
                            label_stroke: 'transparent',
                            label_line_stroke: '#f53',
                            marker_color: '#f53',
                            coords: [-122.658722, 45.512230],
                            dx: -30,
                            dy: 30,
                        },
                        {
                            label: 'New York',
                            label_fill: '#333',
                            label_stroke: 'transparent',
                            label_line_stroke: '#f53',
                            marker_color: '#f53',
                            coords: [-74.005974, 40.712776],
                            dx: 30,
                            dy: 30
                        },
                        {
                            label: 'Hot Springs',
                            label_fill: '#eee',
                            label_stroke: 'transparent',
                            label_line_stroke: '#f53',
                            marker_color: '#f53',
                            coords: [-93.055656, 34.502781],
                            dx: -30,
                            dy: -30
                        },
                    ]}
                />
            </div>;

        const map1_oregon =
            <div className='map-wrap'>
                <MapOne
                    handler={this.handler_map}
                    geoUrl='https://raw.githubusercontent.com/deldersveld/topojson/master/countries/us-states/OR-41-oregon-counties.json'
                    coords_center={[-121.315308, 44.058174]}
                    projection='geoAlbersUsa'
                    // projection_scale={5000}
                    projectionConfig={{
                        scale: 5000,
                        rotation: [-180, 0, 0],
                    }}
                    data_markers={[
                        {
                            label: 'Portland',
                            label_fill: '#eee',
                            label_stroke: 'transparent',
                            label_line_stroke: '#34bebd',
                            marker_color: '#34bebd',
                            coords: [-122.658722, 45.512230],
                            dx: 30,
                            dy: 30,
                        },
                        {
                            label: 'Bend',
                            label_fill: '#eee',
                            label_stroke: 'transparent',
                            label_line_stroke: '#34bebd',
                            marker_color: '#34bebd',
                            coords: [-121.315308, 44.058174],
                            dx: 30,
                            dy: 30
                        },
                        {
                            label: 'Eugene',
                            label_fill: '#eee',
                            label_stroke: 'transparent',
                            label_line_stroke: '#34bebd',
                            marker_color: '#34bebd',
                            coords: [-123.0868, 44.0521],
                            dx: 30,
                            dy: 30
                        },
                    ]}
                />
            </div>;

        const map1_franch =
            <div className='map-wrap'>
                <MapOne
                    handler={this.handler_map}
                    geoUrl='https://raw.githubusercontent.com/deldersveld/topojson/master/countries/united-states/us-albers.json'
                    coords_center={[-115.048409, 34.409100]}
                    projection='geoAlbersUsa'
                    // projection_scale={400}
                    projectionConfig={{
                        scale: 3300,
                    }}
                    map_style={{
                        default: { fill: '#333', stroke: '#888' },
                        hover: { fill: '#333', stroke: '#888' },
                        pressed: { fill: '#333', stroke: '#888' },
                    }}

                    data_markers={[
                        {
                            label: 'Los Angeles',
                            label_fill: '#f53',
                            label_stroke: 'transparent',
                            label_line_stroke: 'transparent',
                            marker_color: '#f53',
                            marker_size: 6,
                            marker_shape: 'pin',
                            coords: [-118.2436849, 34.0522342],
                            dx: 15,
                            dy: -25,
                        },
                        {
                            label: 'San Diego',
                            label_fill: '#f53',
                            label_stroke: 'transparent',
                            label_line_stroke: 'transparent',
                            marker_color: '#f53',
                            marker_size: 6,
                            marker_shape: 'pin',
                            coords: [-117.1610838, 32.715738],
                            dx: 15,
                            dy: -25,
                        },
                        {
                            label: 'Bakersfield',
                            label_fill: '#f53',
                            label_stroke: 'transparent',
                            label_line_stroke: 'transparent',
                            marker_color: '#f53',
                            marker_size: 6,
                            marker_shape: 'pin',
                            coords: [-119.0187125, 35.3732921],
                            dx: 15,
                            dy: -25,
                        },
                        {
                            label: 'Long Beach',
                            label_fill: '#f53',
                            label_stroke: 'transparent',
                            label_line_stroke: 'transparent',
                            marker_color: '#f53',
                            marker_size: 6,
                            marker_shape: 'pin',
                            coords: [-118.1937395, 33.7700504],
                            dx: 15,
                            dy: -5,
                        },
                        {
                            label: 'Las Vegas',
                            label_fill: '#f53',
                            label_stroke: 'transparent',
                            label_line_stroke: 'transparent',
                            marker_color: '#f53',
                            marker_size: 6,
                            marker_shape: 'pin',
                            coords: [-115.141362, 36.169830],
                            dx: 15,
                            dy: -25,
                        },
                        {
                            label: 'Phoenix',
                            label_fill: '#f53',
                            label_stroke: 'transparent',
                            label_line_stroke: 'transparent',
                            marker_color: '#f53',
                            marker_size: 6,
                            marker_shape: 'pin',
                            coords: [-112.082510, 33.451697],
                            dx: 15,
                            dy: -25,
                        },
                    ]}
                />
            </div>;

        const map1_quakes =
            this.state.markers ?
                <div className='map-wrap'>
                    <MapOne
                        handler={this.handler_map}
                        geoUrl='https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json'
                        coords_center={[-2.491252, 29.353394]}
                        projection='geoAlbers'
                        // projection_scale={400}
                        projectionConfig={{
                            scale: 300,
                        }}
                        height={800}
                        width={1600}
                        map_style={{
                            default: { fill: '#333', stroke: '#888' },
                            hover: { fill: '#333', stroke: '#888' },
                            pressed: { fill: '#333', stroke: '#888' },
                        }}
                        data_markers={this.state.markers}
                    />
                </div>
                : <></>;

        return (
            <>
                {/* 
                {map1_franch}
                {map1_quakes}
                {map1_world}
                {map1_usa}
            */}
                {map1_oregon}
                {/* 
                 */}


                {this.state.panel_data &&
                    <InfoPanel
                        handler={this.handler_panel}
                        data={this.state.panel_data}
                        showPanel={this.state.panel_data !== null}
                        theme={{
                            mode: 'dark'
                        }}
                    />
                }


            </>
        );
    }
}
