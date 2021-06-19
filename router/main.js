module.exports = (app, fs) => {
      app.get('/',function(req,res){
            res.render('index', {
                  title: "MY HOMEPAGE",
                  length: 7
            });
        });
};
