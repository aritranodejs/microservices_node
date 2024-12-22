const Redis = require("ioredis");
const redis = new Redis({
    host: "redis", // Docker service name
    port: 6379
});

module.exports = redis;
