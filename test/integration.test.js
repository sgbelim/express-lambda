const axios = require("axios");

test('Service returns Hello world', async () => {
    try {

        // Act
        const response = await axios.get(process.env.SERVICE_ENDPOINT, {});

        // Assert
        expect(response.data).toBe("Hello World!");

    } catch (e) {
        console.log(e);
        throw e;
    }
});
