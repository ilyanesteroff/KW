import React from 'react'

let factInfo = [
    {
        url: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Hemingway_House_Key_West_FL1.jpg",
        factType: 'Historical fact',
        content: 'Author Hemingway lived in Key West, and there is an annual Hemingway look-alike contest in his honor',
        color: '#0e0880d5',
        href: 'https://en.wikipedia.org/wiki/Ernest_Hemingway_House',
        imgDir: 'left',
        place: 'heminguay',
        topic: `Hemingway's house`,
        additionalInfo: 'The Ernest Hemingway House was the residence of author Ernest Hemingway in Key West, Florida, United States. It is at 907 Whitehead Street, across from the Key West Lighthouse, close to the southern coast of the island. On November 24, 1968, it was designated a U.S. National Historic Landmark. The house was one of the first on the island to be fitted with indoor plumbing and the first on the island to have an upstairs bathroom with running water, fed from a rain cistern on the roof.',
        images: [
            'https://upload.wikimedia.org/wikipedia/commons/e/e4/Hemingway_House_tourists.jpg',
            'https://upload.wikimedia.org/wikipedia/commons/2/28/Hemingway%27s_pool_2019.jpg',
            'https://upload.wikimedia.org/wikipedia/commons/5/55/Hemingway%27s_den_2019.jpg',
            'https://upload.wikimedia.org/wikipedia/commons/f/fc/Hemingway%27s_writing_desk_in_Key_West.jpg',
            'https://upload.wikimedia.org/wikipedia/commons/2/20/HemingwayHouseFront.jpg',
            'https://upload.wikimedia.org/wikipedia/commons/7/7d/HemingwayGarden.jpg'
        ],
        descriptions: [
            <h2>Tourists in Hemingway house</h2>,
            <h2>Hemingway's pool</h2>,
            <h2>Host room</h2>,
            <h2>Hemingway's desktop</h2>,
            <h2>The front of the house</h2>,
            <h2>Hemingway's garden</h2>
        ]
    },
    {
        url: 'https://upload.wikimedia.org/wikipedia/commons/d/dc/Southernmost_Point_an_der_S%C3%BCdk%C3%BCste_von_Key_West.jpg',
        factType: 'Geographical fact',
        content: 'This is the southernmost point of Key West',
        color: '#0e0660d5',
        href: 'https://en.wikipedia.org/wiki/Southernmost_point_buoy',
        imgDir: 'right',
        place: 'buoy',
        topic: `The southernmost point`,
        additionalInfo: 'The Southernmost Point Buoy is an anchored concrete buoy in Key West, Florida, marking the southernmost point in the continental United States, the lowest latitude land of contiguous North American States. It is 18 feet above sea level. The large painted buoy was established as a tourist attraction in 1983 by the city at the corner of South Street and Whitehead Street. It is one of the most visited and photographed attractions in the United States. The southernmost point was originally marked with a small sign, before the City of Key West erected the now famous concrete buoy in 1983. The concrete buoy has overall withstood several hurricanes and is a gathering place for photographs and tourists. The paint job was damaged by Hurricane Irma in September 2017, but it was refurbished later that year by the original artist supported by the City of Key West which values the landmark as a tourist attraction. Cuba is roughly 90 miles south of this point in Key West, although this was not originally on the marker, but rather on a smaller sign next to marker.',
        images: [
            'https://upload.wikimedia.org/wikipedia/commons/1/18/The_Southernmost_Point%2C_90_miles_to_Cuba-_Key_West%2C_Florida_%288379456437%29.jpg',
            'https://upload.wikimedia.org/wikipedia/commons/9/99/SOUVENIR_SEASHELLS_FOR_SALE_AT_THE_SOUTHERNMOST_POINT_OF_THE_UNITED_STATES_-_NARA_-_548545.jpg'
        ], 
        descriptions: [
             <h2>The bouy</h2>,
             <h2>The Southernmost Buoy</h2>
        ]
    },
    {
        url: 'https://upload.wikimedia.org/wikipedia/commons/7/74/Southernmosthouse.jpg',
        factType: 'Geographical fact',
        content: 'The Southernmost House is a historic mansion in the U.S. city of Key West',
        color: '#0e0550d5',
        href: 'https://en.wikipedia.org/wiki/Southernmost_House',
        imgDir: 'left',
        place: 'mansion',
        topic: `The southernmost Mansion`,
        additionalInfo: `The Southernmost House is a historic mansion in the U.S. city of Key West, in Monroe County, Florida. Five U.S. Presidents have stayed there. The house is located in the Upper Duval district and has been converted into a bed and breakfast. Judge Jeptha Vining Harris built the mansion that is now called the Southernmost House in 1897 for $250,000.[1] His wife was the youngest daughter of William Curry, one of Florida’s first millionaires. The Curry family were builders with eight mansions in the Historic District of Key West. The Harris family were prominent citizens at the turn of the century and had invested in Henry Flagler's Overseas Railroad to Key West, often entertaining him at the mansion during the railroad's construction.`,
        images: [
            'https://upload.wikimedia.org/wikipedia/commons/2/2a/Southernmost_House_from_Ocean.jpg',
            'https://upload.wikimedia.org/wikipedia/commons/7/74/Southernmosthouse.jpg'
        ],
        descriptions: [
            <h2>View from the ocean</h2>,
            <h2>View from the street</h2>
        ]
    },
    {
        url: 'https://upload.wikimedia.org/wikipedia/commons/4/46/Truman_Little_White_House%2C_Key_West%2C_FL%2C_US_%2805%29.jpg', 
        factType: 'Historical fact',
        content: 'The Harry S Truman Little White House in Key West, Florida was the winter White House for President Harry S Truman for 175 days during 11 visits.',
        color: '#0e0440d5',
        href: 'https://en.wikipedia.org/wiki/Harry_S._Truman_Little_White_House',
        imgDir: 'right',
        place: 'white_house',
        topic: 'Harry S. Truman Little White House',
        additionalInfo: `The Harry S Truman Little White House in Key West, Florida was the winter White House for President Harry S Truman for 175 days during 11 visits. The house is located in the Truman Annex neighborhood of Old Town, Key West. The house was originally waterfront when it was built in 1890 as the first officer's quarters on the submarine base naval station. The house was designed in 1889 by Scott, McDermott & Higgs, a local architectural firm. The wooden duplex contained Quarters A for the base commandant and Quarters B for the paymaster.`,
        images: [
            'https://upload.wikimedia.org/wikipedia/commons/d/d8/Truman-key-1950.gif',
            'https://upload.wikimedia.org/wikipedia/commons/4/44/USA_Florida_location_map.svg'
        ],
        descriptions: [
            <h2>In 1950</h2>,
            <h2>Florida on map</h2>
        ]
    }
]

let twitterTags = ['COVID19', 'KeyWest', 'Florida']

let navbarItems = ['Home', 'About', 'Location', 'History']

export { factInfo, twitterTags, navbarItems }