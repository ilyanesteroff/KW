import React from 'react';
import { Line } from 'react-chartjs-2';
import { chartState } from './info'
import { Chapter } from '../Helpers/DesignAssistants';

export default class extends React.PureComponent {
  constructor(props){
    super(props)
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this)
    this.state = {
        data: {labels: chartState.data.labels, datasets: [chartState.data.datasets[1]]}
    }
  }

  handleCheckboxChange = _ => {
    let graphs = [chartState.data.datasets[1]]

    if (document.getElementById('IncludeIslaMorada').checked) graphs.unshift(chartState.data.datasets[0])
    if (document.getElementById('IncludeMonroe').checked) graphs.push(chartState.data.datasets[2])

    graphs = {labels: chartState.data.labels, datasets: graphs}
    this.setState({
        data: graphs
    })
  }

  render() {
    return (
      <div style={{margin: '10vh 0'}}>
        <Line
          data={this.state.data}
          options={chartState.options}
        />
        <div className="ChartSettings">
          <Chapter additionalStyle={{fontSize: '1rem'}}>Include Monroe county</Chapter>
          <label className="switch">
            <input type="checkbox" id="IncludeMonroe" onChange={this.handleCheckboxChange}/>
            <span className="slider round"></span>
          </label>
          <Chapter additionalStyle={{fontSize: '1rem'}}>Include Islamorada</Chapter>
          <label className="switch">
            <input type="checkbox" id="IncludeIslaMorada" onChange={this.handleCheckboxChange}/>
            <span className="slider round"></span>
          </label>
        </div>
      </div>
    );
  }
}