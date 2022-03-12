import express, {Request, Response} from 'express';
import resize from '../../resize/resize'

const router = express.Router();

router.get('/', (req: Request, res: Response):void => {
    const name = req.query.name as string;
    const height = req.query.height as unknown as string;
    const width = req.query.width as unknown as string;

        if (name == undefined)
        {
            res.send("Missing input values, please make sure to enter the image name, width and height");
        }
        //making thumbnails folder for storing resized images on it.
        resize(res, name, width, height);
});

export default router;
