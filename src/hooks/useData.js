import { useState, useEffect } from 'react';
import { csv } from 'd3';

const csvUrl =
  'https://gist.githubusercontent.com/zoeferencova/c9e436ba1d5cc525f83e3547527c75c2/raw/hiv-aids-dataset-2019.csv';

const row = d => {
  d.aids = +d['Prevalence - HIV/AIDS - Sex: Both - Age: 15-49 years (Percent)'];
  return d;
}

export const useData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    csv(csvUrl, row).then(setData)
  }, []);

  return data;
}