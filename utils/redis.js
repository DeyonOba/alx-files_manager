import { createClient } from 'redis';
import { promisify } from 'util';

class RedisClient {
    constructor() {
        this.client = createClient();
        // Log any errors encountered by the Redis client
        this.client.on('error', (err) => {
            console.error('Redis client error:', err);
        });
    }

    // Check if the Redis client is connected
    isAlive() {
        return this.client.connected;
    }

    // Retrieve a value from Redis by key
    async get(key) {
        const getAsync = promisify(this.client.get).bind(this.client);
        return await getAsync(key);
    }

    // Set a value in Redis with an expiration time
    async set(key, value, duration) {
        const setAsync = promisify(this.client.set).bind(this.client);
        await setAsync(key, value);
        await this.client.expire(key, duration);
    }

    // Delete a value from Redis by key
    async del(key) {
        this.client.del(key);
    }
}

const redisClient = new RedisClient();
export default redisClient;
