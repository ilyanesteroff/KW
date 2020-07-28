import React from 'react'
import { faComment, faChartBar, faBuilding, faCompass} from '@fortawesome/free-regular-svg-icons'

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

let services = [{
    point: 'Contact us', 
    icon: faComment, 
    text: 'Contact Key West government and administration', 
    href: 'https://www.cityofkeywest-fl.gov/egov/apps/services/index.egov?view=detail;id=109'},
 {
     point: 'Agendas & Minutes', 
     icon: faChartBar, 
     text: 'Find out about upcoming events and meetings at Key West Florida', 
     href: 'http://keywest.legistar.com/Calendar.aspx'
 },
 {
     point: 'Parking Information', 
     icon: faBuilding, 
     text: 'Learn more about parking rules and pricing at Key West', 
     href: 'https://www.cityofkeywest-fl.gov/department/index.php?structureid=18'
 },
 {
     point: 'Airport', 
     icon: faCompass, 
     text: 'Find out about local airport', 
     href: '#'
 }]

let twitterTags = ['COVID19', 'KeyWest', 'Florida']

let navbarItems = ['Home', 'About', 'Location', 'History']

let about = {
    website: {
        text: [{chapter: 'Website structure', paragraph: 'This website is written on React js, it is completely responsive. As you noticed there is a lot of the same components that are rendered on different pages, for instance navbars, footer section, headlines, menu items etc. Creating this application a lot of advanced react stuff such as react hooks, fragments, portals was applied. High abstraction level of the components provides extreme reusability (that means components are applied several times for different purposes throughout the application). Application components that calls APIs or making expensive operations e.g. operations or actions, that requires a little bit more time to get done they are written as functional componets that use custom hooks which loads, retrieves information and provides a far better user experience. All of the data, that was retrieved from API calls is stored in the local storage, to be displayed instantly whenever user re-visits some pages. However information that is stored in the local storage updates hourly, this action is triggered by user visiting page one hour later.'}, {chapter: 'About developer', paragraph: 'I am Ilya Nesterow, I was working on solidifying my knowledges of react js and javascript. After reading a lot of concepts from documentations I realised, I need some practice, so I decided to create this website'}, {chapter: 'About policy', paragraph: `This website does not tend to use anyone's private data, contrary it provides only data selected from official and public sources. The aim of this web application is to narrate about some aspects, interesting facts etc of Key West, using publicly available data`}]
    },
    keyWest : {
        text: [
            {chapter: 'Key West', paragraph: 'Is an island in the Straits of Florida, within the U.S. state of Florida. Together with all or parts of the separate islands of Dredgers Key, Fleming Key, Sunset Key, and the northern part of Stock Island, it constitutes the City of Key West. The Island of Key West is about 4 miles (6 kilometers) long and 1 mile (2 km) wide, with a total land area of 4.2 square miles (11 km2). It lies at the southernmost end of U.S. Route 1, the longest north–south road in the United States. Key West is about 95 miles (153 km) north of Cuba at their closest points. It is also 130 miles (210 km) southwest of Miami by air, about 165 miles (266 km) by road, and 106 miles (171 km) north-northeast of Havana.'}, {chapter: 'The Southernmost City in the Continental United States', paragraph: 'Key West is surrounded by the beautiful waters of the Atlantic Ocean and the Gulf of Mexico. Dive the Vandenberg or snorkel our coral reefs, charter a day of fishing, relax on one of our beaches, book an Eco tour, and end your day with a beautiful sunset cruise. Each evening we are treated to the talented Sunset Celebration performers on Mallory Square while enjoying a spectacular sunset.'}
        ], 
        slider: {images: ['https://upload.wikimedia.org/wikipedia/commons/2/28/Flag_of_Key_West%2C_Florida.svg', 'https://upload.wikimedia.org/wikipedia/commons/2/24/Seal_of_Key_West%2C_Florida.png', 'https://upload.wikimedia.org/wikipedia/commons/8/82/1542644843_48446_o.jpg', 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Key_west_from_iss.jpg', 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Key_cruise.jpg', 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Florida.svg'], descriptions: [<h2 key={0}>The flag of the Key West</h2>, [<h2 key={1}>The seal of the Key West</h2>], <h2 key={2}>Teri Johnston - the mayor of the Key West</h2>, <h2 key={3}>Key West from satelite</h2>, <h2 key={4}>A cruise ship docked at the Navy Mole pier in Key West</h2>, <h2 key={5}>The flag of the Florida</h2>], urls: ['https://upload.wikimedia.org/wikipedia/commons/2/28/Flag_of_Key_West%2C_Florida.svg', 'https://upload.wikimedia.org/wikipedia/commons/2/24/Seal_of_Key_West%2C_Florida.png', 'https://upload.wikimedia.org/wikipedia/commons/8/82/1542644843_48446_o.jpg', 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Key_west_from_iss.jpg', 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Key_cruise.jpg', 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Florida.svg'], colors: ['#232365', '#111188', '#555577', '#333355', '#111133', '#000055']}
    }
}

export { factInfo, twitterTags, navbarItems, services, about }