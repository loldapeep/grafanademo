const graphitePlugin = async () =>
  await import(/* webpackChunkName: "graphitePlugin" */ '../../plugins/datasource/graphite/module');
const cloudwatchPlugin = async () =>
  await import(/* webpackChunkName: "cloudwatchPlugin" */ '../../plugins/datasource/cloudwatch/module');
const dashboardDSPlugin = async () =>
  await import(/* webpackChunkName "dashboardDSPlugin" */ '../../plugins/datasource/dashboard/module');
const elasticsearchPlugin = async () =>
  await import(/* webpackChunkName: "elasticsearchPlugin" */ '../../plugins/datasource/elasticsearch/module');
const opentsdbPlugin = async () =>
  await import(/* webpackChunkName: "opentsdbPlugin" */ '../../plugins/datasource/opentsdb/module');
const grafanaPlugin = async () =>
  await import(/* webpackChunkName: "grafanaPlugin" */ '../../plugins/datasource/grafana/module');
const influxdbPlugin = async () =>
  await import(/* webpackChunkName: "influxdbPlugin" */ '../../plugins/datasource/influxdb/module');
const lokiPlugin = async () => await import(/* webpackChunkName: "lokiPlugin" */ '../../plugins/datasource/loki/module');
const mixedPlugin = async () =>
  await import(/* webpackChunkName: "mixedPlugin" */ '../../plugins/datasource/mixed/module');
const prometheusPlugin = async () =>
  await import(/* webpackChunkName: "prometheusPlugin" */ '../../plugins/datasource/prometheus/module');
const mssqlPlugin = async () =>
  await import(/* webpackChunkName: "mssqlPlugin" */ '../../plugins/datasource/mssql/module');
const alertmanagerPlugin = async () =>
  await import(/* webpackChunkName: "alertmanagerPlugin" */ '../../plugins/datasource/alertmanager/module');

import { config } from '@grafana/runtime';
import * as alertListPanel from '../../plugins/panel/alertlist/module';
import * as annoListPanel from '../../plugins/panel/annolist/module';
import * as barChartPanel from '../../plugins/panel/barchart/module';
import * as barGaugePanel from '../../plugins/panel/bargauge/module';
import * as candlestickPanel from '../../plugins/panel/candlestick/module';
import * as dashListPanel from '../../plugins/panel/dashlist/module';
import * as dataGridPanel from '../../plugins/panel/datagrid/module';
import * as debugPanel from '../../plugins/panel/debug/module';
import * as flamegraphPanel from '../../plugins/panel/flamegraph/module';
import * as gaugePanel from '../../plugins/panel/gauge/module';
import * as gettingStartedPanel from '../../plugins/panel/gettingstarted/module';
import * as histogramPanel from '../../plugins/panel/histogram/module';
import * as livePanel from '../../plugins/panel/live/module';
import * as logsPanel from '../../plugins/panel/logs/module';
import * as newsPanel from '../../plugins/panel/news/module';
import * as pieChartPanel from '../../plugins/panel/piechart/module';
import * as statPanel from '../../plugins/panel/stat/module';
import * as stateTimelinePanel from '../../plugins/panel/state-timeline/module';
import * as statusHistoryPanel from '../../plugins/panel/status-history/module';
import * as tablePanel from '../../plugins/panel/table/module';
import * as textPanel from '../../plugins/panel/text/module';
import * as timeseriesPanel from '../../plugins/panel/timeseries/module';
import * as tracesPanel from '../../plugins/panel/traces/module';
import * as trendPanel from '../../plugins/panel/trend/module';
import * as welcomeBanner from '../../plugins/panel/welcome/module';

// Async loaded panels
const geomapPanel = async () => await import(/* webpackChunkName: "geomapPanel" */ '../../plugins/panel/geomap/module');
const canvasPanel = async () => await import(/* webpackChunkName: "canvasPanel" */ '../../plugins/panel/canvas/module');
const graphPanel = async () => await import(/* webpackChunkName: "graphPlugin" */ '../../plugins/panel/graph/module');
const xychartPanel = async () => {
  if (config.featureToggles.autoMigrateXYChartPanel) {
    return await import(/* webpackChunkName: "xychart2" */ '../../plugins/panel/xychart/v2/module');
  } else {
    return await import(/* webpackChunkName: "xychart" */ '../../plugins/panel/xychart/module');
  }
};
const heatmapPanel = async () =>
  await import(/* webpackChunkName: "heatmapPanel" */ '../../plugins/panel/heatmap/module');
const tableOldPanel = async () =>
  await import(/* webpackChunkName: "tableOldPlugin" */ '../../plugins/panel/table-old/module');

const nodeGraph = async () =>
  await import(/* webpackChunkName: "nodeGraphPanel" */ '../../plugins/panel/nodeGraph/module');

const builtInPlugins: Record<string, System.Module | (() => Promise<System.Module>)> = {
  // datasources
  'core:plugin/graphite': graphitePlugin,
  'core:plugin/cloudwatch': cloudwatchPlugin,
  'core:plugin/dashboard': dashboardDSPlugin,
  'core:plugin/elasticsearch': elasticsearchPlugin,
  'core:plugin/opentsdb': opentsdbPlugin,
  'core:plugin/grafana': grafanaPlugin,
  'core:plugin/influxdb': influxdbPlugin,
  'core:plugin/loki': lokiPlugin,
  'core:plugin/mixed': mixedPlugin,
  'core:plugin/mssql': mssqlPlugin,
  'core:plugin/prometheus': prometheusPlugin,
  'core:plugin/alertmanager': alertmanagerPlugin,
  // panels
  'core:plugin/text': textPanel,
  'core:plugin/timeseries': timeseriesPanel,
  'core:plugin/trend': trendPanel,
  'core:plugin/state-timeline': stateTimelinePanel,
  'core:plugin/status-history': statusHistoryPanel,
  'core:plugin/candlestick': candlestickPanel,
  'core:plugin/graph': graphPanel,
  'core:plugin/xychart': xychartPanel,
  'core:plugin/geomap': geomapPanel,
  'core:plugin/canvas': canvasPanel,
  'core:plugin/dashlist': dashListPanel,
  'core:plugin/alertlist': alertListPanel,
  'core:plugin/annolist': annoListPanel,
  'core:plugin/heatmap': heatmapPanel,
  'core:plugin/table': tablePanel,
  'core:plugin/table-old': tableOldPanel,
  'core:plugin/news': newsPanel,
  'core:plugin/live': livePanel,
  'core:plugin/stat': statPanel,
  'core:plugin/datagrid': dataGridPanel,
  'core:plugin/debug': debugPanel,
  'core:plugin/flamegraph': flamegraphPanel,
  'core:plugin/gettingstarted': gettingStartedPanel,
  'core:plugin/gauge': gaugePanel,
  'core:plugin/piechart': pieChartPanel,
  'core:plugin/bargauge': barGaugePanel,
  'core:plugin/barchart': barChartPanel,
  'core:plugin/logs': logsPanel,
  'core:plugin/traces': tracesPanel,
  'core:plugin/welcome': welcomeBanner,
  'core:plugin/nodeGraph': nodeGraph,
  'core:plugin/histogram': histogramPanel,
};

export default builtInPlugins;
