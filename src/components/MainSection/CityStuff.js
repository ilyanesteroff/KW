import React from 'react'
import Item from './Item'
import { faComment, faChartBar, faBuilding, faCompass} from '@fortawesome/free-regular-svg-icons'
import { WidthContext } from '../pages/contexts'

const Width = () => React.useContext(WidthContext)

const CityStuff = () => {
    let style = getStyle()
    let info = [{
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
    let items = info.map((item, index) => 
    <Item url={info[index].href} icon={info[index].icon} headline={info[index].point} text={info[index].text} />)

    return <div style={style}>{items}</div>
}

const getStyle = () => {
    let output = {
        margin: '15vh 0 10vh 0'
    }
    if(Width() > 750){
        output.display = 'flex'
        output.flexDirection = 'row'
        output.flexWrap = 'nowrap'
        output.justifyContent = 'center'
        output.alignItems = 'baseline'
        output.height = '45vh'
        output.textAlign = 'center'
    } else {
        output.display = 'block'
    }
    return output
}

export default CityStuff