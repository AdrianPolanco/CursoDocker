const { syncDB } = require("../../task/sync-db");

describe("Pruebas en Sync-DB", () => {
    test("Debe ejecutar el proceso 2 veces", () => {
        const times = syncDB();
        console.log(`Se llamo ${times}`);

        expect(times).toBe(1);
    });
});
