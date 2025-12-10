import { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const timeData = [
  { stage: 'Select', actual: 28, target: 20 },
  { stage: 'Scan', actual: 32, target: 20 },
  { stage: 'Upload', actual: 28, target: 20 },
  { stage: 'Check', actual: 33, target: 20 },
];

export default function TimeComparisonChart() {
  return (
    <LineChart width={500} height={300} data={timeData}>
      <XAxis dataKey="stage" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="actual" stroke="#ef4444" />
      <Line type="monotone" dataKey="target" stroke="#10b981" />
    </LineChart>
  );
}
