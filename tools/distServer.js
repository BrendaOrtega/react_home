/**
 * Created by BlisS on 26/03/17.
 */
import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';
import colors from 'colors'


/*eslint-disable no-console*/

const port = 8000;
const app = express();

app.use(compression());
app.use(express.static('dist'));

app.get('*', function(req, res){
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(port, function(err){
  if (err){
    console.log(err);
  } else{
    console.log("Tu app está corriendo en http://localhost:8000 pelusina.".yellow);
    open(`http://localhost:${port}`);
  }
});
