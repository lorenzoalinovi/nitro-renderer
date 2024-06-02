import { IMessageComposer } from '../../../../../../api';

export class SendLinkMessageComposer implements IMessageComposer<ConstructorParameters<typeof SendLinkMessageComposer>>
{
    private _data: [string, string];

    constructor(link: string, imageType: string)
    {
        this._data = [link, imageType];
    }

    public getMessageArray(): ConstructorParameters<typeof SendLinkMessageComposer>
    {
        return this._data;
    }

    public dispose(): void
    {
        this._data = [undefined, undefined];
    }
}
