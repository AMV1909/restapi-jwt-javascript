import "./database/db.js";
import { app } from "./app.js";

// Starting the server
app.listen(app.get("port"), () => {
    console.log(`Server on port ${app.get("port")}`);
});
