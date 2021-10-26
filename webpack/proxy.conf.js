function setupProxy({ tls }) {
  const conf = [
    {
      context: [
        '/api',
        '/services',
        '/management',
        '/swagger-resources',
        '/v2/api-docs',
        '/v3/api-docs',
        '/h2-console',
        '/auth',
        '/health',
      ],
      target: `http${tls ? 's' : ''}://localhost:9012`,
      secure: false,
      changeOrigin: tls,
    },
    {
      context: ['/websocket'],
      target: 'ws://127.0.0.1:9012',
      ws: true,
    },
  ];
  return conf;
}

module.exports = setupProxy;
