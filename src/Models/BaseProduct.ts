abstract class BaseProduct
{
    private _ID: number;

    public get ID()
    {
        return this._ID;
    }

    private _Name : string;

    public get Name()
    {
        return this._Name;
    }

    private _Brand : string;

    public get Brand()
    {
        return this._Brand;
    }

    private _Price : number;

    public get Price()
    {
        return this._Price;
    }

    private _Comment : string;

    public get Comment()
    {
        return this._Comment;
    }
}