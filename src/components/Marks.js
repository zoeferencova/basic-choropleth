import { geoNaturalEarth1, geoPath, geoGraticule } from 'd3';

const projection = geoNaturalEarth1();
const path = geoPath(projection);
const graticule = geoGraticule();

const missingDataColor = '#efefef';

export const Marks = ({ worldAtlas: { countries, interiors }, rowByNumericCode, colorScale, colorValue }) => (
  <g className="marks">
    <path className="sphere" d={path({ type: 'Sphere' })} />
    <path className="graticules" d={path(graticule())} />
    {countries.features.map(feature => {
      const d = rowByNumericCode.get(feature.id);
      return <path className="countries" fill={d ? colorScale(colorValue(d)) : missingDataColor} d={path(feature)} />
    })}
    <path className="interiors" d={path(interiors)} />

  </g>
)