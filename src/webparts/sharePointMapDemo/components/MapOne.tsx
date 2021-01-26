import * as React from 'react';
import {
    Annotations,
    Annotation,
    ComposableMap,
    Geographies,
    Geography,
    Markers,
    Marker,
    ZoomableGroup, /* projectionConfig */
} from 'react-simple-maps';
import { geoAlbersUsa, geoMercator } from 'd3-geo';


const mcc = 'color:lime;';

const projections = [
    {
        name: 'geoAlbersUsa',
        projection: { geoAlbersUsa }
    },
    {
        name: 'geoMercator',
        projection: { geoMercator }
    }
]


export interface MapOneProps {
    geoUrl: string;
    coords_center: any;
    data_markers: any;
    projection: string;
    // projection_scale: number;
    projectionConfig: any;
    handler: any;
    map_style?: any;
    height?: number;
    width?: number;
}

// export interface MapOneState {}




class MapOne extends React.Component<MapOneProps, {}> {
    constructor(props: MapOneProps) {
        super(props);
        this.state = {};
        // this.props.handler.bind(this);
        this.handleClick_geography = this.handleClick_geography.bind(this);
        this.handleClick_marker = this.handleClick_marker.bind(this);
    }

    public handleClick_geography(geography, evt) {
        // console.log('%c : MapOne -> handleClick_geography -> Geography data: ', mcc, geography);
        // console.log('%c : MapOne -> handleClick_geography -> evt', mcc, evt);
        this.props.handler(geography);
    }

    public handleClick_marker(marker, evt) {
        // console.log('%c : MapOne -> handleClick_marker -> Marker data: ', mcc, marker);
        // console.log('%c : MapOne -> handleClick_marker -> evt', mcc, evt);
        this.props.handler(marker);
    }

    public render() {

        const { geoUrl, coords_center, data_markers, /* projection, projection_scale,   */projectionConfig } = this.props;
        console.log('%c : MapOne -> render -> this.props', mcc, this.props);

        const map_style = this.props.map_style ? this.props.map_style
            : {
                default: { fill: '#555' },
                hover: { fill: '#999' },
                pressed: { fill: '#000' },
            };

        const height = this.props.height ? this.props.height : 600;
        const width = this.props.width ? this.props.width : 800;

        return (
            <div>
                <ComposableMap
                    projectionConfig={projectionConfig}
                    height={height}
                    width={width}
                >
                    <ZoomableGroup
                        center={coords_center}
                    >
                        <Geographies geography={geoUrl}>
                            {(geographies, projection) => geographies.map(geography => (
                                <Geography
                                    key={geography.id}
                                    geography={geography}
                                    projection={projection}
                                    // projection={projection}
                                    style={map_style}
                                    onClick={this.handleClick_geography}

                                // width={1200}
                                // height={800}
                                />
                            ))}
                        </Geographies>
                        <Markers>
                            {data_markers.map(m => (
                                <Marker
                                    key={m.label.replace(/ /g, '-')}
                                    marker={{ coordinates: m.coords }}
                                    name={m.label}
                                    onClick={this.handleClick_marker}
                                >
                                    {m.marker_shape == 'circle' || !m.marker_shape &&
                                        <circle
                                            r={m.marker_size || 12}
                                            fill={m.marker_color}
                                        />
                                    }
                                    {m.marker_shape == 'pin' &&
                                        <g
                                            fill={m.marker_color}
                                            // fill='none'
                                            stroke={m.marker_color}
                                            strokeWidth='2'
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                            transform='translate(-12, -24)'
                                            cursor='pointer'
                                        >
                                            <path d='M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z' />
                                            <circle cx='12' cy='10' r='4' fill='#333' />
                                        </g>
                                    }
                                </Marker>
                            ))}
                        </Markers>
                        <Annotations>
                            {data_markers.map(a => (
                                <Annotation
                                    dx={a.dx}
                                    dy={a.dy}
                                    subject={a.coords}
                                    strokeWidth={1}
                                    stroke={a.label_line_stroke}
                                    onClick={this.handleClick_marker}
                                >
                                    <text
                                        fill={a.label_fill}
                                        stroke={a.label_stroke}
                                    >
                                        {a.label}
                                    </text>
                                </Annotation>
                            ))}
                        </Annotations>
                    </ZoomableGroup>
                </ComposableMap>
            </div>

        );
    }
}

export default MapOne;