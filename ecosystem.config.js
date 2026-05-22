module.exports = {
  apps: [{
    name: 'sigmas-service',
    script: 'yarn run start',
    cwd: '/app/sigmas',
    instances: 1,
    exec_mode: 'fork',
    watch: false,
    autorestart: true,
    restart_delay: 3000,
    max_restarts: 10,
    min_uptime: '10s',
    env: {
      NODE_ENV: 'production',
      PORT: 9999
    }
  }]
};