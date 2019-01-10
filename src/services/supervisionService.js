import request from '../utils/request'
import IP from "./ip";

export function resultReport(values) {
  return request(IP.domain + '/api/inspection/report', {
    method: 'POST',
    headers: {
      Authorization: values.access_token
    },
    body: JSON.stringify(values),
  });
}
export function getReportLog(values) {
  return request(IP.domain + '/api/log/inspection?offset=1&limit=10', {
    method: 'POST',
    headers: {
      Authorization: values.access_token
    },
    body: JSON.stringify(values),
  });
}
