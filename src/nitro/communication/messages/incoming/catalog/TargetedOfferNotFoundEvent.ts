import { IMessageEvent, MessageEvent } from '../../../../../core';
import { TargetedOfferNotFoundParser } from '../../parser';

export class TargetedOfferNotFoundEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, TargetedOfferNotFoundParser);
    }

    public getParser(): TargetedOfferNotFoundParser
    {
        return this.parser as TargetedOfferNotFoundParser;
    }
}