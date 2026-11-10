import dotenv from "dotenv";
dotenv.config({ path: "./.env" });
import app from "./app.js";
import connectDb from "./config/db.js";

const port = process.env.PORT || 8000;
const url = process.env.MONGODB_URI;

connectDb(url)
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on port : ${port}`);
    });
  })
  .catch((error) => {
    console.error("App Startup Failed!!", error);
    process.exit(1);
  });
