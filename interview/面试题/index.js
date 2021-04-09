var name = 'world!';

function a() {
    // var name;
  if (typeof name === 'undefined') {
    var name = 'Jack'
    console.log('Goodbye' + name);
  } else {
    console.log('Hello' + name);
  }
}
a()
