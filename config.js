var config = {
    style: 'mapbox://styles/laurencedhonau/clxbozofm00rj01qqenp748jg', 
    accessToken: 'pk.eyJ1IjoibGF1cmVuY2VkaG9uYXUiLCJhIjoiY2x4NHNlYWpjMTJ2eTJpcXh6NGc2Z3FmYSJ9.XBA6JXQO9CedB6W3tRjHWg',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'light',
    use3dTerrain: true, //set true for enabling 3D maps.
    auto: false,
    title: 'Treefera',
    //subtitle: '',
    //byline: '',
    footer: 'End of Demo',
    chapters: [
        {
            id: 'first-layer',
            alignment: 'left',
            hidden: false,
            title: 'Global Satellite and AI-powered nature-based monitoring platform',
            image: 'images/platform-global-mapview.png',
            description: 'Treefera already has over 500 projects on the platform that are located all over the world.',
            location: {
                center: [0, 49],
                zoom: 2.5,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'second-layer',
            alignment: 'right',
            hidden: false,
            title: 'Let\'s investigate a project currently on the Treefera Platform: CAR 1385 in California.',
            image: 'images/platform-example.png',
            description: '',
            location: {
                center: [-121.5, 40.14],
                zoom: 9.,
                pitch: 12,
                bearing: 12,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                speed: 1.1, // make the flying slow
                curve: 1.1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                     layer: '1385-boundary',
                     opacity: 0.9,
                     duration: 1000
                }
            ],
            onChapterExit: [
                {
                    layer: '1385-boundary',
                    opacity: 0
                }
            ]
        },
        {
            id: 'third-layer',
            alignment: 'right',
            hidden: false,
            title: 'This land is commercial forestry, with the platform we can detect forest change over time (in this case since 2017)',
            image: 'images/post_forest.png',
            description: '',
            location: {
                center: [-121.45, 40.14],
                zoom: 11,
                pitch: 0,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting to pan.
                speed: 0.8, // make the flying slow
                curve: 0.8, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                     layer: 'forest-change-2017to2023',
                     opacity: 1,
                     duration: 50
                }
            ],
            onChapterExit: [
                {
                    layer: 'forest-change-2017to2023',
                    opacity: 0
                }
            ]
        },
        {
            id: 'forestloss-layer',
            alignment: 'right',
            hidden: false,
            title: 'Harvest Detection',
            image: '',
            description: 'Depicted in black we can see areas that have been harvested since 2017',
            location: {
                center: [-121.45, 40.14],
                zoom: 11,
                pitch: 0,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting to pan.
                speed: 1.1, // make the flying slow
                curve: 1.1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: '1385-boundary',
                    opacity: 0.8,
                    duration: 50
                },
                {
                     layer: 'forest-harvest-2019-2020',
                     opacity: 1,
                     duration: 50
                }
            ],
            onChapterExit: [
                {
                    layer: '1385-boundary',
                    opacity: 0.8
                },
                {
                    layer: 'forest-harvest-2019-2020',
                    opacity: 0
                }
            ]
        },
        {
            id: 'forestloss-layer',
            alignment: 'right',
            hidden: false,
            title: 'Harvest Detection',
            image: '',
            description: 'Removing our harvest map overlay, these areas are visible via satellite imagery.',
            location: {
                center: [-121.45, 40.14],
                zoom: 11,
                pitch: 0,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting to pan.
                speed: 1.1, // make the flying slow
                curve: 1.1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: '1385-boundary',
                    opacity: 0.8,
                    duration: 50
                }
            ],
            onChapterExit: [
                {
                    layer: '1385-boundary',
                    opacity: 0.8
                }
            ]
        },
        {
            id: 'growth-layer',
            alignment: 'right',
            hidden: false,
            title: 'Regrowth Detection',
            image: '',
            description: 'Depicted in white are regrowth areas where trees have been replanted since harvest.',
            location: {
                center: [-121.45, 40.14],
                zoom: 11,
                pitch: 0,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting to pan.
                speed: 1.1, // make the flying slow
                curve: 1.1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: '1385-boundary',
                    opacity: 0.8,
                    duration: 50
                },
                {
                     layer: 'forest-growth',
                     opacity: 1,
                     duration: 50
                }
            ],
            onChapterExit: [
                {
                    layer: '1385-boundary',
                    opacity: 0.9
                },
                {
                    layer: 'forest-growth',
                    opacity: 0
                }
            ]
        },
        {
            id: 'fire-layer',
            alignment: 'right',
            hidden: false,
            title: 'Some projects have large reversal events such as fires.',
            image: 'images/fire-image.png',
            description: 'This was the case for this project in 2021 where a large fire (Dixie Incident) burnt close to 1,000,000 acres of land and habitations in North California.',
            location: {
                center: [-121.45, 40.14],
                zoom: 11,
                pitch: 0,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting to pan.
                speed: 1.1, // make the flying slow
                curve: 1.1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: '1385-boundary',
                    opacity: 1,
                    duration: 1000
                },
                {
                     layer: 'fire-boundary',
                     opacity: 0.75,
                     duration: 1000
                }
            ],
            onChapterExit: [
                {
                    layer: '1385-boundary',
                    opacity: 0.9
                },
                {
                    layer: 'fire-boundary',
                    opacity: 0
                }
            ]
        },
        {
            id: 'forest-loss-layer',
            alignment: 'right',
            hidden: false,
            title: 'Forest loss due to fire can be calculated on the platform and is distinguishable from human deforestation events such as harvests.',
            image: '',
            description: '',
            location: {
                center: [-121.45, 40.14],
                zoom: 11,
                pitch: 0,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting to pan.
                speed: 1.1, // make the flying slow
                curve: 1.1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: '1385-boundary',
                    opacity: 0.9,
                    duration: 1000
                },
                {
                     layer: 'forest-loss-2020-to-2022',
                     opacity: 1,
                     duration: 1000
                },
                {
                    layer: 'fire-boundary',
                    opacity: 0.3,
                    duration: 1000
               }
            ],
            onChapterExit: [
                {
                    layer: '1385-boundary',
                    opacity: 0.9
                },
                {
                    layer: 'forest-loss-2020-to-2022',
                    opacity: 0
                },
                {
                    layer: 'fire-boundary',
                    opacity: 0
               }
            ]
        }
    ]
};
