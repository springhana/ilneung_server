module.exports = {
  apps: [
    {
      name: 'ilneung_server',
      script: '/ilneung_server/dist/main',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};
