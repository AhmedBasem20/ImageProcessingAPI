import express, {Request, Response} from 'express';
import fs, {promises as pfs} from 'fs';
import path from 'path';
import sharp from 'sharp';

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
    const name = req.query.name as string;
    const height = req.query.height as unknown as string;
    const width = req.query.width as unknown as string;
    if (isNaN(parseInt(width)) || isNaN(parseInt(height)))
    {
        res.send("خخخخخخخخخخ اكتب كسم رقم وبطل بعبصة");
    }
        //making new folder for resized images.
        pfs.mkdir(path.join(__dirname, "..","..","..", "images", "thumbnails"));

        const filepath = path.join(__dirname, "..","..","..", "images", name);
        const filetest = path.join(__dirname, "..","..","..", "images", "thumbnails", width+height+name);
        const exist = fs.existsSync(filepath);
        const resized = fs.existsSync(filetest);

        if(exist)
        {   
            if(resized)
            {
                //return the same image if it was processed before with the same width and height.
                res.sendFile(filetest);
            }

            else
            {

                //sharp on width and height to resize image
                sharp(filepath).resize(parseInt(width), parseInt(height)).toFile(filetest);
                console.log("hi");

                setTimeout( (): void => {

                    res.sendFile(filetest);
                    
                }, 500)
                
            }
           
        }

        else
        {
            res.send("اكتب كسم اسم الصورة صح");
        }
});
export default router;