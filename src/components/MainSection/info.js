import React from 'react'
import { Chapter, TextArea } from '../Helpers/DesignAssistants'


let twitterTags = ['Covid19', 'KeyWest', 'Florida']

let navbarItems = ['Home', 'About', 'Location', 'History']

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

export { twitterTags, navbarItems, chartState, history }