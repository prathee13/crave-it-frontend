import { BehaviorSubject } from 'rxjs';

const log_in_subject = new BehaviorSubject({login: false});

const logInNotifyService = {
    sendMessage: message => log_in_subject.next({ login: message }),
    clearMessages: () => log_in_subject.next(),
    getMessage: () => log_in_subject.asObservable()
}

export default logInNotifyService; 