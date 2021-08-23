import { IMessageEvent, MessageEvent } from '../../../../../core';
import { CheckUserNameResultMessageParser } from '../../parser/avatar/CheckUserNameResultMessageParser';

export class CheckUserNameResultMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, CheckUserNameResultMessageParser);
    }

    public getParser(): CheckUserNameResultMessageParser
    {
        return this.parser as CheckUserNameResultMessageParser;
    }
}