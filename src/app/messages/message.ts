export enum MessageType {
	Success,
	Error
}

export class Message {
  message: string;
  type: MessageType;
}