import { range, scaleLinear } from 'd3'

export const Legend = ({ colorScale, dataMax, height, width }) => {
    const containerHeight = 70;
    const barWidth = width / 2;
    const barHeight = 12;
    const barStartX = width / 4;
    const legendOffset = 30;
    const barStartY = (height - containerHeight / 2) - 10;

    const legendColorScale = colorScale.domain([100, 0])
    const steps = range(100)

    const legendScale = scaleLinear()
        .domain([0, Math.ceil(dataMax)])
        .range([0, barWidth])

    return (
        <svg className="legend">
            <defs>
                <linearGradient id="myGradient" x1="0%" x2="100%" y1="0%" y2="0%">
                    {steps.map((num, i) => <stop offset={`${i}%`} stopColor={legendColorScale(num)}></stop>)}
                </linearGradient>
            </defs>
            <rect x="0" y={height - containerHeight} height={containerHeight} width={width} fill="white" />
            <rect x={barStartX} y={barStartY} width={barWidth} height={barHeight} fill="url('#myGradient')" />
            <line x1={barStartX} x2={barStartX + barWidth} y1={barStartY} y2={barStartY} />
            <line x1={barStartX} x2={barStartX + barWidth} y1={barStartY + barHeight} y2={barStartY + barHeight} />
            <g transform={`translate(${barStartX}, ${-legendOffset})`}>
                {legendScale.ticks(5).map((tickValue) => (
                    <g className="tick" key={tickValue} transform={`translate(${legendScale(tickValue)}, 0)`}>
                        <line y1={barStartY + legendOffset} y2={height + 3} />
                        <text style={{ textAnchor: "middle" }} dy="0.71em" y={height + 10}>
                            {tickValue}%
                        </text>
                    </g>
                ))}
            </g>
        </svg>
    )
}