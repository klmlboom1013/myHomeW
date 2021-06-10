module.exports = (app) => {
    let pathChapter2Arr = new Array();
    pathChapter2Arr[0] = 'chapters/chapter-02/01-declaring-variables';
    pathChapter2Arr[1] = 'chapters/chapter-02/02-es6-functions';
    pathChapter2Arr[2] = 'chapters/chapter-02/03-arrow-functions';
    pathChapter2Arr[3] = 'chapters/chapter-02/04-objects-and-arrays';
    pathChapter2Arr[4] = 'chapters/chapter-02/05-promises';
    pathChapter2Arr[5] = 'chapters/chapter-02/06-es6-class-syntax';

    app.get('/02/01/01', (req,res) => { res.render(pathChapter2Arr[0] + '/01-const.html'); });
    app.get('/02/01/02', (req,res) => { res.render(pathChapter2Arr[0] + '/02-const.html'); });
    app.get('/02/01/03', (req,res) => { res.render(pathChapter2Arr[0] + '/03-let.html'); });
    app.get('/02/01/04', (req,res) => { res.render(pathChapter2Arr[0] + '/04-let.html'); });
    app.get('/02/01/05', (req,res) => { res.render(pathChapter2Arr[0] + '/05-let.html'); });
    app.get('/02/01/06', (req,res) => { res.render(pathChapter2Arr[0] + '/06-let.html'); });
    app.get('/02/01/07', (req,res) => { res.render(pathChapter2Arr[0] + '/07-template-strings.html'); });
    app.get('/02/01/08', (req,res) => { res.render(pathChapter2Arr[0] + '/08-template-strings.html'); });
    app.get('/02/01/09', (req,res) => { res.render(pathChapter2Arr[0] + '/09-template-strings.html'); });
    app.get('/02/01/10', (req,res) => { res.render(pathChapter2Arr[0] + '/10-template-strings.html'); });
    





/*
    app.get('/02/02/01',function(req,res){ res.render(pathChapter2Arr[1] + ''); });
    app.get('/02/03/01',function(req,res){ res.render(pathChapter2Arr[2] + ''); });
    app.get('/02/04/01',function(req,res){ res.render(pathChapter2Arr[3] + ''); });
    app.get('/02/05/01',function(req,res){ res.render(pathChapter2Arr[4] + ''); });
    app.get('/02/06/01',function(req,res){ res.render(pathChapter2Arr[5] + ''); }); 
*/   
   
   
   
}