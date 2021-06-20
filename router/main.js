module.exports = (app, fs) => {
      app.get('/', (req,res) => {
            res.render('index', {
                  title: 'MY HOMEPAGE',
                  length: 7
            });
      });

      app.get('/list', (req, res) => {
            fs.readFile( __dirname + '/../data/' + 'user.json', 'utf8', (err, data) => {
                  console.log( data );
                  res.end( data );
            });
      });

      app.get('/getUser/:userseq', (req, res) => {
            fs.readFile( __dirname + '/../data/user.json', 'utf8', (err, data) => {
                  let users = JSON.parse(data);
                  res.json(users[req.params.userseq]);
            });
      });

      app.post('/addUser/:userseq', (req, res) => {
            let result = {  };
            let userseq = req.params.userseq;

            // CHECK REQ VALIDITY
            if(!req.body['password'] || !req.body['name']){
                result['success'] = 0;
                result['error'] = 'invalid request';
                res.json(result);
                return;
            }
    
            // LOAD DATA & CHECK DUPLICATION
            fs.readFile( __dirname + '/../data/user.json', 'utf8',  (err, data) => {
                  let users = JSON.parse(data);
                  if(users[userseq]){
                        // DUPLICATION FOUND
                        result['success'] = 0;
                        result['error'] = 'duplicate';
                        res.json(result);
                        return;
                  }
                  
                  // ADD TO DATA
                  users[userseq] = req.body;
                  
                  // SAVE DATA
                  fs.writeFile(__dirname + '/../data/user.json', JSON.stringify(users, null, '\t'), 'utf8', (err, data) => {
                        result = {'success': 1};
                        res.json(result);
                  });
            });
      });

      app.put('/updateUser/:userseq', (req, res) => {

            

            let result = {  };
            let userseq = req.params.userseq;
    
            // CHECK REQ VALIDITY
            if(!req.body['password'] || !req.body['name']){
                result['success'] = 0;
                result['error'] = 'invalid request';
                res.json(result);
                return;
            }
    
            // LOAD DATA
            fs.readFile( __dirname + '/../data/user.json', 'utf8', (err, data) => {
                  let users = JSON.parse(data);
                  // ADD/MODIFY DATA
                  users[userseq] = req.body;
                  
                  // SAVE DATA
                  fs.writeFile(__dirname + '/../data/user.json', JSON.stringify(users, null, '\t'), 'utf8', (err, data) => {
                        result = {'success': 1};
                        res.json(result);
                  });
            });
      });
    
    
      app.delete('/deleteUser/:userseq', (req, res) => {
            let result = { };
            
            //LOAD DATA
            fs.readFile(__dirname + '/../data/user.json', 'utf8', (err, data) => {
                  let users = JSON.parse(data);
                  
                  // IF NOT FOUND
                  if(!users[req.params.userseq]){
                        result['success'] = 0;
                        result['error'] = 'not found';
                        res.json(result);
                        return;
                  }
                  
                  // DELETE FROM DATA
                  delete users[req.params.userseq];
                  
                  // SAVE FILE
                  fs.writeFile(__dirname + '/../data/user.json', JSON.stringify(users, null, '\t'), 'utf8', (err, data) => {
                        result['success'] = 1;
                        res.json(result);
                  });
            });
      });
};
