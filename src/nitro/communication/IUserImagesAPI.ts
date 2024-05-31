export interface IUserImagesAPI
{
    getUserImages(userId: number): Promise<{ profileImage: string, bannerImage: string }>;
}
