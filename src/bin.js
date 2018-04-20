
module.exports = (pluginContext) => {
    return (value, env = {}) => {
        return new Promise((resolve, reject) => {
            value = value.replace(/\s+/g, '');
            var val = parseInt(value, 2);
            var hexVal = val.toString(16);
            while (hexVal.length % 2) {
                hexVal = "0" + hexVal;
            }
            resolve([
                {
                    title: `0x${hexVal}`,
                    subtitle: val.toString()
                }
            ]);
        });
    }
}