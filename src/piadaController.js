const Piada = require('./piadaModel');

module.exports = {
    async store(req,res) {
        const { piada } = req.body;
        const piadaExists = await Piada.findOne({ piada });

        if(piadaExists) {
            return res.json(piadaExists);
        }

        const piadaTotal = await Piada.create({
            piada: piada.toUpperCase()
        })
        return res.json(piadaTotal);
    },

    async index(req,res) {
        // Get the count of all users
        Piada.count().exec(function (err, count) {
        // Get a random entry
        var random = Math.floor(Math.random() * count)
        // Again query all users but only fetch one offset by our random #
        Piada.findOne().skip(random).exec(
            function (err, result) {
            res.set('Content-Type', 'text/html');
            return res.send(result.piada)
            })
        })
            
    },
    async delete(req, res) {
        const { _id } = req.body;
        const piada = await Piada.deleteOne({ _id });
        if(piada)
            return res.json({delete: true});
    },

}