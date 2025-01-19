const fs = require('node:fs');
const path = require('node:path');
const config = require('../src/utils/config-variables.function.js');

describe('config-variables.function', () => {
    const tempEnvPath = path.join(process.cwd(), '.env');

    beforeAll(() => {
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
        delete process.env.KEY1;
        delete process.env.KEY2;
    });

    afterEach(() => {
        delete process.env.KEY1;
        delete process.env.KEY2;
    });

    it('should load environment variables from .env file', () => {
        config();

        expect(process.env.KEY1).toBe('value1');
        expect(process.env.KEY2).toBe('value2');
    });
});
