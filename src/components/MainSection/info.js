import React, {useState, useEffect} from 'react'
import { faComment, faChartBar, faBuilding, faNewspaper} from '@fortawesome/free-regular-svg-icons'
import { Chapter, TextArea } from '../Helpers/DesignAssistants'
import Slider from '../Slider/ReadySlider'

let factInfo = [
    {
        url: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Hemingway_House_Key_West_FL1.jpg",
        factType: 'Museum',
        content: 'Author Hemingway lived in Key West, and there is an annual Hemingway look-alike contest in his honor',
        color: 'rgba(15, 8, 128, 0.8)',
        href: 'https://en.wikipedia.org/wiki/Ernest_Hemingway_House',
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
            <h2 key={0}>Tourists in Hemingway house</h2>,
            <h2 key={1}>Hemingway's pool</h2>,
            <h2 key={2}>Host room</h2>,
            <h2 key={3}>Hemingway's desktop</h2>,
            <h2 key={4}>The front of the house</h2>,
            <h2 key={5}>Hemingway's garden</h2>
        ]
    },
    {
        url: 'https://upload.wikimedia.org/wikipedia/commons/d/dc/Southernmost_Point_an_der_S%C3%BCdk%C3%BCste_von_Key_West.jpg',
        factType: 'The buoy',
        content: 'This is the southernmost point of Key West',
        color: 'rgba(15, 6, 96, 0.8)',
        href: 'https://en.wikipedia.org/wiki/Southernmost_point_buoy',
        place: 'buoy',
        topic: `The southernmost point`,
        additionalInfo: 'The Southernmost Point Buoy is an anchored concrete buoy in Key West, Florida, marking the southernmost point in the continental United States, the lowest latitude land of contiguous North American States. It is 18 feet above sea level. The large painted buoy was established as a tourist attraction in 1983 by the city at the corner of South Street and Whitehead Street. It is one of the most visited and photographed attractions in the United States. The southernmost point was originally marked with a small sign, before the City of Key West erected the now famous concrete buoy in 1983. The concrete buoy has overall withstood several hurricanes and is a gathering place for photographs and tourists. The paint job was damaged by Hurricane Irma in September 2017, but it was refurbished later that year by the original artist supported by the City of Key West which values the landmark as a tourist attraction. Cuba is roughly 90 miles south of this point in Key West, although this was not originally on the marker, but rather on a smaller sign next to marker.',
        images: [
            'https://upload.wikimedia.org/wikipedia/commons/1/18/The_Southernmost_Point%2C_90_miles_to_Cuba-_Key_West%2C_Florida_%288379456437%29.jpg',
            'https://upload.wikimedia.org/wikipedia/commons/9/99/SOUVENIR_SEASHELLS_FOR_SALE_AT_THE_SOUTHERNMOST_POINT_OF_THE_UNITED_STATES_-_NARA_-_548545.jpg'
        ], 
        descriptions: [
             <h2 key={0}>The bouy</h2>,
             <h2 key={1}>The Southernmost Buoy</h2>
        ]
    },
    {
        url: 'https://upload.wikimedia.org/wikipedia/commons/7/74/Southernmosthouse.jpg',
        factType: 'Historic mansion',
        content: 'The Southernmost House is a historic mansion in the U.S. city of Key West',
        color: 'rgba(15, 5, 80, 0.8)',
        href: 'https://en.wikipedia.org/wiki/Southernmost_House',
        place: 'mansion',
        topic: `The southernmost Mansion`,
        additionalInfo: `The Southernmost House is a historic mansion in the U.S. city of Key West, in Monroe County, Florida. Five U.S. Presidents have stayed there. The house is located in the Upper Duval district and has been converted into a bed and breakfast. Judge Jeptha Vining Harris built the mansion that is now called the Southernmost House in 1897 for $250,000.[1] His wife was the youngest daughter of William Curry, one of Florida’s first millionaires. The Curry family were builders with eight mansions in the Historic District of Key West. The Harris family were prominent citizens at the turn of the century and had invested in Henry Flagler's Overseas Railroad to Key West, often entertaining him at the mansion during the railroad's construction.`,
        images: [
            'https://upload.wikimedia.org/wikipedia/commons/2/2a/Southernmost_House_from_Ocean.jpg',
            'https://upload.wikimedia.org/wikipedia/commons/7/74/Southernmosthouse.jpg'
        ],
        descriptions: [
            <h2 key={0}>View from the ocean</h2>,
            <h2 key={1}>View from the street</h2>
        ]
    },
    {
        url: 'https://upload.wikimedia.org/wikipedia/commons/e/e1/Key_West_FL_HD_Little_White_House04.jpg', 
        factType: 'Little White House',
        content: 'The Harry S Truman Little White House in Key West, where President Harry S Truman spent 175 days during 11 visits.',
        color: 'rgba(15, 4, 64, 0.8)',
        href: 'https://en.wikipedia.org/wiki/Harry_S._Truman_Little_White_House',
        place: 'white_house',
        topic: 'Harry S. Truman Little White House',
        additionalInfo: `The Harry S Truman Little White House in Key West, Florida was the winter White House for President Harry S Truman for 175 days during 11 visits. The house is located in the Truman Annex neighborhood of Old Town, Key West. The house was originally waterfront when it was built in 1890 as the first officer's quarters on the submarine base naval station. The house was designed in 1889 by Scott, McDermott & Higgs, a local architectural firm. The wooden duplex contained Quarters A for the base commandant and Quarters B for the paymaster.`,
        images: [
            'https://upload.wikimedia.org/wikipedia/commons/d/d8/Truman-key-1950.gif',
            'https://upload.wikimedia.org/wikipedia/commons/b/b5/Key_road.jpeg'
        ],
        descriptions: [
            <h2 key={0}>Little White House in 1950</h2>,
            <h2 key={1}>Palm trees along a street in the Truman Annex</h2>
        ]
    },
    {
        url: 'https://upload.wikimedia.org/wikipedia/commons/b/bc/Early_morning_Smathers_Beach_Key_West.JPG', 
        factType: 'Nice place to relax',
        content: 'Smathers Beach is the largest public beach in Key West, Florida, United States. It is approximately a half mile long.',
        color: 'rgba(15, 7, 112, 0.8)',
        href: 'https://en.wikipedia.org/wiki/Smathers_Beach',
        place: 'beach',
        topic: 'Smathers beach',
        additionalInfo: `Smathers Beach is the largest public beach in Key West, Florida, United States. It is approximately a half mile long.
        The beach is located on the south side of the island, along the Atlantic Ocean and State Road A1A, and begins at mile marker zero, the beginning of A1A. The beach is lined with coconut trees and is often crowded with tourists and locals alike.
        On September 2, 2013, long-distance swimmer Diana Nyad arrived on Smathers Beach after swimming 110 miles (166 kilometers) from Havana, Cuba. It was the first time a person had ever swam from Cuba to Florida without a shark cage.`,
        images: [
            'https://upload.wikimedia.org/wikipedia/commons/6/62/Smathers_Beach_closeup.JPG',
            'https://upload.wikimedia.org/wikipedia/commons/b/bc/Early_morning_Smathers_Beach_Key_West.JPG'
        ],
        descriptions: [
            <h2 key={0}>Typical summer day on Smathers Beach.</h2>,
            <h2 key={1}>Early morning on Smathers Beach</h2>
        ]
    },
    {
        url: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Mallory_Square.JPG', 
        factType: 'Nice place for visitors',
        content: `Mallory Square is a plaza located on the waterfront in Key West's historic Old Town.`,
        color: 'rgba(15, 9, 144, 0.8)',
        href: 'https://en.wikipedia.org/wiki/Mallory_Square',
        place: 'mallory_square',
        topic: 'Mallory Square',
        additionalInfo: `Mallory Square is a plaza located in the city of Key West, Florida, U.S.
        It is located on the waterfront in Key West's historic Old Town, adjacent to the cruise ship port. It is located just west of the northern end of Duval Street, facing the Gulf of Mexico. It runs the entire length of Wall Street. Adjacent to the square are the Key West Shipwreck Historeum Museum and the Old Post Office and Customshouse.`,
        images: [
            'https://upload.wikimedia.org/wikipedia/en/4/4b/Mallory_Square%2C_Key_West%2C_Florida.JPG',
            'https://upload.wikimedia.org/wikipedia/commons/2/2e/Mallory_Square.JPG',
            'https://upload.wikimedia.org/wikipedia/commons/3/32/Key_West_FH020024.jpg',
            'https://upload.wikimedia.org/wikipedia/commons/f/f4/Sunset%2C_Mallory_Square%2C_Key_West%2C_Florida%2C_USA.jpg'
        ],
        descriptions: [
            <h2 key={0}>Mallory Square entrance sign.</h2>,
            <h2 key={1}>Mallory Square as seen from the Gulf of Mexico. Downtown Key West can be seen in the background.</h2>,
            <h2 key={2}>Tourists and the Majesty of the Seas</h2>,
            <h2 key={3}>Sunset</h2>
        ]
    }, 
    {
        url: 'https://upload.wikimedia.org/wikipedia/commons/c/c6/Aerial_view_of_Fort_Zachary_Taylor_State_Park.jpg', 
        factType: 'Fort Zachary Taylor',
        content: 'The Fort Zachary Taylor Historic State Park is a Florida State Park and National Historic Landmark centered on a Civil War-era fort.',
        color: 'rgba(15, 3, 48, 0.8)',
        href: 'https://en.wikipedia.org/wiki/Fort_Zachary_Taylor_Historic_State_Park',
        place: 'fort',
        topic: 'Fort Zachary Taylor Historic State Park',
        additionalInfo: `The Fort Zachary Taylor Historic State Park, better known simply as Fort Taylor (or Fort Zach to locals) is a Florida State Park and National Historic Landmark centered on a Civil War-era fort located near the southern tip of Key West, Florida. Construction of the fort began in 1845 as part of a mid-19th century plan to defend the southeast coast through a series of forts after the War of 1812. Thompson Island, at the southwest tip of Key West, was selected as the site for the fort in 1822 and plans for the fort, drawn up by Simon Bernard and Joseph G. Totten, were approved in 1836. In 1947, the fort, no longer of use to the U.S. Army, was turned over to the U.S. Navy for maintenance. In 1968, volunteers led by Howard S. England excavated Civil War guns and ammunition buried in long-abandoned parts of the fort, which was soon discovered to house the nation's largest collection of Civil War cannons. Fort Taylor was therefore placed on the National Register of Historic Places in 1971 and designated a National Historic Landmark in 1973. Due to the filling in of land around the fort, including the creation of an attractive stretch of beach, the park now occupies 87 acres (352,000 m²).`,
        images: [
            'https://upload.wikimedia.org/wikipedia/commons/3/3f/Fort_taylor.jpg',
            'https://upload.wikimedia.org/wikipedia/commons/c/c6/Aerial_view_of_Fort_Zachary_Taylor_State_Park.jpg',
            'https://upload.wikimedia.org/wikipedia/commons/8/8b/Fort_Zachary_Taylor.JPG'
        ],
        descriptions: [
            <h2 key={0}>Fort Taylor, Florida by Seth Eastman (1808-1875)</h2>,
            <h2 key={1}>Aerial view of Fort Zachary Taylor State Park</h2>,
            <h2 key={2}>The fort as seen from the Gulf of Mexico</h2>
        ]
    },
    {
        url: 'https://upload.wikimedia.org/wikipedia/commons/2/25/Key_lighthouse.jpeg', 
        factType: 'Key West Lighthouse',
        content: 'The first Key West lighthouse was a 65-foot (20 m) tower completed in 1825. It had 15 lamps in 15-inch (380 mm) reflectors.',
        color: 'rgba(15, 9, 144, 0.8)',
        href: 'https://en.wikipedia.org/wiki/Key_West_Lighthouse',
        place: 'lighthouse',
        topic: 'Key West lighthouse',
        additionalInfo: `The Key West Lighthouse is located in Key West, Florida. The first Key West lighthouse was a 65-foot (20 m) tower completed in 1825. It had 15 lamps in 15-inch (380 mm) reflectors. The first keeper, Michael Mabrity, died in 1832, and his widow, Barbara, became the lighthouse keeper, serving for 32 years. The Great Havana Hurricane of 1846 destroyed the lighthouse; the USS Morris, which was wrecked during the storm, reported "a white sand beach covers the spot where Key West Lighthouse stood". Barbara Mabrity survived, but fourteen people who had sought refuge in the lighthouse tower died, including seven members of her family. (The same hurricane destroyed the Sand Key Lighthouse, eight miles (13 km) away, killing six people, including the keeper, Rebecca Flaherty, another widow of a previous keeper.) Barbara Mabrity continued to serve as keeper of the Key West Light until the early 1860s, when she was fired at age 82 for making statements against the Union (Key West remained under Union control throughout the Civil War).`,
        images: [
            'https://upload.wikimedia.org/wikipedia/commons/9/91/USCGKeywestpre1894.jpg',
            'https://upload.wikimedia.org/wikipedia/commons/a/a7/USCGKeywestpost1894.jpg'
        ],
        descriptions: [
            <h2 key={0}>Original lighthouse, U.S. Coast Guard Archive</h2>,
            <h2 key={1}>Current lighthouse, U.S. Coast Guard Archive</h2>
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
     point: 'Key West news', 
     icon: faNewspaper, 
     text: 'Check out about what happens in Key West', 
     href: 'https://www.cityofkeywest-fl.gov/egov/apps/document/center.egov?view=browse&eGov_searchType=46&eGov_searchDepartment=4'
 }]

