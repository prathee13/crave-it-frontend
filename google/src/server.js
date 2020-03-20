var bodyParser = require('body-parser');
var Pusher = require('pusher');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// to serve our JavaScript, CSS and index.html
app.use(express.static('./'));

var pusher = new Pusher({
    appId: 'YOUR_APP_ID',
    key: 'YOUR_KEY',
    secret: 'YOUR_SECRET_KEY',
    cluster: 'YOUR_CLUSTER',
    //ssl=True
});

// pusher_client.trigger('my-channel', 'my-event', {'message': 'hello world'})

app.post('/pusher/auth', function (req, res) {
    var socketId = req.body.socket_id;
    var channel = req.body.channel_name;
    var auth = pusher.authenticate(socketId, channel);
    res.send(auth);
});

var port = process.env.PORT || 5000;
app.listen(port, () => console.log('Listening at http://localhost:5000'));

function createMyLocationChannel(name) {
    var myLocationChannel = pusher.subscribe('private-' + name);
    myLocationChannel.bind('pusher:subscription_succeeded', function () {
        // safe to now trigger events
        // use the watchPosition API to watch the changing location
        // and trigger events with new coordinates
        locationWatcher = navigator.geolocation.watchPosition(function (position) {
            var location = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            triggerLocationChangeEvents(myLocationChannel, location);
        });

        // also start a setInterval to keep sending the loction every 5 secs
        sendLocationInterval = setInterval(function () {
            // not using `triggerLocationChangeEvents` to keep the pipes different
            myLocationChannel.trigger('client-location', myLastKnownLocation)
        }, 5000);

        // also update myLastKnownLocation everytime we trigger an event
function triggerLocationChangeEvents (channel, location) {
    // update myLastLocation
    myLastKnownLocation = location;
    channel.trigger('client-location', location);
  }
    });
}
