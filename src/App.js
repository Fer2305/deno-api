import Depent from '../depent.js'

const { opine } = Depent

const start = async port => {
    const app = opine();
    initMiddlewares(app);
    await app.listen(port);
    console.log(`server has started on http://localhost:${port} 🚀`);
}

const initMiddlewares = app => {
    app.get("/", function(req, res) {
        res.send("Hello World");
    });
}

export default start;

