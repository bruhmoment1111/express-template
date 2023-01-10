/*
    This function imports js files located in ./api/
*/
import fs from 'fs/promises'
import { app_path } from "../utils/globals.js";
const loadApis = () =>
    // reading the directory
    fs.readdir(`${app_path}/api`)
        .then(
            (directory) => {
                directory.forEach(fileName => {
                    console.log(`Loading ${fileName}`)
                    import(`${app_path}/api/${fileName}`)
                }); 
            }
        )
        .catch(console.error)
        // Some error orcurred


export default loadApis