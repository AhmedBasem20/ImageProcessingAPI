import express, {Response} from 'express';

import fs, {promises as pfs} from 'fs';
import path from 'path';
import sharp from 'sharp';

const resize = (res: Response, name:string, width:string,height:string):void => {
    const newDir = fs.existsSync(path.join(__dirname, "..","..", "images", "thumbnails"));
        if (!newDir)
        {
            pfs.mkdir(path.join(__dirname, "..","..", "images", "thumbnails"));
        }

        const filepath = path.join(__dirname, "..","..", "images", name);
        const Exist = () => {
           return fs.existsSync(filepath);
        }
        // if (Exist() && width == undefined && height == undefined)
        // {
        //     res.sendFile(filepath);
        // }
        if (isNaN(parseInt(height)) || isNaN(parseInt(width)) || height <= '0' || width <= '0')
            {
                if (Exist()){
                    res.send("Wrong input type, please make sure to enter an integer value");
                }
               
            }
        const filetest = path.join(__dirname, "..","..", "images", "thumbnails", height+width+name);
        const resized = () => {
            return fs.existsSync(filetest);
        }

        if(Exist())
        {  
            
            if (resized())
            {
                //return the same image if it was processed before with the same width and height.
                res.sendFile(filetest);
            }

            else
            {

                //sharp on width and height to resize image
                sharp(filepath).resize(parseInt(height), parseInt(width)).toFile(filetest);

                setTimeout( (): void => {

                    res.sendFile(filetest);
                    
                }, 1000)
                
            }
           
        }

        else
        {
            res.send("Missing input values, please make sure to enter the image name, width and height");
        }
}
export default resize;