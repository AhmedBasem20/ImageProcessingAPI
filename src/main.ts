import express, {Request, Response} from 'express';
import fs, {promises as pfs} from 'fs';
import path from 'path';
import sharp from 'sharp';
const app = express();
const port = 3000;

app.get('/api', (req: Request, res: Response) => {
    const name = req.query.name as string;
    const height = req.query.height as unknown as string;
    const width = req.query.width as unknown as string;
    
        
        const filepath = path.join(__dirname, "..", "images", name);
        const filetest = path.join(__dirname, "..", "images", width+height+name);
        const exist = fs.existsSync(filepath);
        if(exist)
        {   
            if(filetest)
            {
                //return the same image if it was processed before
                res.sendFile(filetest)
            }
            

            //sharp on width and height to resize image
            sharp(filepath).resize(parseInt(width), parseInt(height)).toFile(filetest);
            res.sendFile(filetest);
        }
});

app.listen(port, () => {
    console.log(`server started at localhost:${port}`);
});
