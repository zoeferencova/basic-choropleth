import React from 'react';
import { scaleSequential, max, interpolateMagma } from 'd3';
import { useWorldAtlas } from '../hooks/useWorldAtlas'
import { useData } from '../hooks/useData'
import { useCodes } from '../hooks/useCodes'
import { Marks } from '../components/Marks'
import { Legend } from '../components/Legend'

const width = 960;
const height = 500;

const selectedYear = "2019";

export const Chart = () => {
    const worldAtlas = useWorldAtlas();
    const data = useData();
    const codes = useCodes();

    if (!worldAtlas || !data || !codes) {
        return <pre>Loading ...</pre>
    }

    const filteredData = data.filter(d => d.Year === selectedYear);

    const numericCodeByAlphaCode = new Map();
    codes.forEach(code => {
        const alpha3Code = code['alpha-3'];
        const numericCode = code['country-code'];
        numericCodeByAlphaCode.set(alpha3Code, numericCode);
    })

    const rowByNumericCode = new Map();
    filteredData.forEach(d => {
        const alpha3Code = d.Code;
        const numericCode = numericCodeByAlphaCode.get(alpha3Code);
        rowByNumericCode.set(numericCode, d)
    })

    const colorValue = d => d.aids;
    const dataMax = max(data, colorValue);

    const colorScale = scaleSequential(interpolateMagma)

    return (
        <svg width={width} height={height}>
            <g>
                <Marks
                    worldAtlas={worldAtlas}
                    rowByNumericCode={rowByNumericCode}
                    colorScale={colorScale.domain([dataMax, 0])}
                    colorValue={colorValue}
                />
            </g>
            <Legend colorScale={colorScale} colorValue={colorValue} dataMax={dataMax} height={height} width={width} />
        </svg>
    );
};
