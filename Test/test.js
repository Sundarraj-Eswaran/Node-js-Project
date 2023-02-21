const app = require('../index') 
const request = require('supertest')


describe("test users endpoints",()=>{
  
    it('Get the single user pass from query', () => {
        return request(app)
          .get('/users?userid=1')
          .expect(200)
          .then((response) => {
            expect(response.body.data).toEqual(
              expect.arrayContaining([
                expect.objectContaining({
                 UserName: expect.any(String),
                 Email: expect.any(String)
                }),
              ]),

            );
          });
      });

     
      it('Get the album based on user id ', () => {
        return request(app)
          .get('/users/Album?userid=1')
          .expect(200)
          .then((response) => {
            expect(response.body.data).toEqual(
              expect.arrayContaining([
                expect.objectContaining({
                 UserName: expect.any(String),
                 Email: expect.any(String),
                 AlbumTitle:expect.any(String)
                }),
              ]),

            );
          });
      });

      it('Get the user, album and image by user id along with page and order', () => {
        return request(app)
          .get('/users/AlbumImage?userid=2&orderbyTitle=ASC&page=2')
          .expect(200)
          .then((response) => {
            expect(response.body.data).toEqual(
                
              expect.arrayContaining([
                expect.objectContaining({
                 UserName: expect.any(String),
                 Email: expect.any(String),
                 AlbumTitle:expect.any(String),
                 Imagetitle:expect.any(String),
                 ImageURL:expect.any(String)
                 
                }),
              ]),

            );
          });
      });
})
