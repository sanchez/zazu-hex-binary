
module.exports = (pluginContext) => {
    return (value, env = {}) => {
        return new Promise((resolve, reject) => {
            value = value.replace(/\s+/g, '');
            var val = parseInt(value);
            var hexVal = val.toString(16);
            while (hexVal.length % 2) {
                hexVal = "0" + hexVal;
            }
            var binString = val.toString(2);
            while (binString.length % 4) {
                binString = "0" + binString;
            }
            resolve([
                {
                    title: `0x${hexVal}`,
                    subtitle: `0b${binString}`
                }
            ]);
        });
    }
}