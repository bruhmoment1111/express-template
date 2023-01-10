// This starts servers but does not configure them!
import { app } from "./app.js";

// Start
app.listen(process.env.PORT)