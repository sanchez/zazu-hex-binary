
module.exports = (pluginContext) => {
    return (value, env = {}) => {
        return new Promise((resolve, reject) => {
            value = value.replace(/\s+/g, '');
            var val = parseInt(value, 16);
            var binString = val.toString(2);
            while (binString.length % 4) {
                binString = "0" + binString;
            }
            resolve([
                {
                    title: `0b${binString}`,
                    subtitle: val.toString()
                }
            ]);
        });
    }
}