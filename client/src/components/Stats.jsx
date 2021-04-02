import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ResponsiveLine } from 'nivo';

export default ({ username }) => {
  const [ distanceData, setDistanceData ] = useState([]);
  const [ durationData, setDurationData ] = useState([]);

  useEffect(() => {
    axios.get(`/stats/${username}`)
      .then(res => {
        setDistanceData(res.data.resultDistance);
        setDurationData(res.data.resultDuration);
      });
  }, []);

  const statsGraph = distanceData.length > 0 && durationData.length > 0
    ? <>
        <div className='distance-graph'>
          <ResponsiveLine
            data={distanceData}
            colors={['green']}
            curve="natural"
            pointSize={12}
            enablePointLabel={true}
            layers={['axes', 'lines', 'markers', 'legends']}
            axisLeft={{
              legend: 'Distance From Target (px)',
              legendPosition: 'center',
              legendOffset: -40
            }}
            margin={{ top: 10, right: 40, bottom: 20, left: 50 }}
            isInteractive={false} />
        </div>
        <div className='duration-graph'>
          <ResponsiveLine
            data={durationData}
            colors={['red']}
            curve="natural"
            pointSize={12}
            enablePointLabel={true}
            layers={['lines', 'markers']}
            enableGridY={false}
            enableGridX={false}
            axisLeft={null}
            axisBottom={null}
            axisRight={{
              legend: 'Reaction Time (ms)',
              legendPosition: 'center',
              legendOffset: 50,
              tickPadding: 2,
              tickSize: 5
            }}
            margin={{ top: 10, right: 50, bottom: 20, left: 50 }}
            isInteractive={false} />
        </div>
      </>
    : null;

  return (
    <div className="wrapper">
      { statsGraph }
    </div>
  );
};