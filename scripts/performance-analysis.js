const metrics = {
  url: window.location.href,
  user_agent: navigator.userAgent,
  fcp: null,
  ttfb: null,
  dom_load: null,
  window_load: null,
  files: [],
  started_at: null,
};

const calculateMetrics = () => {
  const p = window.performance.timing;
  const convertSeconds = (ms) => ms / 1000;

  metrics.fcp = convertSeconds(
    window.performance
      .getEntriesByType("paint")
      .find((time) => time.name == "first-contentful-paint").startTime
  );

  metrics.ttfb = convertSeconds(p.responseStart - p.requestStart);

  metrics.dom_load = convertSeconds(
    p.domContentLoadedEventEnd - p.domContentLoadedEventStart
  );

  metrics.window_load = convertSeconds(Date.now() - p.navigationStart);

  window.performance.getEntriesByType("resource").map((file) => {
    metrics.files.push({
      name: file.name,
      file_type: file.initiatorType,
      load_time: convertSeconds(file.responseEnd - file.fetchStart),
    });
  });

  metrics.started_at = new Date(p.navigationStart).toString();

  return metrics;
};

const sendMetrics = () => {
  calculateMetrics();

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(metrics),
  };
  fetch("/metric", options);
};

window.addEventListener("load", () => sendMetrics());
