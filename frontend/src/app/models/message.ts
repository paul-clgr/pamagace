export interface Message {
    id?: number;
    id_user_sender: number,
    id_user_receiver: number,
    message: string,
    timestamp: Date
  }