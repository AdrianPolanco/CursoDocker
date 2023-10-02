let times = 0;

const syncDB = () => {
    times++;
    console.log("Running task each 5 seconds", times);

    return times;
};

module.exports = { syncDB };
