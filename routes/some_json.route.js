module.exports = {
    name: "Json",
    register: async( server/* , options */ ) => {

        const jsonDummyResponse = {
            "red": "delicious",
            "fuji": "sweet",
            "nineteen": 19
        };

        server.route( {
            method: "GET",
            path: "/api/json",
            handler: async( /*  request, h */ ) => {
                return jsonDummyResponse;
            }
        } );
    }
};
