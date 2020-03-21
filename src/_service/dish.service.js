import { BehaviorSubject } from 'rxjs';

// const subject = new BehaviorSubject();

const dish_added_subject = new BehaviorSubject({added: false});

// export const messageService = {
//     sendMessage: message => subject.next({ text: message }),
//     clearMessages: () => subject.next(),
//     getMessage: () => subject.asObservable()
// };

const DishAddNotifyService = {
    sendMessage: message => dish_added_subject.next({ added: message }),
    clearMessages: () => dish_added_subject.next(),
    getMessage: () => dish_added_subject.asObservable()
}

export default DishAddNotifyService; 