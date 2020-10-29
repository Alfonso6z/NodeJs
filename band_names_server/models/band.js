

// INVESTIGATE: npm uuid
const {v4:uuidV4} = require('uuid'); 
class Band{

    constructor(name = 'no-name'){
        // NOTE: indentuificador único
        this.id = uuidV4();
        this.name = name;
        this.votes = 0;
    }

}
module.exports = Band;