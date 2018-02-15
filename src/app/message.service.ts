import { Injectable } from '@angular/core';
import { MessageType, Message } from './messages/message';

@Injectable()
export class MessageService {

	messages: Message[] = [];

	addSuccess(message: string) {
		this.messages.push({message :message, type:MessageType.Success,});
	}
	
	addError(message: string) {
		this.messages.push({message :message, type:MessageType.Error,});
	}

	getSuccessMessages():Message[]
	{
		return this.messages.filter(
			function (value) {
				return (value.type == MessageType.Success);
			}
		);
	}
	
	getErrorMessages():Message[]
	{
		return this.messages.filter(
			function (value) {
				return (value.type == MessageType.Error);
			}
		);
	}

	clear() {
		this.messages = [];
	}
	constructor() { }

}
