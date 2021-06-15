export const environment = {
  production: true,
  host : process.env.COMPONENT_BACKEND_HOST || '0.0.0.0',
  port: process.env.COMPONENT_BACKEND_PORT || 8080
};
