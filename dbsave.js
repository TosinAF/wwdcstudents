var kitty = new Student({ 

    name:       'Sjors Snoeren',
    website:    'http://sjors.me',
    twitter:    'http://twitter.com/sjorssnoeren',
    facebook:   'https://www.facebook.com/sjors.snoeren',
    apps: [{
        year:   2014,
        accepted: true,
        //video:  'http://youtu.be/OVu5M5hHTB8', 
        source: 'https://github.com/SjorsSnoeren/WWDC-App-2014',
        likes:  0,
    
        app_io_link: 'https://app.io/km1LE4',
        orientation: 'portrait',
        device:      'iphone5',
    }]
});



kitty.save(function (err) {
  if (err) // ...
  console.log('meow');
});