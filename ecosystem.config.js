module.exports = {
  apps: [
    {
      name: "NextJS Troffen",
      script: "node_modules/.bin/next",
      args: "start",
      cwd: "public_html/troffen_web",
      instances: 3,
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
      env: {
        NODE_ENV: "production",
        PORT: 4000,
      },
    },
  ],
};
