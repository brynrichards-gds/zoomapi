import users from './users';
import meetings from './meetings';
import webinars from './webinars';
import metrics from './metrics';
import reports from './reports';
import { ZoomOptions } from './common';
import request from './util/request';

export default function(zoomApiOpts: ZoomOptions) {
  const zoomRequest = request(zoomApiOpts);

  return {
    users: users(zoomRequest),
    meetings: meetings(zoomRequest),
    webinars: webinars(zoomRequest),
    metrics: metrics(zoomRequest),
    reports: reports(zoomRequest),
  };
}

export * from './webhooks';
export * from './common';
export * from './users';
export * from './meetings';
export * from './metrics';
export * from './reports';
