import { IMessageComposer } from '../../../../../core';

export class GetInterstitialMessageComposer implements IMessageComposer<ConstructorParameters<typeof GetInterstitialMessageComposer>>
{
    private _data: ConstructorParameters<typeof GetInterstitialMessageComposer>;

    constructor()
    {
        this._data = [];
    }

    dispose(): void
    {
        return;
    }

    public getMessageArray()
    {
        return this._data;
    }
}