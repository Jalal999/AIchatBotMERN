import app from "./app.js";
import { connectToDatabase } from "./db/connection.js";
//connections and listeners
const PORT = process.env.PORT || 5555;
connectToDatabase()
    .then(() => {
    app.listen(PORT, () => console.log("Server Open & Connected To Database..."));
})
    .catch((error) => {
    console.log(error);
});
//# sourceMappingURL=index.js.map