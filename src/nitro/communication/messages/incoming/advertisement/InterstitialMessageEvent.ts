import { IMessageEvent, MessageEvent } from '../../../../../core';
import { InterstitialMessageParser } from '../../parser';

export class InterstitialMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, InterstitialMessageParser);
    }

    public getParser(): InterstitialMessageParser
    {
        return this.parser as InterstitialMessageParser;
    }
}