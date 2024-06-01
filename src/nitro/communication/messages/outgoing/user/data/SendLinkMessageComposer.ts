import { IMessageComposer } from '../../../../../../api';

export class SendLinkMessageComposer implements IMessageComposer<ConstructorParameters<typeof SendLinkMessageComposer>>
{
    private _data: [string];

    constructor(link: string)
    {
        this._data = [link];
    }

    public getMessageArray(): ConstructorParameters<typeof SendLinkMessageComposer>
    {
        return this._data;
    }

    public dispose(): void
    {
        this._data = [undefined];
    }
}
