import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
} from 'recharts';

/**
 * Custom tooltip for the demographics pie chart.
 */
function DemoTooltip({ active, payload }) {
  if (!active || !payload?.length) return null;

  return (
    <div className="chart-tooltip">
      <p className="chart-tooltip__value">
        <span
          className="chart-tooltip__dot"
          style={{ background: payload[0].payload.color }}
        />
        {payload[0].name}: {payload[0].value}%
      </p>
    </div>
  );
}

/**
 * Custom label rendered on each pie slice.
 */
function renderCustomLabel({ cx, cy, midAngle, innerRadius, outerRadius, name, value }) {
  const RADIAN = Math.PI / 180;
  const radius = outerRadius + 25;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  if (value < 7) return null; // Skip labels for tiny slices

  return (
    <text
      x={x}
      y={y}
      fill="#8585a0"
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline="central"
      fontSize={11}
      fontWeight={500}
    >
      {name}
    </text>
  );
}

/**
 * Demographics Pie Chart — shows user distribution by country.
 *
 * @param {{ data: Array<{name: string, value: number, color: string}> }} props
 */
export default function DemographicsPieChart({ data = [] }) {
  return (
    <div className="chart-container animate-fade-in-up stagger-7" id="chart-demographics">
      <div className="chart-header">
        <div>
          <h3 className="chart-title">User Demographics</h3>
          <p className="chart-subtitle">Distribution by country</p>
        </div>
      </div>
      <div className="chart-body chart-body--centered">
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={70}
              outerRadius={110}
              paddingAngle={3}
              dataKey="value"
              stroke="none"
              label={renderCustomLabel}
              labelLine={false}
              animationBegin={300}
              animationDuration={800}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip content={<DemoTooltip />} />
          </PieChart>
        </ResponsiveContainer>

        {/* Center label */}
        <div className="pie-center-label">
          <span className="pie-center-label__value">{data.length}</span>
          <span className="pie-center-label__text">Countries</span>
        </div>
      </div>

      {/* Legend */}
      <div className="pie-legend">
        {data.map((item) => (
          <div key={item.name} className="pie-legend__item">
            <span className="pie-legend__dot" style={{ background: item.color }} />
            <span className="pie-legend__name">{item.name}</span>
            <span className="pie-legend__value">{item.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}
