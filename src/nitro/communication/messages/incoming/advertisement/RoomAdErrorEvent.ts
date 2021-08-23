import { IMessageEvent, MessageEvent } from '../../../../../core';
import { RoomAdErrorMessageParser } from '../../parser';

export class RoomAdErrorEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, RoomAdErrorMessageParser);
    }

    public getParser(): RoomAdErrorMessageParser
    {
        return this.parser as RoomAdErrorMessageParser;
    }
}