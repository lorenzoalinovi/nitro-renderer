import { IMessageComposer } from '../../../../../../api';

export class SetActivatedBadgesComposer implements IMessageComposer<any[]>
{
    private _badges: string[] = [];

    public getMessageArray()
    {
        const data = [];

        for (let i = 0; i < this._badges.length; i++)
        {
            data.push(this._badges[i]);
        }

        return data;
    }

    public dispose(): void
    {
        return;
    }

    public addActivatedBadge(badge: string): void
    {
        this._badges.push(badge);
    }
}
