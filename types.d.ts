export declare class Bus {
    name: any
    handler: any
    recipients: any

    constructor(name: any)

    start(): any
    stop(): any
    handleMessageEvent(event: any): any
    receive(subject: any, callback: any): any
    deliver(subject: any, message?: any): any
}
