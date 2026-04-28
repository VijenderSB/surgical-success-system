module.exports = {
  apps: [
    {
      name: "transess-web",
      script: "dist-server/index.js",
      instances: "max",          // cluster mode — one process per CPU
      exec_mode: "cluster",
      max_memory_restart: "512M",
      env: {
        NODE_ENV: "production",
        PORT: 3000,
        HOST: "127.0.0.1",       // bind to localhost; Nginx proxies in
      },
      out_file: "/var/log/transess/out.log",
      error_file: "/var/log/transess/err.log",
      merge_logs: true,
      time: true,
    },
  ],
};
