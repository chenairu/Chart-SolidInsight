import { Chart } from '@antv/g2';

const data = [
  { item: '0-1M', count: 40, percent: 0.4 },
  { item: '1-5M', count: 21, percent: 0.21 },
  { item: '5-10M', count: 17, percent: 0.17 },
  { item: '10-20M', count: 13, percent: 0.13 },
  { item: '20M+', count: 9, percent: 0.09 },
];

const chart = new Chart({
  container: 'container',
  autoFit: true,
  height: 500,
});

chart.coordinate('theta', {
  radius: 0.75,
});

chart.data(data);

chart.scale('percent', {
  formatter: (val) => {
    val = val * 100 + '%';
    return val;
  },
});

chart.tooltip({
  showTitle: false,
  showMarkers: false,
});

chart
  .interval()
  .position('percent')
  .color('item')
  .label('percent', {
    layout: [{ type: 'limit-in-plot', cfg: { action: 'ellipsis'/** 或 translate */ } }],
    content: (data) => {
      return `${data.item}: ${data.percent * 100}%`;
    },
  })
  .adjust('stack');

chart.interaction('element-active');

chart.render();
