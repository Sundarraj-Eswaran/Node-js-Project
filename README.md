# Backend Engineer Interview Project

### **High level spec**

Your task is to build a REST API using TypeScript with Node.js that returns data from sqlite database.

The `database.sqli` file is a database that includes 3 tables:
- *users* - each row represnts a single user
- *albums* - albums of a user
- *images* - images of an album

The `entities_sample.txt` file includes the structure of the tables and sample data of each table.

The API should have the following endpoints:
- Get User by user Id
- Get User and Albums by user Id
- Get Albums and Images by user Id
    - Endpoint should include support for pagination
    - Endpoint should include support for sorting by album title

-----

### **How to share your results?**
- [ ] Clone this repository to your private account.
- [ ] .... develop .....
- [ ] Once you are ready, create a pull request from your private repo and branch to the original repository.


### **Evaluation:**
- [ ] There should be **at least** one test written and the README file should include instructions on how to execute it.
- [ ] You should provide clear documentation of the API, you can use Swagger or any other format.
- [ ] The app should build without errors (typically using `npm run build`). If there are necessary steps required to get it to compile, those should be covered in the README.md.
- [ ] No crashes or bugs.
- [ ] Code is easily understood and communicative (eg. comments, variable names, etc). 
- [ ] Everything that you decide to not do due to the limitation of time should be documented in the README.
- [ ] GitHub commit history is consistent, easy to follow and understand. 

---------------------

## Execute
1. **npm start - Command - How to run your results?**
- [ ] - Default
        http://localhost:3000/ - Server is running or not check. 

- [ ] - Get User by user Id - > http://localhost:3000/users?userid=2 
        To get the json object of user info what user id you have been passed on the url. 
        output. 
        {"data":[{"UserName":"Ervin Howell","Email":"Shanna@melissa.tv"}]}

- [ ] - Get User and Albums by user Id - > http://localhost:3000/users/Album?userid=2 
        To get the json object of album info what user id you have been passed on the url. 
        output. 
        {"data":[{"UserName":"Ervin Howell","Email":"Shanna@melissa.tv","AlbumTitle":"ab rerum non rerum consequatur ut ea unde"},{"UserName":"Ervin Howell","Email":"Shanna@melissa.tv","AlbumTitle":"aut minima voluptatem ut velit"},{"UserName":"Ervin Howell","Email":"Shanna@melissa.tv","AlbumTitle":"consequatur autem doloribus natus consectetur"},{"UserName":"Ervin Howell","Email":"Shanna@melissa.tv","AlbumTitle":"ducimus molestias eos animi atque nihil"},{"UserName":"Ervin Howell","Email":"Shanna@melissa.tv","AlbumTitle":"nesciunt quia et doloremque"},{"UserName":"Ervin Howell","Email":"Shanna@melissa.tv","AlbumTitle":"quam nostrum impedit mollitia quod et dolor"},{"UserName":"Ervin Howell","Email":"Shanna@melissa.tv","AlbumTitle":"ut pariatur rerum ipsum natus repellendus praesentium"},{"UserName":"Ervin Howell","Email":"Shanna@melissa.tv","AlbumTitle":"velit pariatur quaerat similique libero omnis quia"},{"UserName":"Ervin Howell","Email":"Shanna@melissa.tv","AlbumTitle":"voluptas rerum iure ut enim"},{"UserName":"Ervin Howell","Email":"Shanna@melissa.tv","AlbumTitle":"voluptatem aut maxime inventore autem magnam atque repellat"}]}

- [ ] - Get Albums and Images by user Id 
      - Endpoint should include support for pagination
      - Endpoint should include support for sorting by album title
      - http://localhost:3000/users/AlbumImage?userid=2&orderbyTitle=ASC&page=2

       To get the json object of album, image and user info what user id you have been passed on the url. Pass parameter as userid, orderbytiitle and Page. here based on page wise fetching data 
       output.
       {"data":[{"UserName":"Ervin Howell","Email":"Shanna@melissa.tv","AlbumTitle":"ab rerum non rerum consequatur ut ea unde","Imagetitle":"doloribus quasi ullam","ImageURL":"https://via.placeholder.com/600/f7d7d"},{"UserName":"Ervin Howell","Email":"Shanna@melissa.tv","AlbumTitle":"ab rerum non rerum consequatur ut ea unde","Imagetitle":"eaque provident rerum hic atque vel quod","ImageURL":"https://via.placeholder.com/600/3502b5"},{"UserName":"Ervin Howell","Email":"Shanna@melissa.tv","AlbumTitle":"ab rerum non rerum consequatur ut ea unde","Imagetitle":"eligendi enim cum quos et fuga","ImageURL":"https://via.placeholder.com/600/5ada93"},{"UserName":"Ervin Howell","Email":"Shanna@melissa.tv","AlbumTitle":"ab rerum non rerum consequatur ut ea unde","Imagetitle":"eligendi minus incidunt iusto soluta qui dolorem","ImageURL":"https://via.placeholder.com/600/2ea836"},{"UserName":"Ervin Howell","Email":"Shanna@melissa.tv","AlbumTitle":"ab rerum non rerum consequatur ut ea unde","Imagetitle":"est culpa similique sint tempora qui","ImageURL":"https://via.placeholder.com/600/178216"},{"UserName":"Ervin Howell","Email":"Shanna@melissa.tv","AlbumTitle":"ab rerum non rerum consequatur ut ea unde","Imagetitle":"est quae quasi sunt voluptas","ImageURL":"https://via.placeholder.com/600/ebfe6e"},{"UserName":"Ervin Howell","Email":"Shanna@melissa.tv","AlbumTitle":"ab rerum non rerum consequatur ut ea unde","Imagetitle":"et reiciendis sunt occaecati aut autem","ImageURL":"https://via.placeholder.com/600/e83639"},{"UserName":"Ervin Howell","Email":"Shanna@melissa.tv","AlbumTitle":"ab rerum non rerum consequatur ut ea unde","Imagetitle":"expedita et maiores quod distinctio","ImageURL":"https://via.placeholder.com/600/a7751d"},{"UserName":"Ervin Howell","Email":"Shanna@melissa.tv","AlbumTitle":"ab rerum non rerum consequatur ut ea unde","Imagetitle":"id eius modi quo ut sunt","ImageURL":"https://via.placeholder.com/600/6ea357"},{"UserName":"Ervin Howell","Email":"Shanna@melissa.tv","AlbumTitle":"ab rerum non rerum consequatur ut ea unde","Imagetitle":"id sint pariatur reiciendis soluta animi","ImageURL":"https://via.placeholder.com/600/70c4ab"}],"meta":{"page":"2"}}

2. **npm test -  Command - How to run your results?**
      Written three test cases all are executed passed

3. **Swagger**
     http://localhost:3000/api-docs/ - To check swagger but some ui version not supported on executed. Please check all the API through Post man or thunder client in visual studio. 

4. **npm run build - command**
     Need to implement but tried not works for me 

    
