import express, {Request, Response} from 'express';
import fs, {promises as pfs} from 'fs';
import path from 'path';
import sharp from 'sharp';

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
    const name = req.query.name as string;
    const height = req.query.height as unknown as string;
    const width = req.query.width as unknown as string;

        if (name == undefined)
        {
            res.send("Missing input values, please make sure to enter the image name, width and height");
        }
        //making thumbnails folder for storing resized images on it.
        const newDir = fs.existsSync(path.join(__dirname, "..","..","..", "images", "thumbnails"));
        if (!newDir)
        {
            pfs.mkdir(path.join(__dirname, "..","..","..", "images", "thumbnails"));
        }

        const filepath = path.join(__dirname, "..","..","..", "images", name);
        const Exist = () => {
           return fs.existsSync(filepath);
        }
        if (isNaN(parseInt(width)) || isNaN(parseInt(height)))
            {
                if (Exist()){
                    res.send("Wrong input type, please make sure to enter an integer value");
                }
               
            }
        const filetest = path.join(__dirname, "..","..","..", "images", "thumbnails", width+height+name);
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
                sharp(filepath).resize(parseInt(width), parseInt(height)).toFile(filetest);

                setTimeout( (): void => {

                    res.sendFile(filetest);
                    
                }, 1000)
                
            }
           
        }

        else
        {
            res.send("Missing input values, please make sure to enter the image name, width and height");
        }
});

export default router;
