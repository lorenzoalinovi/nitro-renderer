import { IMessageComposer } from '../../../../../core/communication/messages/IMessageComposer';

export class ChatReviewGuideDetachedMessageComposer implements IMessageComposer<ConstructorParameters<typeof ChatReviewGuideDetachedMessageComposer>>
{
    private _data: ConstructorParameters<typeof ChatReviewGuideDetachedMessageComposer>;

    constructor()
    {
        this._data = [];
    }

    public getMessageArray()
    {
        return this._data;
    }

    public dispose(): void
    {
        return;
    }
}