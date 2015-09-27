// var express = require('express');
// var router = express.Router();

var mongoose = require('mongoose');
var Todo = mongoose.model('Todo');

/* GET home page. */
// exports.index = function(req, res, next) {
//   res.render('index', { title: 'Express Todo Example' });
// };

exports.index = function ( req, res ){
  Todo.find().
  	sort('-updated_at').
  	exec( function ( err, todos, count ){
    res.render( 'index', {
      title : 'Express Todo Example',
      todos : todos
    });
  });
};

exports.create = function ( req, res ){
  new Todo({
    content    : req.body.content,
    updated_at : Date.now()
  }).save( function( err, todo, count ){
  	console.log(todo);
    res.redirect( '/' ); // to root dir
  });
};



exports.edit = function ( req, res ){
  Todo.find().
  	sort('-updated_at').
  	exec( function ( err, todos ){
    res.render( 'edit', {
        title   : 'Express Todo Example',
        todos   : todos,
        current : req.params.id
    });
  });
};

// exports.completed = function ( req, res ){
//   Todo.findById( req.params.id, function ( err, todo ){
//     // todo.content    = req.body.content;
//     todo.updated_at = Date.now();
//     todo.save( function ( err, todo, count ){
//       res.redirect( '/' );
//     });
//   });
// };

exports.destroy = function ( req, res ){
  Todo.findById( req.params.id, function ( err, todo ){
    todo.remove( function ( err, todo ){
      res.redirect( '/' );
    });
  });
};

exports.update = function ( req, res ){
  Todo.findById( req.params.id, function ( err, todo ){
    todo.content    = req.body.content;
    todo.updated_at = Date.now();
    todo.save( function ( err, todo, count ){
      res.redirect( '/' );
    });
  });
};

//var frm = document.getElementById('myform');
// alert("empty");
// if(document.getElementById("myform").value == "")
// {
//     alert("empty")
// }
