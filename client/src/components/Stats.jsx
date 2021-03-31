import React from 'react';
import { ResponsiveLine } from 'nivo';

const data = [{
  "id": "test",
  "data": [
    {
      "x": "2021-03-27",
      "y": 90
    },
    {
      "x": "2021-03-28",
      "y": 100
    },
    {
      "x": "2021-03-29",
      "y": 105
    },
    {
      "x": "2021-03-30",
      "y": 200
    },
  ]
}];


export default () => (
  <ResponsiveLine
    data={data} />
);