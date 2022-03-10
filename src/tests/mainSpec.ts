//in progress
import { exit } from "process";
// import Exist from  "../routes/api/index";
// import resized from  "../routes/api/index";
import supertest from "supertest";
import app from '../main';

const request = supertest(app);
describe('Test endpoint responses', () => {
    it('gets the api endpoint', async () => {
        const response = await request.get('/api');
        expect(response.status).toBe(200);
        
    });
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
