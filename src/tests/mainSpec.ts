 import resize from  "../resize/resize";
import supertest from "supertest";
import app from '../main';
import path from 'path';
import fs from 'fs';

const request = supertest(app);
describe('Test endpoint responses', () => {
    it('gets the api endpoint', async () => {
        const response = await request.get('/api');
        expect(response.status).toBe(200);
        
    });

    it("should create a new folder for storing the previous resized images", () => {
        const filepath = path.join(__dirname,
             "..",
             "..",
              "images",
               "thumbnails"
               );
               request.get('/api?name=rawa2.jpg&height=400&height=400');
               expect(fs.existsSync(filepath)).toBeTruthy();
    })
});

//expect(resized).toBeTruthy();
// async () => {
//     const result = await Exist();
//     expect(result).toBeTruthy();
// }
// () => {
//     return Exist().then( result => {
//         expect(result).toBeTruthy();
//     })
// }
