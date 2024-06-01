import { IMessageComposer } from '../../../../../../api';

export class UserMottoComposer implements IMessageComposer<ConstructorParameters<typeof UserMottoComposer>>
{
    private _data: ConstructorParameters<typeof UserMottoComposer>;

    constructor(motto: string)
    {
        this._data = [motto];
    }

    public getMessageArray()
    {
        console.log('a')
        return this._data;
    }

    public dispose(): void
    {
        return;
    }
}
