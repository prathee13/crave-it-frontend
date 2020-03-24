import { BehaviorSubject } from 'rxjs';

const location_subject = new BehaviorSubject({is_shared: false});

const LiveLocationService = {
    pusherDisconnect: (channel) => {
        window.pusher_instance.unsubscribe(channel);
    },
    sendMessage: message => {
        location_subject.next(message)
        // window.pusher_channel.trigger('client-location', message);
    },
    pusherConnect: (channel) => {
        // const sm = sendMessage
        window.pusher_channel = window.pusher_instance.subscribe(channel);
        window.pusher_channel.bind('location-event', function(data) {
            data.message.is_shared = true
            location_subject.next(data.message)
        });
    },
    clearMessages: () => location_subject.next(),
    getMessage: () => location_subject.asObservable()
}

export default LiveLocationService; 