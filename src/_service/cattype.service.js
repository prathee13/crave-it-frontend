import { BehaviorSubject } from 'rxjs';

const cat_type_subject = new BehaviorSubject({reset: false});

const catTypeComponentService = {
    sendMessage: message => cat_type_subject.next(message),
    clearMessages: () => cat_type_subject.next(),
    getMessage: () => cat_type_subject.asObservable()
}

export default catTypeComponentService; 