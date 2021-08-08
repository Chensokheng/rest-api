import db from "./config/database.config";
import app from "./app";

db.sync().then(() => {
	console.log("connect to db");
});

const port = 9000;

app.listen(port, () => {
	console.log("server is running on port " + port);
});
