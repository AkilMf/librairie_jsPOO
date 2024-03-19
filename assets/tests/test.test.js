/**
 * @param {String} description 
 * @param {Function} callback 
 */
export function test(description, callback) {
    try {
        callback();
        console.log(`✅ ${description}`);
    } catch (err) {
        console.error(`❌ ${description}`);
        console.error(err);
    }
};


/**
 * @param {Boolean} condition 
 * @param {String} messageErreur 
 */
export function affirme(condition, messageErreur) {
    if (!condition) {
        throw new Error(messageErreur);
    }
};