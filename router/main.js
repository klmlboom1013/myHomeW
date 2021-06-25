/* jshint -W069 */
module.exports = (app, fs) => {
      app.get('/', (req,res) => {
            let sess = req.session;

            res.render('index', {
                  title: 'MY HOMEPAGE',
                  length: 7,
                  name: sess.name,
                  userseq: sess.userseq
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

      app.get('/login/:userseq/:password', (req, res) => {
            let sess = req.session;

            fs.readFile(__dirname + '/../data/user.json', 'utf8', (err, data) => {
                  let users = JSON.parse(data);
                  let userseq = req.params.userseq;
                  let password = req.params.password;
                  let result = {  };
                  if(!users[userseq]){
                        // userseq NOT FOUND
                        result['success'] = 0;
                        result['error'] = 'not found';
                        res.json(result);
                        return;
                  }
    
                  if(users[userseq]['password'] == password){
                        result['success'] = 1;
                        sess.userseq = userseq;
                        sess.name = users[userseq]['name'];
                        res.json(result);
                  }else{
                        result['success'] = 0;
                        result['error'] = 'incorrect';
                        res.json(result);
                  }
            });
      });

      app.get('/logout', function(req, res){
            let sess = req.session;
            if(sess.username){
                  req.session.destroy(function(err){
                        if(err){
                              console.log(err);
                        }else{
                              res.redirect('/');
                        }
                  });
            } else {
                  res.redirect('/');
            }
      });
};
