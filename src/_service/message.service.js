import { BehaviorSubject } from 'rxjs';

// const subject = new BehaviorSubject();

const log_in_subject = new BehaviorSubject({login: false});

// export const messageService = {
//     sendMessage: message => subject.next({ text: message }),
//     clearMessages: () => subject.next(),
//     getMessage: () => subject.asObservable()
// };

const logInNotifyService = {
    sendMessage: message => log_in_subject.next({ login: message }),
    clearMessages: () => log_in_subject.next(),
    getMessage: () => log_in_subject.asObservable()
}

export default logInNotifyService; 