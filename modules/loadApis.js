/*
    This function imports js files located in ./api/ and it's subdirectories
*/
import fs from 'fs/promises'
import { app_path } from "../utils/globals.js";

const loadApis = (initialPath = `${app_path}/api`) => {
    // reading the directory
    fs.readdir(initialPath)
        .then(
            (directory) => {
                directory.forEach(fileName => {
                    const filePath = `${initialPath}/${fileName}`
                    fs.stat(filePath)
                        .then(
                            (fileInfo) => {
                                if(fileInfo.isDirectory()) loadApis(filePath)
                                else if(fileInfo.isFile()) {
                                    console.log(`Loading ${initialPath.slice(app_path.length)}/${fileName}`)
                                    import(filePath)
                                }
                                else if(fileInfo.isCharacterDevice()) {
                                    console.error('This program is not susposed to load character devices')
                                }
                            }
                        )

                }); 
            }
        )
        .catch(console.error)
        // Some error orcurred
    }

export default loadApis