let twitterTags = ['COVID19', 'KeyWest', 'Florida']

let navbarItems = ['Home', 'About', 'Location', 'History']

let about = {
    links: ['Key West', 'Website'],
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

const chartState = {
  data: {
    labels: ['1990', '1995', '2000', '2005', '2010', '2015', '2020'],
    datasets: [
      {
        label: 'Islamorada',
        fill: true,
        lineTension: 0.5,
        backgroundColor: '#337',
        borderColor: '#111122',
        borderWidth: 2,
        data: [6737, 7173, 6824, 6566, 6135, 6500, 6383]
      },
      {
        label: 'Key West',
        fill: true,
        lineTension: 0.5,
        backgroundColor: 'rgba(80, 80, 176, 0.8)',
        borderColor: '#111133',
        borderWidth: 2,
        data: [25171, 26262, 25425, 23833, 24659, 25288, 24565]
      },
      {
        label: 'Monroe County',
        fill: true,
        lineTension: 0.5,
        backgroundColor: /*'#7af',*/ 'rgba(112, 160, 255, 0.6)',
        borderColor: '#111122',
        borderWidth: 2,
        data: [78226, 81465, 79490, 76230, 73220, 76648, 74228]
      }
    ]
  }, 
  options: {
    responsive: true,
    layout: {
      padding: {
        top: 5,
        left: 15,
        right: 15,
        bottom: 15
      }
    },
    title:{
      display:true,
      text:'Key West and Monroe county population 1990-2020',
      fontSize:30,
      fontColor: '#222255',
      fontFamily: 'Ubuntu, sans-serif'
    },
    tooltips: {
      displayColors: false,
      titleFontSize: 16,
      bodyFontSize: 14,
      xPadding: 15,
      yPadding: 15,
      callbacks: { 
        label: (tooltipItem, data) => {
          return `${tooltipItem.value} humans`
        }
      }
    },
    legend:{
      display:true,
      position:'right'
    }
  }
}

const history = {
  links: ['Precolonial and colonial times', 'Ownership claims', 'First developers', 'late 19th century', '20th century'],
  content: [
      {
        fullLink: <Chapter>Precolonial and colonial times</Chapter>,
        text: 
          <TextArea additionalStyle={{textAlign: 'left'}}>
            At various times before the 19th century, people who were related or subject to the Calusa and the Tequesta inhabited Key West. The last Native American residents of Key West were Calusa refugees who were taken to Cuba when Florida was transferred from Spain to Great Britain in 1763.
            <br/>
            <br/>
            Cayo Hueso is the original Spanish name for the island of Key West. Spanish-speaking people today also use the term when referring to Key West. It literally means "bone cay", cay referring to a low island or reef. It is said that the island was littered with the remains (bones) of prior native inhabitants, who used the isle as a communal graveyard. This island was the westernmost Key with a reliable supply of water.
            <br/>
            <br/>
            Between 1763, when Great Britain took control of Florida from Spain, and 1821, when the United States took possession of Florida from Spain, there were few or no permanent inhabitants anywhere in the Florida Keys. Cubans and Bahamians regularly visited the Keys, the Cubans primarily to fish, while the Bahamians fished, caught turtles, cut hardwood timber, and salvaged wrecks. Smugglers and privateers also used the Keys for concealment. In 1766 the British governor of East Florida recommended that a post be set up on Key West to improve control of the area, but nothing came of it. During both the British and Spanish periods no nation exercised de facto control. The Bahamians apparently set up camps in the Keys that were occupied for months at a time, and there were rumors of permanent settlements in the Keys by 1806 or 1807, but the locations are not known. Fishermen from New England started visiting the Keys after the end of the War of 1812, and may have briefly settled on Key Vaca in 1818.
          </TextArea>
      }, 
      {
        fullLink: <Chapter>Ownership claims</Chapter>,
        text: 
           <TextArea additionalStyle={{textAlign: 'left'}}>
           In 1815, the Spanish governor of Cuba in Havana deeded the island of Key West to Juan Pablo Salas, an officer of the Royal Spanish Navy Artillery posted in Saint Augustine, Florida. After Florida was transferred to the United States in 1821, Salas was so eager to sell the island that he sold it twice – first for a sloop valued at $575 to a General John Geddes, a former governor of South Carolina, and then to a U.S. businessman John W. Simonton, during a meeting in a Havana café on January 19, 1822, for the equivalent of $2,000 in pesos in 1821. Geddes tried in vain to secure his rights to the property before Simonton who, with the aid of some influential friends in Washington, was able to gain clear title to the island. Simonton had wide-ranging business interests in Mobile, Alabama. He bought the island because a friend, John Whitehead, had drawn his attention to the opportunities presented by the island's strategic location. John Whitehead had been stranded in Key West after a shipwreck in 1819 and he had been impressed by the potential offered by the deep harbor of the island. The island was indeed considered the "Gibraltar of the West" because of its strategic location on the 90-mile (140 km)–wide deep shipping lane, the Straits of Florida, between the Atlantic Ocean and the Gulf of Mexico.
        </TextArea>
      }, 
      {
        fullLink: <Chapter>First developers</Chapter>,
        text:
          <>
            <TextArea additionalStyle={{textAlign: 'left'}}>Soon after his purchase, John Simonton subdivided the island into plots and sold three undivided quarters of each plot to:</TextArea>
              <ul className="KeyWestDevelopersList">
                <li key={0}> John Mountain and U.S. Consul John Warner, who quickly resold their quarter to Pardon C. Greene, who took up residence on the island. Greene is the only one of the four "founding fathers" to establish himself permanently on the island, where he became quite prominent as head of P.C. Greene and Company. He was a member of the city council and also served briefly as mayor. He died in 1838 at the age of 57.</li>
                <li key={1}>John Whitehead, his friend who had advised him to buy Key West. John Whitehead lived in Key West for only eight years. He became a partner in the firm of P.C. Greene and Company from 1824 to 1827. A lifelong bachelor, he left the island for good in 1832. He came back only once, during the Civil War in 1861, and died the next year.</li>
                <li key={2}>John Fleeming (nowadays spelled Fleming). John W.C. Fleeming was English-born and was active in mercantile business in Mobile, Alabama, where he befriended John Simonton. Fleeming spent only a few months in Key West in 1822 and left for Massachusetts, where he married. He returned to Key West in 1832 with the intention of developing salt manufacturing on the island but died the same year at the age of 51.</li>
              </ul>
            </>
      }, 
      {
        fullLink: <Chapter>American Civil War and late 19th century</Chapter>,
        text: 
          <TextArea additionalStyle={{textAlign: 'left'}}>
            During the American Civil War, while Florida seceded and joined the Confederate States of America, Key West remained in U.S. Union hands because of the naval base. Most locals were sympathetic to the Confederacy, however, and many flew Confederate flags over their homes. Fort Zachary Taylor, constructed from 1845 to 1866, was an important Key West outpost during the Civil War. Construction began in 1861 on two other forts, East and West Martello Towers, which served as side armories and batteries for the larger fort. When completed, they were connected to Fort Taylor by railroad tracks for movement of munitions.Fort Jefferson, located about 68 miles (109 km) from Key West on Garden Key in the Dry Tortugas, served after the Civil War as the prison for Dr. Samuel A. Mudd, convicted of conspiracy for setting the broken leg of John Wilkes Booth, the assassin of President Abraham Lincoln.
          </TextArea>
      }, 
      {
        fullLink: <Chapter>20th century</Chapter>,
        text: 
          <TextArea additionalStyle={{textAlign: 'left'}}>
            Key West was relatively isolated until 1912, when it was connected to the Florida mainland via the Overseas Railway extension of Henry M. Flagler's Florida East Coast Railway (FEC). Flagler created a landfill at Trumbo Point for his railyards. The Labor Day Hurricane of 1935 destroyed much of the railroad and killed hundreds of residents, including around 400 World War I veterans who were living in camps and working on federal road and mosquito-control projects in the Middle Keys. The FEC could not afford to restore the railroad.
            <br/>
            <br/>
            The U.S. government then rebuilt the rail route as an automobile highway, completed in 1938, built atop many of the footings of the railroad. It became an extension of U.S. Route 1. The portion of U.S. 1 through the Keys is called the Overseas Highway. Franklin Roosevelt toured the road in 1939.
          </TextArea>
      }
    ]
}
const location = {
  items: ['From space', 'Location in Florida', 'Location in Monroe County', 'Key West map'],
  content: ['https://upload.wikimedia.org/wikipedia/commons/f/f7/Key_west_from_iss.jpg', 'https://upload.wikimedia.org/wikipedia/commons/4/44/USA_Florida_location_map.svg', 'https://upload.wikimedia.org/wikipedia/commons/2/20/Monroe_County_Florida_Incorporated_and_Unincorporated_areas_Key_West_Highlighted.svg', 'https://upload.wikimedia.org/wikipedia/commons/d/d6/Image-Key-west-map.gif']
}

export { factInfo, twitterTags, navbarItems, services, about, chartState, history, location }