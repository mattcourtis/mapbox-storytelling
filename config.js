var config = {
    style: 'mapbox://styles/laurencedhonau/clx4vkr7601qa01qxamzbcjts', 
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
    footer: '',
    chapters: [
        {
            id: 'first-layer',
            alignment: 'left',
            hidden: false,
            title: 'Global',
            image: 'images/platform-global-mapview.png',
            description: 'Treefera is a global platform, offering coverage of project monitoring across all continents.',
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
            title: 'Let\'s zoom on a forest region in North America - CAR 1385',
            image: 'images/platform-example.png',
            description: '',
            location: {
                center: [-121.5, 40.149],
                zoom: 9.5,
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
            title: 'We can monitor the forest change over time.',
            image: 'images/post_forest.png',
            description: '',
            location: {
                center: [-121.45, 40.149],
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
            description: 'We can monitor and detect harvest activities.',
            location: {
                center: [-121.45, 40.149],
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
            id: 'growth-layer',
            alignment: 'right',
            hidden: false,
            title: 'Regrowth Detection',
            image: '',
            description: 'Forest growth can be detected and displayed on the platform.',
            location: {
                center: [-121.45, 40.149],
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
            title: 'Fire Detection',
            image: 'images/fire-image.png',
            description: 'Dixie fire incident in 2021 caused significant damage to the project area.',
            location: {
                center: [-121.45, 40.149],
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
            title: '2020 - 2022 Forest Loss',
            image: '',
            description: 'Loss from the fire incident is visible on the platform.',
            location: {
                center: [-121.45, 40.149],
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
