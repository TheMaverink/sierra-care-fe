export const IS_DEV = process.env.NODE_ENV === "development";

const ENV = {
  dev: {
    BASE_API_URL: `http://localhost:8080/api/`,
  },
  prod: {
    BASE_API_URL: `http://localhost:8080/api/`,
  },
};

export const getEnvVars = () => {
  if (IS_DEV) {
    return ENV.dev;
  }

  return ENV.prod;
};
