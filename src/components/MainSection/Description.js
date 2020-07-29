import React from 'react'
import { Chapter, TextArea } from '../Helpers/DesignAssistants'

const Description = () => {
    let style = {
        marginBottom: '1vh',
        marginTop: '3vh'
    }
    return(
        <div style={style}>
            <Chapter>
              Fishing, diving and beaches on idyllic islands
            </Chapter>
            <TextArea>
            A drive through the Florida Keys and Key West is one of the best scenic road trips in the USA. Only one road connects the 161-kilometer-long island chain: It began as Flagler’s Railroad, became the legendary Overseas Highway and now has been designated an All-American Road under the National Scenic Byways program. The drive has magnificent scenery, significant historic value and an abundance of recreational opportunities, making it a vacation unto itself.
            </TextArea>
        </div>
    )
}

export default Description