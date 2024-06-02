const fs = require('node:fs');
const path = require('node:path');
const config = require('../src/utils/config-variables.function.js');

describe('config-variables.function', () => {
    const tempEnvPath = path.join(process.cwd(), '.env');

    beforeAll(() => {
        // Create a temporary .env file
        const envContent = `
KEY1=value1
KEY2=value2
`;
        fs.writeFileSync(tempEnvPath, envContent);
    });

    afterAll(() => {
        fs.unlinkSync(tempEnvPath);
    });

    beforeEach(() => {
        // Clear environment variables before each test
        delete process.env.KEY1;
        delete process.env.KEY2;
    });

    afterEach(() => {
        // Clear environment variables after each test
        delete process.env.KEY1;
        delete process.env.KEY2;
    });

    it('should load environment variables from .env file', () => {
        // Load configuration
        config();

        // Check environment variables
        expect(process.env.KEY1).toBe('value1');
        expect(process.env.KEY2).toBe('value2');
    });
});
